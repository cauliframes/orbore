import multiple from 'vite-plugin-multiple'

export default {
  plugins: [
    multiple([
      {
        name: 'api',
        config: 'vite.api.config.mjs',
      },
      {
        name: 'web',
        config: 'vite.web.config.mjs',
      },
    ]),
  ],
}