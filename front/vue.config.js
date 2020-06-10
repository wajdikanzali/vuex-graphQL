const path = require('path');

const vueSrc = './src';

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, vueSrc),
      },
      extensions: ['*', '.js', '.vue', '.json'], // in webpack 2.2 default resolve .js .json
    },
  },
  pages: {
    index: {
      entry: './src/main.js',
      template: 'src/client/public/index.html',
      filename: 'index.html',
    },
  },

  chainWebpack: (config) => {
    config.module
      .rule('svg')
      .use('file-loader')
      .loader('svg-sprite-loader');
  },

};
