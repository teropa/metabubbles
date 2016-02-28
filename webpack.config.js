module.exports = {
  entry: ['./app/polyfills.js', './app/main.js'],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  }
};
