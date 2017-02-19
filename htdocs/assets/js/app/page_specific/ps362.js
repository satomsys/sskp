(function() {
  define(['jquery', 'controllers/device'], function($, Device) {
    return $(function() {
      var dfd, iframe, page_url, term_block,
        _this = this;
      if (Device.isMobile()) {
        term_block = iframe = $('.form-term-agreement-block01 .term-block');
        iframe = term_block.find('.term-area').remove();
        page_url = iframe.attr('src');
        dfd = $.ajax({
          url: page_url,
          cache: true,
          dataType: 'html'
        });
        return dfd.done(function(data) {
          var m, term_area;
          m = data.replace(/[\n\r\t]/g, '').match(/<body>([\S\s]+?)<\/body>/mi);
          term_area = $('<div class="term-area"></div>').appendTo(term_block);
          term_area.html(m[1].replace(/document\.write\(.*?\)/gmi, '').replace(/<script.*?>.*?<\/script>/gmi, ''));
          return term_area.css({
            height: '250px',
            overflow: 'auto'
          });
        });
      }
    });
  });

}).call(this);
