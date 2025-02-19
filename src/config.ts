/* eslint no-process-env: 0 */
import path, { dirname } from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

// Declaração de tipos para garantir que process.env tenha as propriedades necessárias
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
    }
  }
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, './.env') });

const environment: Array<keyof NodeJS.ProcessEnv> = [
  'NODE_ENV',
];

environment.forEach((name) => {
  /* istanbul ignore if */
  if (!process.env[name]) {
    throw new Error(`${name} is not defined in process.env`);
  }
});

const config = {
  NODE_ENV: process.env.NODE_ENV,
};

export default config;
