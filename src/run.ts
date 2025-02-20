

import { findDuplicates } from './scanner/find-duplicates.ts';

// Use this file to test your functions.
// Exemplo de uso / Example of use:
// ./src/sum.ts
// export const sum = (num1: number, num2: number): number => num1 + num2;

// Import functions / Importe funções
// import { sum } from './src/sum';

(async () => {
  try {
    const teste = await findDuplicates();

    console.log('🚀 ==  run.ts ==  teste:', teste);

  } catch (error) {
    // O TypeScript sabe que `error` pode não ser uma instância de `Error`.
    if (error instanceof Error) {
      console.error('An error occurred during execution:', error.message);
    } else {
      console.error('An unexpected error occurred:', error);
    }
  }
})();
