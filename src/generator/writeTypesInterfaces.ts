import fs from 'fs';
import { resolve } from 'path';
import JsonToTS from 'json-to-ts';
import IReferenceDirectory from '../interfaces/IReferenceDirectory';
import { createCamelCaseTitle } from '../utils/utils';
import userTemplate from './template-models/user-template.json';
import tweetTemplate from './template-models/tweet-template.json';
import listTemplate from './template-models/list-template.json';
import sizeTemplate from './template-models/size-template.json';
import collectionTemplate from './template-models/collection-template.json';
import mentionTemplate from './template-models/mention-template.json';
import geoTemplate from './template-models/geo-template.json';
import geoReverseTemplate from './template-models/geo-reverse-template.json';

function writeTypesInterfaces(dictionary: IReferenceDirectory[]) {
  const generatedPath = resolve(__dirname, '../../generated');
  const typesPath = `${generatedPath}/interfaces/types`;

  dictionary.forEach((g) => {
    g.subgroups.forEach((s) => {
      s.endpoints.forEach((e) => {
        if (!e.exampleResponse) {
          return;
        }

        const titleWithoutVerb = e.title.replace('GET', '').replace('POST', '');
        const fileName = createCamelCaseTitle(titleWithoutVerb);
        let interfacesContent = '';

        try {
          const exampleResponse = e.exampleResponse
            .replace(/\n/g, '')
            .replace(/\{user-object\}/g, JSON.stringify(userTemplate))
            .replace(/\{tweet-object\}/g, JSON.stringify(tweetTemplate))
            .replace(/\{list-object\}/g, JSON.stringify(listTemplate))
            .replace(/\{size-object\}/g, JSON.stringify(sizeTemplate))
            .replace(/\{collection-object\}/g, JSON.stringify(collectionTemplate))
            .replace(/\{mention-object\}/g, JSON.stringify(mentionTemplate))
            .replace(/\{geo-object\}/g, JSON.stringify(geoTemplate))
            .replace(/\{geo-reverse-object\}/g, JSON.stringify(geoReverseTemplate));

          const parsed = JSON.parse(exampleResponse);
          JsonToTS(parsed).forEach((interfaceContent: string) => {
            const [, name] = interfaceContent.split(' ');

            if (name === 'RootObject') {
              interfacesContent += `export default ${interfaceContent.replace(
                'RootObject',
                fileName,
              )}\n\n`;
            } else {
              interfacesContent += `export ${interfaceContent}\n\n`;
            }
          });
        } catch (error) {
          console.log(e.title, 'failed');
          console.log(error);
        }

        if (!interfacesContent) {
          return;
        }

        fs.writeFileSync(`${typesPath}/${fileName}Types.ts`, interfacesContent);
      });
    });
  });
}

export default writeTypesInterfaces;
