import { Component } from '@angular/core';
import { CounterService } from './counter.service';
import { LocalCounterComponent } from './local-counter.component';

@Component({
  selector: 'local-counter-wrapper',
  imports: [ LocalCounterComponent],
  providers: [CounterService],
  template: `
    <div class="card">
      <h3>Local Counter (Wrapper-level provider)</h3>
      <p>
        This wrapper provides its own <code>CounterService</code> instance.<br />
        Clicking inside this area does <strong>not</strong> affect the global
        counter.
      </p>

      <local-counter></local-counter>
      <local-counter></local-counter>
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
      code {
        background: #222;
        padding: 0.05rem 0.25rem;
        border-radius: 4px;
      }
    `,
  ],
})
export class LocalCounterWrapperComponent {}
