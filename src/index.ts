import { resolve } from 'path';
import $RefParser from '@apidevtools/json-schema-ref-parser';
import writeParamsInterfaces from './generator/writeParamsInterfaces';
import createFolderStructure, { copyBase } from './generator/createFolderStructure';
import writeTypesInterfaces from './generator/writeTypesInterfaces';
import writeClients from './generator/writeClients';
import writeReferences from './generator/writeReferences';

/**
 * Entry point
 */
start();

/**
 * Generate a new Twitter API Client
 */
async function start() {
  // Prepare folder structure for generated clients
  createFolderStructure(resolve(__dirname, '../'));
  copyBase();

  // Parse the twitter-api-spec.yml file
  await parseDictionary();

  // Generate clients based on the twitter-api-spec.yml file
  createParamsInterfaces();
  createTypesInterfaces();
  createClients();
  createReadme();
}

let dictionary: any;

async function parseDictionary() {
  dictionary = await $RefParser.dereference(resolve(__dirname, './specs/twitter-api-spec.yml'));
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
