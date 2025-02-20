import fs from 'fs';
import path from 'path';
import { logError } from '../utils/log.ts';

export const getConfig = () => {
  try {
    const configPath = path.resolve(process.cwd(), './fdfconfig.json');
    const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

    const fdfconfig = {
      directory: config?.directory ? config?.directory : './',
      ignoreNodeModules: config?.ignoreNodeModules ? config?.ignoreNodeModules : true,
      includeTypescript: config?.includeTypescript ? config?.includeTypescript : true,
      includeJavascript: config?.includeJavascript ? config?.includeJavascript : true,
      ignoreFolders: config?.ignoreFolders ? config?.ignoreFolders : [ '**/dist/**', '**/.git/**' ],
    };

    return fdfconfig;

  } catch (error) {
    if (error instanceof Error) {
      logError('⚠️ Arquivo fdfconfig.json não encontrado na raiz do projeto.');
      process.exit(1);
    }
  }
};
