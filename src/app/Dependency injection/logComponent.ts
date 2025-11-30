import { Component, inject } from '@angular/core';
import { LoggingService } from './logging.service';
import { GlobalCounterComponent } from './global-counter.component';
import { LocalCounterWrapperComponent } from './local-counter-wrapper.component';
import { LogsPanelComponent } from './logs-panel.component';

@Component({
  selector: 'app-log',
  imports: [
    GlobalCounterComponent,
    LocalCounterWrapperComponent,
    LogsPanelComponent,
  ],
  template: `
    <main class="page">
      <h1>Angular Dependency Injection – Demo</h1>

      <section class="section">
        <h2>1. Creating and using services (root scope)</h2>
        <p>
          The <code>LoggingService</code> is provided in <code>root</code>
          and injected here using the <code>inject()</code> function.
        </p>

        <button (click)="addLog()">Add log from AppComponent</button>
      </section>

      <section class="section">
        <h2>2. Global vs Local Counter (Hierarchical injectors)</h2>

        <div class="columns">
          <global-counter></global-counter>

          <local-counter-wrapper></local-counter-wrapper>
        </div>
      </section>

      <section class="section">
        <h2>3. All Logs (DI in action)</h2>
        <logs-panel></logs-panel>
      </section>
    </main>
  `,
  styles: [
    `
      .page {
        padding: 1.5rem;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
          sans-serif;
      }
      .section {
        margin-bottom: 2rem;
        border: 1px solid #444;
        border-radius: 8px;
        padding: 1rem 1.25rem;
      }
      .columns {
        display: flex;
        gap: 1.5rem;
        flex-wrap: wrap;
      }
      button {
        padding: 0.4rem 0.9rem;
        border-radius: 6px;
        border: none;
        cursor: pointer;
        background: #8b5cf6;
        color: #fff;
      }
      code {
        background: #222;
        padding: 0.1rem 0.35rem;
        border-radius: 4px;
      }
    `,
  ],
})
export class AppLogComponent {
  private logger = inject(LoggingService);

  addLog() {
    this.logger.log('Button clicked from AppLogComponent');
  }
}
