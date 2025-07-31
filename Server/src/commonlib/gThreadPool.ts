// thread-pool.ts

import { Worker, isMainThread } from 'worker_threads';
import * as os from 'os';

interface CustomWorker extends Worker {
  isBusy: boolean;
}

class GThreadPool {
  private _workers: CustomWorker[];

  constructor(workerScript: string) {
    this._workers = [];

    if (isMainThread) {
      const numWorkers = os.cpus().length;
      for (let i = 0; i < numWorkers; i++) {
        const worker = new Worker(workerScript) as CustomWorker;
        worker.isBusy = false;
        this._workers.push(worker);
      }
    }
  }

  runTask(task: any) {
    if (isMainThread) {
      const worker = this.getAvailableWorker();
      worker.isBusy = true;
      worker.postMessage(task);
    }
  }

  private getAvailableWorker(): CustomWorker {
    // Find an available worker thread
    const availableWorker = this._workers.find((worker) => !worker.isBusy);

    if (availableWorker) {
      return availableWorker;
    }

    // If no available worker found, return a random worker
    const randomIndex = Math.floor(Math.random() * this._workers.length);
    return this._workers[randomIndex];
  }
}

export default GThreadPool;