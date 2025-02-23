import { writeFileSync, appendFileSync } from 'fs';
import { log } from './log';

export const writeCsv = async (
  duplicates: { duplicate: string; original: string }[]
): Promise<void> => {
  if (duplicates.length > 0) {
    writeFileSync('./duplicate-files', 'duplicate;original');
    duplicates.forEach(
      ({
        duplicate, original
      }: {
        duplicate: string, original: string
      }) => appendFileSync('./duplicate-files', `${duplicate};${original}`));
      log('📄 CSV Criado com sucesso');
  }
};
