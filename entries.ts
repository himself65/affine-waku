import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineRouter } from 'waku/router/server';
const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineRouter(
  async id => {
    switch (id) {
      case 'index': {
        const { default: AppCreator } = await import('./src/app.js');
        return AppCreator({
          name: 'this is index'
        });
      }
      case 'about': {
        const { default: AppCreator } = await import('./src/app.js');
        return AppCreator({
          name: 'this is about'
        });
      }
      default:
        return null;
    }
  },
  async () => {
    return ['index', 'about'];
  }
);
