import FastGlob from 'fast-glob';
import { getFilehash } from './get-files-hash.ts';
import { log, logError } from './utils/index.ts';


export const findDuplicates = async (directory:string) => {
  log('Scanning', directory);

  const files = FastGlob.sync([ './**/*' ], { cwd: directory, absolute: true, dot: true });


  console.log('🚀 ==  find-duplicates.ts ==  findDuplicates ==  files:', files);

  const hashes = new Map();
  const duplicates = [];

  for (const file of files) {

    console.log('🚀 ==  find-duplicates.ts ==  findDuplicates ==  file:', file);

    try {
      const hash = await getFilehash(file);
      if (hashes.has(hash)) {
        duplicates.push({ original: hashes.get(hash), duplicate: file });
      } else {
        hashes.set(hash, file);
      }
    } catch (err: unknown) {
      logError(`Erro ao processar ${file}:
        ${err instanceof Error ? err.message : 'Unknow error'}`);
    }
  }

  return duplicates;
};
