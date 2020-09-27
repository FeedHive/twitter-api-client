import fs from 'fs';
import { resolve } from 'path';
import IReferenceDirectory from '../interfaces/IReferenceDirectory';
import { createCamelCaseTitle } from '../utils/utils';

function writeParamsInterfaces(dictionary: IReferenceDirectory[]) {
  const generatedPath = resolve(__dirname, '../../generated');
  const paramsPath = `${generatedPath}/interfaces/params`;

  dictionary.forEach((g) => {
    g.subgroups.forEach((s) => {
      const fileName = createCamelCaseTitle(s.title);
      let interfacesContent = '';

      s.endpoints.forEach((e, i) => {
        if (!e.parameters) {
          return;
        }

        const titleWithoutVerb = e.title.replace('GET', '').replace('POST', '');
        const interfaceName = createCamelCaseTitle(titleWithoutVerb);

        let params = '';

        e.parameters.forEach((p, i) => {
          params += `  /**\n  * ${p.description}\n  */\n  ${p.name}${!p.required ? '?' : ''}: ${
            p.type === 'number' ? 'string | number' : p.type
          };`;

          if (i !== (e.parameters?.length ?? 0) - 1) {
            params += '\n';
          }
        });

        interfacesContent += `export interface ${interfaceName}Params {\n${params}\n}\n`;

        if (i !== s.endpoints.length - 1) {
          interfacesContent += '\n';
        }
      });

      if (!interfacesContent) {
        return;
      }

      fs.writeFileSync(`${paramsPath}/${fileName}Params.ts`, interfacesContent);
    });
  });
}

export default writeParamsInterfaces;
