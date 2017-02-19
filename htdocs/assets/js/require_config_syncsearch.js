(function() {
  var baseUrl, is_production, paths;

  baseUrl = 'https://www.saishunkan.co.jp/assets/js/app/';

  is_production = true;

  paths = {
    jquery: '../vendor/jquery.dummy',
    underscore: '../vendor/underscore-min',
    backbone: '../vendor/backbone-min',
    shifty: '../vendor/shifty.min'
  };

  if (is_production) {
    paths['app'] = '../app.min';
  }

  requirejs.config({
    appDir: 'app/',
    baseUrl: baseUrl,
    waitSeconds: 0,
    paths: paths,
    shim: {
      'backbone': {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      },
      'underscore': {
        exports: '_'
      },
      'jquery': {
        exports: '$'
      }
    }
  });

}).call(this);
