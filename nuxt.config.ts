import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    build: {
      postcss: {
        postcssOptions: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {},
          },
        },
      },
      transpile: [
        '@apollo/client',
        'ts-invariant/process',
      ],
    },
    
  
    css: [
      "~/assets/css/tailwind.css"
    ],
    
  })