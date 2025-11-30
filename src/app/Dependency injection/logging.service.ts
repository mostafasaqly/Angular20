import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  logs = signal<string[]>([]);

  log(message: string) {
    const time = new Date().toLocaleTimeString();
    this.logs.update((list) => [`[${time}] ${message}`, ...list]);
    console.log('[LOG]', message);
  }
}
