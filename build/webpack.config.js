const path = require('path');

module.exports = {
  entry: {
    shards: './src/js/index.js',
    demo: './src/extras/js/shards-demo.js'
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, '../dist/js'),
    filename: '[name].js'
  },
  externals: {
    'jquery': 'jQuery'
  }
}
