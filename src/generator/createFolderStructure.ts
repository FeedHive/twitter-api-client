import fs from 'fs';
import { execSync } from 'child_process';
import { resolve } from 'path';

function createFolderStructure() {
  execSync(`rm -rf ${resolve(__dirname, '../../generated')}`);

  const paths = [
    resolve(__dirname, '../../generated'),
    resolve(__dirname, '../../generated/interfaces'),
    resolve(__dirname, '../../generated/interfaces/params'),
    resolve(__dirname, '../../generated/interfaces/types'),
    resolve(__dirname, '../../generated/clients'),
  ];

  for (const p of paths) {
    if (!fs.existsSync(p)) {
      fs.mkdirSync(p);
    }
  }
}

export function copyBase() {
  execSync(`cp -R ${resolve(__dirname, '../base')} ${resolve(__dirname, '../../generated/base')}`);
}

export default createFolderStructure;
