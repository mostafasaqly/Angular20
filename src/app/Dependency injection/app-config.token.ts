import { InjectionToken, inject, runInInjectionContext, EnvironmentInjector } from '@angular/core';

export interface AppConfig {
  apiUrl: string;
  featureFlag: boolean;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG');

export function callApiDemo() {
  const injector = inject(EnvironmentInjector);

  runInInjectionContext(injector, () => {
    const cfg = inject(APP_CONFIG);
    console.log('Calling API with base URL:', cfg.apiUrl);
  });
}
