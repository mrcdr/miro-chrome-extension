import { defineConfig } from 'vite'
import { crx, defineManifest } from '@crxjs/vite-plugin'
import path from 'path'

const manifest = defineManifest({
  manifest_version: 3,
  name: 'Miro-Chrome extension',
  description: 'Miro extension for Chrome',
  version: '0.0.1',
  content_scripts: [
    {
      js: ['injector/content.ts'],
      matches: ['https://miro.com/app/board/*']
    }
  ]
})

export default defineConfig({
  plugins: [crx({ manifest })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
