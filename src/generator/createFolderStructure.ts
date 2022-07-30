import fs from 'fs';
import rimraf from 'rimraf';
import { execSync } from 'child_process';
import { resolve } from 'path';

function createFolderStructure(basePath: string) {
  rimraf.sync(resolve(basePath, './generated'));
  const paths = [
    resolve(basePath, './generated'),
    resolve(basePath, './generated/interfaces'),
    resolve(basePath, './generated/interfaces/params'),
    resolve(basePath, './generated/interfaces/types'),
    resolve(basePath, './generated/clients'),
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
