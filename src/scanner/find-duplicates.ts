import { getFilehash } from './get-files-hash';
import { log, logError } from '../utils';
import { progressBar } from '../utils';
import { getConfig } from '../config/get-config';
import { IConfig } from '../interfaces/index';
import { getFiles } from './get-files';
import { getFilePaterns } from './get-file-patterns';
import { getIgnorePatterns } from './get-ignore-patterns';


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

  for (let i =0; i < files.length; i += 1) {

    try {
      const hash = await getFilehash(files[ i ]);
      if (hashes.has(hash)) {
        duplicates.push({ original: hashes.get(hash), duplicate: files[ i ] });
      } else {
        hashes.set(hash, files[ i ]);
      }
    } catch (err: unknown) {
      logError(`Erro ao processar ${files[ i ]}:
        ${err instanceof Error ? err.message : 'Unknow error'}`);
    }
    progressBar(i +1, files.length);
  }

  return duplicates;
};


