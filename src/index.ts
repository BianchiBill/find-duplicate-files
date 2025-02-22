#!/usr/bin/env node
import fs from 'fs';
import { program } from 'commander';
import { findDuplicates } from './scanner/find-duplicates';
import { log, logError, logWarning } from './utils/log';


program
  .version('1.0.0')
  .argument('<directory>', 'Diretório para escanear')
  .option('-d, --delete', 'Remover duplicatas automaticamente')
  .action(async (options) => {
    const duplicates = await findDuplicates();

    if (duplicates.length === 0) {
      log('✅ Nenhum arquivo duplicado encontrado!');
      return;
    }

    logWarning('\n⚠️  Arquivos Duplicados Encontrados:');
    duplicates.forEach(({ original, duplicate }) => {
      logError(`❌ ${duplicate} (Duplicado de ${original})`);
    });

    if (options.delete) {
      duplicates.forEach(({ duplicate }) => {
        fs.unlinkSync(duplicate);
        log(`🗑️ Removido: ${duplicate}`);
      });
    }
  });

program.parse();
