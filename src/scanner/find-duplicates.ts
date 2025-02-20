import { getFilehash } from './get-files-hash.ts';
import { log, logError } from '../utils/index.ts';
import { getConfig } from '../config/get-config.ts';
import { IConfig } from '../interfaces/index.ts';
import { getFiles } from './get-files.ts';
import { getFilePaterns } from './get-file-patterns.ts';
import { getIgnorePatterns } from './get-ignore-patterns.ts';


export const findDuplicates = async () => {

  const config = getConfig();

  const { directory, ignoreNodeModules, includeTypescript,
    includeJavascript, ignoreFolders } = config as IConfig;

  log('Start scanning');

  const files = await getFiles(
    directory,
    getFilePaterns(directory, includeJavascript, includeTypescript),
    getIgnorePatterns(ignoreFolders, ignoreNodeModules)
  );

  const hashes = new Map();
  const duplicates = [];

  for (const file of files) {

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


