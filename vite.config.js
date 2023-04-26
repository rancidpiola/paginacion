// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: 'https://rancidpiola.github.io/paginacion/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                templates: resolve(__dirname, 'templates/pagina1.html'),
                templates2: resolve(__dirname, 'templates/pagina2.html'),

            },
        },
    },
})
