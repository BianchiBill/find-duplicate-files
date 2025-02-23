import fs from 'fs';
import path from 'path';

export const getConfig = () => {
  try {
    const configPath = path.resolve(process.cwd(), './sdfconfig.json');
    const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

    const sdfconfig = {
      directory: config?.directory ? config?.directory : './',
      ignoreNodeModules: config?.ignoreNodeModules ? config?.ignoreNodeModules : true,
      includeTypescript: config?.includeTypescript ? config?.includeTypescript : true,
      includeJavascript: config?.includeJavascript ? config?.includeJavascript : true,
      ignoreFolders: config?.ignoreFolders ? config?.ignoreFolders : [ '**/dist/**', '**/.git/**' ],
    };

    return sdfconfig;

  } catch (error) {
    if (error instanceof Error) {
      const sdfconfig = {
        directory: './',
        ignoreNodeModules: true,
        includeTypescript: true,
        includeJavascript: true,
        ignoreFolders: [ '**/dist/**', '**/.git/**' ],
      };
      return sdfconfig;
    }
  }
};
