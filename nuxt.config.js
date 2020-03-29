const { resolve } = require('path')
const pkg = require('./package')
require('dotenv').config();


module.exports = {
  // ======================================================================
  // Basics
  // ======================================================================
  mode: 'universal',
  srcDir: 'src/',

  // ======================================================================
  // Set head section of the page.
  // ======================================================================
  head: {
    title: pkg.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description,
      },
      { name: 'apple-mobile-web-app-title', content: pkg.description },
      { name: 'application-name', content: pkg.description },
      { name: 'msapplication-TileColor', content: '#03A9F4' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [],
  },
  

  // ======================================================================
  // Customize the progress bar color.
  // ======================================================================
  loading: { color: '#E91E63' },

  // ======================================================================
  // Global CSS
  // ======================================================================
  css: [],

  // ======================================================================
  // Setup modules
  // ======================================================================
  modules: [
    ['@nuxtjs/axios', {
      baseURL: process.env.API_BASE_URL,
      browserBaseURL: process.env.API_BASE_URL,
    }],

    ['@nuxtjs/vuetify', {
      theme: {
        primary: '#03A9F4',
        secondary: '#009688',
        accent: '#E91E63',
        error: '#f44336',
        warning: '#FDD835',
        info: '#2196f3',
        success: '#4caf50',
      },
    }],
  ],

  // ======================================================================
  // Setup plugins
  // ======================================================================
  plugins: [
    { src: '~/plugins/firebase', ssr: true }
  ],

  // ======================================================================
  // Map system env props to internal env. (https://nuxtjs.org/api/configuration-env)
  // You need to create a .env file in the same folder as this nuxt.config.js
  // to set your local env variables.
  // ======================================================================
  env: {
    baseUrl: process.env.BASE_URL || '',
    apiBaseUrl: process.env.API_BASE_URL || '',
    firebaseConfig: {
      apiKey: process.env.FIREBASE_CONFIG_API_KEY || '',
      authDomain: process.env.FIREBASE_CONFIG_AUTH_DOMAIN || '',
      databaseURL: process.env.FIREBASE_CONFIG_DATABASE_URL || '',
      projectId: process.env.FIREBASE_CONFIG_PROJECT_ID || '',
      storageBucket: process.env.FIREBASE_CONFIG_STORAGE_BUCKET || '',
      messagingSenderId: process.env.FIREBASE_CONFIG_MESSAGING_SENDER_ID || '',
    },
  },

  // ======================================================================
  // Build configuration
  // ======================================================================
  buildDir: process.env.BUILD_DIR || './functions/.nuxt',
  build: {
    analyze: process.env.ENABLE_ANALYZE_MODE === 'true', // env variables are strings
    publicPath: '/assets/',
    extractCSS: true,
    transpile: [],

    // Extend webpack config
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
};
