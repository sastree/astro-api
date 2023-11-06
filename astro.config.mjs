import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
    routes: {
        '/': 'index.astro', // Esto establece index.astro como la página de inicio que usa Netlify
      },
});

