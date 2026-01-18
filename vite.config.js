import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
// https://vite.dev/config/
export default defineConfig({
    base: '/todo/',
    plugins: [
        react(),
        VitePWA({
            manifest: {
                name: 'Todo App (PWA)',
                short_name: 'Todo',
                description: 'Todo プログレッシブ・ウェブアプリ',
                start_url: '.',
                display: "standalone",
                orientation: "portrait",
                theme_color: "#3f51b2",
                background_color: "#efeff4",
                icons: [
                    {
                        src: 'icon-192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'icon-512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: 'icon-512-mask.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'maskable',
                    },
                ],
            },
        }),
    ],
});
