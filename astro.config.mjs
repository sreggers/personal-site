import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://sreggers.github.io',
  base: 'personal-site',
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de", "nl"],
  }
});
