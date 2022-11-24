import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js / vite.config.ts
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        clientsClaim: true,
        skipWaiting: true
      },
      manifest:{
        "name": "ynov-webmobile-simon",
        "short_name": "Simon",
        "start_url": ".",
        "display": "standalone",
        "background_color": "#fff",
        "description": "Simon game",
        "icons": [{
          "src": "images/touch/homescreen48.png",
          "sizes": "48x48",
          "type": "image/png"
        }, {
          "src": "images/touch/homescreen72.png",
          "sizes": "72x72",
          "type": "image/png"
        }, {
          "src": "images/touch/homescreen96.png",
          "sizes": "96x96",
          "type": "image/png"
        }, {
          "src": "images/touch/homescreen144.png",
          "sizes": "144x144",
          "type": "image/png"
        }, {
          "src": "images/touch/homescreen168.png",
          "sizes": "168x168",
          "type": "image/png"
        }, {
          "src": "images/touch/homescreen192.png",
          "sizes": "192x192",
          "type": "image/png"
        }],
        "related_applications": [{
          "platform": "play",
          "url": "https://play.google.com/store/apps/details?id=cheeaun.hackerweb"
        }]
      }
    })
  ]
})
