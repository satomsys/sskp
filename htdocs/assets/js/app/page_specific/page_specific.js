/*
page_specific.coffee
ページ固有のスクリプトはここで呼んじゃうからねからね系
*/


(function() {
  define(['require', 'underscore'], function(require, _) {
    var map, watch_interval, watch_screeen_existence;
    map = {
      '68': ['page_specific/ps68'],
      '362': ['page_specific/ps362'],
      '368': ['page_specific/ps368']
    };
    watch_interval = 16;
    watch_screeen_existence = function() {
      var files, page_id;
      if (!document || !document.body) {
        setTimeout(watch_screeen_existence, watch_interval);
        return;
      }
      page_id = /page-(.+)$/.test(document.body.className) ? RegExp.$1 : '';
      if (page_id !== '') {
        files = map[parseInt(page_id)];
        if (files) {
          require([files.join(',')]);
        }
      }
    };
    return watch_screeen_existence();
  });

}).call(this);
