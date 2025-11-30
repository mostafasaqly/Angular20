import { Component, inject } from '@angular/core';
import { CounterService } from './counter.service';
import { LoggingService } from './logging.service';

@Component({
  selector: 'global-counter',
  imports: [],
  providers: [
    {
      provide: CounterService,
      useClass: CounterService,
    },
  ],
  template: `
    <div class="card">
      <h3>Global Counter (App-level provider)</h3>
      <p>Value: {{ counter.count() }}</p>
      <button (click)="increment()">Increment</button>
    </div>
  `,
  styles: [
    `
      .card {
        border-radius: 8px;
        border: 1px solid #555;
        padding: 1rem;
        min-width: 260px;
      }
      button {
        padding: 0.3rem 0.7rem;
        border-radius: 6px;
        border: none;
        cursor: pointer;
        background: #22c55e;
        color: #fff;
      }
    `,
  ],
})
export class GlobalCounterComponent {
  counter = inject(CounterService);
  private logger = inject(LoggingService);

  constructor() {
    this.logger.log('GlobalCounterComponent created');
  }

  increment() {
    this.counter.increment();
  }
}
