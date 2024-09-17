import { createWorker } from 'tesseract.js';

(async () => {
  const worker = await createWorker('chi_sim');
  const ret = await worker.recognize('./1.png');
  console.log(ret.data.text);
  await worker.terminate();
})();
