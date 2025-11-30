import { Component, inject } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'local-counter',
  imports: [],
  template: `
    <div class="local">
      <p>Local value: {{ counter.count() }}</p>
      <button (click)="counter.increment()">+1</button>
    </div>
  `,
  styles: [
    `
      .local {
        margin-top: 0.75rem;
      }
      button {
        padding: 0.25rem 0.6rem;
        border: none;
        border-radius: 4px;
        background: #eab308;
        color: #000;
        cursor: pointer;
      }
    `,
  ],
})
export class LocalCounterComponent {
  counter = inject(CounterService);
}
