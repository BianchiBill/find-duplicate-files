export const getFilePaterns = (
  directory: string,
  includeJavascript: boolean,
  includeTypescript: boolean
): string[] => {
  const filePatterns: string[] = [];

  if (includeTypescript) {
    filePatterns.push(`${directory}/**/*`);
  }

  if (includeJavascript) {
    filePatterns.push(`${directory}/**/*.js`);
  }

  return filePatterns;
};
