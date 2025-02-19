import chalk from 'chalk';

export const log = (message: string, data: unknown = '') =>
  console.log(chalk.green(`${message} ${data}`));

export const logWarning = (message: string, data: unknown = '') =>
  console.log(chalk.yellow(`${message} ${data}`));

export const logError = (message: string, data: unknown = '') =>
  console.log(chalk.red(`${message} ${data}`));
