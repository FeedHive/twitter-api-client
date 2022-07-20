import mockFs from 'mock-fs';
import fs from 'fs';
import createFolderStructure from '../generator/createFolderStructure';

afterEach(() => {
  return mockFs.restore();
});

describe('Folder structure generator', () => {
  it('Deletes the content of folder', () => {
    mockFs({
      '/generated/old-stuff': {},
    });
    createFolderStructure('/');
    const result = fs.existsSync('/generated/old-stuff');
    expect(result).toBeFalsy();
  });
});
