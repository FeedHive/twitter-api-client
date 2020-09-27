import fs from 'fs';
import { resolve } from 'path';
import IReferenceDirectory from '../interfaces/IReferenceDirectory';
import { createCamelCaseTitle } from '../utils/utils';

function writeReferences(dictionary: IReferenceDirectory[]) {
  const generatedPath = resolve(__dirname, '../..');
  const readmeFile = `${generatedPath}/REFERENCES.md`;

  let readmeContent = '# Reference\n\n';

  dictionary.forEach((g) => {
    const clientName = createCamelCaseTitle(g.title);
    const lowerClientName = clientName.replace(/^./, clientName[0].toLowerCase());

    readmeContent += `## ${clientName}\n`;

    g.subgroups.forEach((s) => {
      s.endpoints.forEach((e) => {
        if (!e.title.startsWith('GET') && !e.title.startsWith('POST')) {
          return;
        }

        const titleWithoutVerb = e.title.replace('GET', '').replace('POST', '');
        const interfaceName = createCamelCaseTitle(titleWithoutVerb);
        const methodName = interfaceName.replace(/^./, interfaceName[0].toLowerCase());

        const signature = e.parameters ? `(parameters)` : '()';

        readmeContent += `### \`TwitterClient.${lowerClientName}.${methodName}${signature}\`\n`;
        readmeContent += `#### Description\n`;
        readmeContent += `${e.description}\n\n`;

        if (e.parameters) {
          readmeContent += '#### Parameters\n\n';
          readmeContent += '| Name | Required | type |\n';
          readmeContent += '| ---- | -------- | ---- |\n';
          e.parameters.forEach((param) => {
            readmeContent += `| ${param.name} | ${param.required} | ${param.type} |\n`;
          });
        }

        readmeContent += '  \n';

        readmeContent += '#### Link\n';
        readmeContent += `${e.url}  \n`;

        readmeContent += '  \n';
      });
    });
  });

  fs.writeFileSync(readmeFile, readmeContent);
}

export default writeReferences;
