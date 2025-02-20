export const getIgnorePatterns = (
  ignoreFolders: string[],
  ignoreNodeModules: boolean,
): string[] => {
  const ignorePatterns: string[] = [];


  if (ignoreNodeModules) {
    ignorePatterns.push('**/node_modules/**');
  }

  if (ignoreFolders && ignoreFolders.length > 0) {
    ignorePatterns.push(...ignoreFolders);
  }

  return ignorePatterns;
};
