import typography from 'windicss/plugin/typography';
import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  darkMode: 'class',
  plugins: [
    typography({
      dark: true,
    }),
  ],
});
