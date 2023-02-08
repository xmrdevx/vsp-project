import { isPlatformBrowser } from '@angular/common';

export class SessionStorage implements Storage {
  [name: string]: any;
  length: number = 0;
  clear(): void {}
  getItem(key: string): string | null { return null; }
  key(index: number): string | null { return  null; }
  removeItem(key: string): void {}
  setItem(key: string, value: string): void {}
}

export class SsrWindow extends Window {
  override sessionStorage: SessionStorage = new SessionStorage();
}

export const ssrWindowFactory: Function = (platformId: Object) => {
  if (isPlatformBrowser(platformId)) {
    return window
  }
  return new SsrWindow();
};
