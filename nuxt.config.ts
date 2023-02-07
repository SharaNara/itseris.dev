// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '@/assets/css/main.scss',
    ],
    app: {
        head: {
            title: 'itseris.dev',
            meta: [
                { name: 'description', content: 'A fun little Nuxt project and personal site'}
            ],
        }
    }
})
