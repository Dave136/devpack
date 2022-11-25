import typography from 'windicss/plugin/typography';
import icons from '@windicss/plugin-icons';
import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  darkMode: 'class',
  plugins: [
    icons,
    typography({
      dark: true,
    }),
  ],
});
