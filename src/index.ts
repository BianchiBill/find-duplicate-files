#!/usr/bin/env node
import fs from 'fs';
import { program } from 'commander';
import chalk from 'chalk';
import { findDuplicates } from './find-duplicates.ts';


program
  .version('1.0.0')
  .argument('<directory>', 'Diretório para escanear')
  .option('-d, --delete', 'Remover duplicatas automaticamente')
  .action(async (directory, options) => {
    const duplicates = await findDuplicates(directory);

    if (duplicates.length === 0) {
      console.log(chalk.green('✅ Nenhum arquivo duplicado encontrado!'));
      return;
    }

    console.log(chalk.yellow('\n⚠️  Arquivos Duplicados Encontrados:'));
    duplicates.forEach(({ original, duplicate }) => {
      console.log(chalk.red(`❌ ${duplicate} (Duplicado de ${original})`));
    });

    if (options.delete) {
      duplicates.forEach(({ duplicate }) => {
        fs.unlinkSync(duplicate);
        console.log(chalk.green(`🗑️ Removido: ${duplicate}`));
      });
    }
  });

program.parse();
