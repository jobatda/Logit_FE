import {VitePWA} from 'vite-plugin-pwa';
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

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
    }), svgr()],
    // 개발 서버 설정, 배포시 지우기
    server: {
        port: 3000,  // 개발 서버 포트 설정
        host: '0.0.0.0', // Docker에서 접근할 수 있도록 변경
    }
})