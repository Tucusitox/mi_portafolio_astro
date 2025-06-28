// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static'; 

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel({
    // Configuración mínima requerida
    webAnalytics: {
      enabled: false // Opcional: desactiva analytics si no usas
    },
    // Para proyectos estáticos básicos:
    isr: false // Desactiva ISR (Incremental Static Regeneration)
  })
});