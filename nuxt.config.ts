// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import tailwindTypography from '@tailwindcss/typography';
export default defineNuxtConfig({
  $development: {
    devtools: { enabled: false },
  },
 
  css:[`~/assets/css/main.css`],
  modules: [
    '@pinia/nuxt',
   'pinia-plugin-persistedstate/nuxt',
    '@samk-dev/nuxt-vcalendar',
  ],
  tailwindcss: {
    config: {
    plugins: [tailwindTypography], // Подключение плагина
    }
    },
    pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  vite: {
  plugins:[
  tailwindcss()
  ]

  },

  compatibilityDate: '2024-04-03',
  target: 'static',
  generate: {
     fallback: true
  },
  app:{
  baseURL: '/aboutus/'
  },

  router: {
    base: '/aboutus/'
  },
routeRules: {
  '/aboutus': {swr:3600},
  '/services': {swr: 3600},
  '/reviews': {swr: 3600},
   '/login': {ssr:false},
   '/register': {ssr: false},
   '/types': {ssr: false}
},
  
  
  
  

  app: {
    head:{
      title: "Grooming DP",
      charset: "utf-8",
      viewport: 'width=device-width, initial-scale=1'
    }
  },

  postcss: {
    plugins: {
     
      autoprefixer: {}
    }
  },

  
})