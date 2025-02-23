export const progressBar = (current: number, total: number) => {
  const width = 40;
  const progress = Math.floor((current / total) * width);
  const bar = '█'.repeat(progress) + '-'.repeat(width - progress);
  const percentage = ((current / total) * 100).toFixed(2);

  process.stdout.cursorTo(0);
  process.stdout.write(`🔍 Buscando duplicatas [${bar}] ${percentage}% (${current}/${total})`);
};
