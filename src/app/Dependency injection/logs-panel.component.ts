import { Component, inject } from '@angular/core';
import { LoggingService } from './logging.service';
import { APP_CONFIG } from './app-config.token';

@Component({
  selector: 'logs-panel',
  standalone: true,
  imports: [],
  template: `
    <div class="card logs">
      <h3>Logs Panel</h3>
      <p>
        <strong>API URL from InjectionToken:</strong>
        <code>{{ config.apiUrl }}</code>
      </p>

      <ul>
        @for(log of logs(); track $index){
        <li >{{ log }}</li>
        }
      </ul>
    </div>
  `,
  styles: [
    `
      .logs {
        max-height: 260px;
        overflow: auto;
      }
      ul {
        margin: 0;
        padding-left: 1.2rem;
      }
      code {
        background: #222;
        padding: 0.05rem 0.35rem;
        border-radius: 4px;
      }
    `,
  ],
})
export class LogsPanelComponent {
  private logger = inject(LoggingService);
  config = inject(APP_CONFIG);

  logs = this.logger.logs;
}
