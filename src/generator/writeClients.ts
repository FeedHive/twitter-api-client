import fs from 'fs';
import { resolve } from 'path';
import IReferenceDirectory from '../interfaces/IReferenceDirectory';
import { createCamelCaseTitle } from '../utils/utils';
import { removeHttpVerbs, startWithHttpVerb, getMethodName } from '../base/httpVerbs';

function writeClients(dictionary: IReferenceDirectory[]) {
  const generatedPath = resolve(__dirname, '../../generated');
  const clientsPath = `${generatedPath}/clients`;

  let superClientFile = `import IClientOptions from './base/IClientOptions';\n`;
  superClientFile += `import Transport from './base/Transport';\n\n`;
  const clients: string[] = [];

  dictionary.forEach((g) => {
    const fileName = createCamelCaseTitle(g.title);
    const interfacesParamsImportMap: { [key: string]: string[] } = {};
    const interfacesTypesImports: string[] = [];
    const clientMethods: string[] = [];

    clients.push(`${fileName}Client`);

    let clientFile = ``;

    g.subgroups.forEach((s) => {
      const interfacesParamsImports: string[] = [];
      const subgroupFileName = createCamelCaseTitle(s.title);

      s.endpoints.forEach((e) => {
        if (!startWithHttpVerb(e.title)) {
          console.log(`❌ "${e.title}" not added. Verb is missing`);
          return;
        }
        const interfaceName = createCamelCaseTitle(removeHttpVerbs(e.title));
        const methodName = interfaceName.replace(/^./, interfaceName[0].toLowerCase());

        if (e.parameters) {
          interfacesParamsImports.push(`${interfaceName}Params`);
        }

        if (e.exampleResponse) {
          interfacesTypesImports.push(interfaceName);
        }

        const optional = !e.parameters?.some((p) => p.required) ? '?' : '';
        const signature = e.parameters ? `(parameters${optional}: ${interfaceName}Params)` : '()';
        const doMethod = getMethodName(e.title);
        const listed = e.exampleResponse?.startsWith('[') ? '[]' : '';
        const returnType = e.exampleResponse ? `<${interfaceName}${listed}>` : '';
        const resourceUrl = e.resourceUrl.replace(':id', `' + parameters.id + '`);

        let method = '  /**\n';
        method += `   * ${e.description?.replace(/\n/g, ' ')}\n`;
        method += '   *\n';
        method += `   * @link ${e.url}\n`;
        method += e.parameters ? '   * @param parameters\n' : '';
        method += '   */\n';

        method += `  public async ${methodName}${signature} {\n`;

        let requestParams = '';

        if (e.parameters && e.title.startsWith('GET')) {
          method += `    const params = createParams(parameters);\n`;
          requestParams = ' + params';
        }

        if (e.parameters && e.title.startsWith('POST')) {
          requestParams = ', parameters';
        }

        method += `    return await ${doMethod}${returnType}('${resourceUrl}'${requestParams});\n`;
        method += '  }\n\n';

        clientMethods.push(method);
        console.log(`✅ "${e.title}" added.`);
      });

      if (interfacesParamsImports.length) {
        interfacesParamsImportMap[subgroupFileName] = interfacesParamsImports;
      }
    });

    if (Object.keys(interfacesParamsImportMap).length) {
      clientFile += `import { createParams } from '../base/utils';\n`;
    }

    Object.entries(interfacesParamsImportMap).forEach(([file, imports]) => {
      if (imports.length) {
        clientFile += `import {\n`;
        imports.forEach((param) => (clientFile += `  ${param},\n`));
        clientFile += `} from '../interfaces/params/${file}Params';\n\n`;

        superClientFile += `export {\n`;
        imports.forEach((param) => (superClientFile += `  ${param},\n`));
        superClientFile += `} from './interfaces/params/${file}Params';\n\n`;
      }
    });

    interfacesTypesImports.forEach((type) => {
      clientFile += `import ${type} from '../interfaces/types/${type}Types';\n`;
      superClientFile += `import ${type} from './interfaces/types/${type}Types';\n`;
      superClientFile += `export { ${type} };\n`;
    });

    clientFile += `import Transport from '../base/Transport'\n`;
    clientFile += `\nclass ${fileName}Client {\n`;
    clientFile += `
    private transport: Transport;

    constructor(transport: Transport) {
      if (!transport) {
        throw Error('Transport class needs to be provided.');
      }
      
      this.transport = transport;
    }\n`;

    clientMethods.forEach((method) => (clientFile += method));

    clientFile += `}\n\nexport default ${fileName}Client;\n`;

    fs.writeFileSync(`${clientsPath}/${fileName}Client.ts`, clientFile);
  });

  clients.forEach((client) => {
    superClientFile += `import ${client} from './clients/${client}';\n`;
  });

  superClientFile += '\nclass TwitterClient {\n';

  clients.forEach((client) => {
    const clientName = client.replace(/^./, client[0].toLowerCase());
    superClientFile += `  private ${clientName}: ${client} | undefined;\n`;
  });
  superClientFile += `  private transport: Transport;\n`;
  superClientFile += `
  /**
   * Provide Twitter API Credentials and options
   * @param options
   */
  constructor(options: IClientOptions) {
    if (!options.apiKey) {
      throw Error('API KEY needs to be provided.');
    }

    if (!options.apiSecret) {
      throw Error('API SECRET needs to be provided.');
    }

    if (!options.accessToken) {
      throw Error('ACCESS TOKEN needs to be provided.');
    }

    if (!options.accessTokenSecret) {
      throw Error('ACCESS TOKEN SECRET needs to be provided.');
    }
    this.transport = new Transport(options);
  }\n`;

  clients.forEach((client) => {
    const clientName = client.replace(/^./, client[0].toLowerCase());
    superClientFile += `
  public get ${clientName.replace('Client', '')}() {
    if (!this.${clientName}) {
      this.${clientName} = new ${client}(this.transport);
    }

    return this.${clientName};
  }
`;
  });

  superClientFile += '}\n\nexport { TwitterClient };\n';
  fs.writeFileSync(`${generatedPath}/index.ts`, superClientFile);
}

export default writeClients;
