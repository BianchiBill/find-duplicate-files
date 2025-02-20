import FastGlob from 'fast-glob';

export const getFiles = async (
  directory: string,
  filePatterns:string[],
  ignorePatterns:string[]
) => FastGlob.sync(filePatterns, {
  cwd: directory, absolute: true,
  dot: true, onlyFiles: true, ignore: ignorePatterns
});
