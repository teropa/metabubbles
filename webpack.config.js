module.exports = {
  entry: ['./app/polyfills.js', './app/main.js'],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-decorators-legacy']
      }
    }]
  },
  output: {
    path: __dirname,
    filename: 'bundle.js'
  }
};
