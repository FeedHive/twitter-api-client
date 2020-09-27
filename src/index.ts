import fs from 'fs';
import yaml from 'js-yaml';
import { resolve } from 'path';
import writeParamsInterfaces from './generator/writeParamsInterfaces';
import createFolderStructure, { copyBase } from './generator/createFolderStructure';
import writeTypesInterfaces from './generator/writeTypesInterfaces';
import writeClients from './generator/writeClients';
import writeReferences from './generator/writeReferences';

/**
 * Generate a new Twitter API Client
 */
(async function () {
  // Prepare folder structure for generated clients
  createFolderStructure();
  copyBase();

  // Parse the twitter-api-spec.yml file
  parseDictionary();

  // Generate clients based on the twitter-api-spec.yml file
  createParamsInterfaces();
  createTypesInterfaces();
  createClients();
  createReadme();
})();

let dictionary: any;

function parseDictionary() {
  dictionary = yaml.safeLoad(
    fs.readFileSync(resolve(__dirname, './spec/twitter-api-spec.yml'), 'utf8'),
  );
}

function createParamsInterfaces() {
  writeParamsInterfaces(dictionary);
}

function createTypesInterfaces() {
  return writeTypesInterfaces(dictionary);
}

function createClients() {
  writeClients(dictionary);
}

function createReadme() {
  writeReferences(dictionary);
}
