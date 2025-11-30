import { Injectable, signal } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class CounterService {
  private _count = signal(0);
  count = this._count.asReadonly();

  constructor(private logger: LoggingService) {
    this.logger.log('CounterService instance created');
  }

  increment() {
    this._count.update((c) => c + 1);
    this.logger.log(`Counter incremented to ${this._count()}`);
  }
}
