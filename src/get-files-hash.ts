import crypto from 'crypto';
import fs from 'fs';

export const getFilehash = async (filePath: string) => new Promise((resolve, reject) => {
  const hash = crypto.createHash('md5');
  const stream = fs.createReadStream(filePath);

  stream.on('data', (data) => hash.update(data));
  stream.on('end', () => resolve(hash.digest('hex')));
  stream.on('error', reject);
});
