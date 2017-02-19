(function() {
  var baseUrl, is_production, paths, queries, queryStrings, scr, scripts, _i, _len;

  baseUrl = '/assets/js/app/';

  is_production = true;

  paths = {
    jquery: '../vendor/jquery.dummy',
    underscore: '../vendor/underscore-min',
    backbone: '../vendor/backbone-min',
    shifty: '../vendor/shifty.min'
  };

  if (is_production) {
    scripts = document.getElementsByTagName('script');
    queryStrings = '';
    for (_i = 0, _len = scripts.length; _i < _len; _i++) {
      scr = scripts[_i];
      if (scr.src.indexOf('/assets/js/require_config_resrv_order.js') !== -1) {
        queries = scr.src.split('?');
        if (queries.length < 2) {
          continue;
        }
        queryStrings = queries[1];
      }
    }
    paths['app'] = "../app.min.resrv_order.js?" + queryStrings;
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
