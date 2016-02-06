var path = require("path");
var Builder = require('systemjs-builder');

var builder = new Builder('.', 'system.config.js');

builder.config({
  packages: {
    angular2: {
      defaultExtension: 'js'
    },
    rxjs: {
      defaultExtension: 'js'
    }
  },
  map: {
    'angular2': 'node_modules/angular2',
    'rxjs': 'node_modules/rxjs'
  }
});

builder
  .buildStatic('app/main.js', 'bundle.js')
  .then(function() {
    console.log('Build complete');
  })
  .catch(function(err) {
    console.log('Build error');
    console.log(err);
  });
