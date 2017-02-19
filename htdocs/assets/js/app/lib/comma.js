/*
comma separeted
*/


(function() {
  define(['require'], function(require) {
    var Comma;
    Comma = (function() {
      function Comma() {}

      /*
      コンマを追加する
      */


      Comma.add = function(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };

      /*
      コンマを削除する
      */


      Comma.remove = function(x) {
        return Number(x.toString().replace(/\,/g, ''));
      };

      return Comma;

    })();
    return Comma;
  });

}).call(this);
