// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    [
      '@nuxtjs/i18n',
      {
        strategy: 'prefix',
        useCookie: true,
        detectBrowserLanguage: {
          useCookie: false,
          redirectOn: 'no_prefix',
          alwaysRedirect: true,
        },
        locales: [
          { code: 'en', label: 'English', iso: 'en-US' },
          { code: 'de', label: 'German', iso: 'de-DE' },
          { code: 'it', label: 'Italian', iso: 'it-IT' },
          { code: 'es', label: 'Spanish', iso: 'es-ES' },
          { code: 'fr', label: 'French', iso: 'fr-FR' },
        ],
      },
    ],
  ],
});
