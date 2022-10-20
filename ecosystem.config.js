module.exports = {
  apps: [
    {
      name: 'website-nuxt',
      exec_mode: 'cluster',
      instances: '2',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      env: {
        NODE_ENV: "development",
        HOST: "localhost"
      },
      env_production: {
        NODE_ENV: "production",
        PORT: "3000",
        HOST: "0.0.0.0"
      }
    },
  ],
}

