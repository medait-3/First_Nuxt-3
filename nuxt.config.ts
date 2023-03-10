// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
      ],
      app: {
        head: {
          title: 'mystore3',
          meta: [
            {name: 'description', content: 'Everything about Nuxt 3'}
          ],
          link: [
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
          ],
          script: [
            {
              src:"https://cdn.tailwindcss.com",
              async: true,
            },
            {
              src: 'https://code.jquery.com/jquery-3.5.1.min.js',
            },
          ],
        }
      }
})
