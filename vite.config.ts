import {VitePWA} from 'vite-plugin-pwa';
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), VitePWA({
        registerType: 'autoUpdate',
        injectRegister: 'auto',

        pwaAssets: {
            disabled: false,
            config: true,
        },

        manifest: {
            name: 'jobatda',
            short_name: 'jobatda',
            description: 'jobatda',
            theme_color: '#ffffff',
            background_color: '#ffffff',
            display: 'standalone',
            start_url: '/',
            icons: [
                {
                    src: 'icons/pwa-192x192.png',
                    sizes: '192x192',
                    type: 'image/png',
                },
                {
                    src: 'icons/pwa-512x512.png',
                    sizes: '512x512',
                    type: 'image/png',
                },
            ],
        },

        workbox: {
            globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
            cleanupOutdatedCaches: true,
            clientsClaim: true,
        },

        devOptions: {
            enabled: false,
            navigateFallback: 'index.html',
            suppressWarnings: true,
            type: 'module',
        },
    })],
})