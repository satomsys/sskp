(function() {
  define(['jquery', 'components/panel_default', 'lib/adjust_height'], function($, PanelDefault, AdjustHeight) {
    var PresentsFilter, main;
    PresentsFilter = (function() {
      function PresentsFilter() {
        this.initialize();
      }

      PresentsFilter.prototype.initialize = function() {
        var hit_index;
        this.$list = $('.present-list01');
        this.items = this.$list.find('.present-item').removeClass('has-left-margin');
        this.items_base = this.items.clone();
        this.items_canvas = this.$list.find('> .content-wrapper01 > .grid16-row');
        this.item_width = this.items.first().width();
        this.generateTabs();
        hit_index = 0;
        if (location.hash) {
          this.$nav.find('li a').each(function(index, node) {
            if (location.hash === $(this).attr('href')) {
              return hit_index = index;
            }
          });
        }
        return this.$nav.find('li a').eq(hit_index).click();
      };

      PresentsFilter.prototype.generateTabs = function() {
        var self, str;
        str = "<div class=\"content-block01 tab-wrapper-block01 tab-wrapper-block01-static filter-controll\">\n<div class=\"content-wrapper01\">\n<div class=\"tab-header-block\">\n<ul>\n  <li><a href=\"#all\" class=\"tab-item tab-stay\">すべてのプレゼント品</a></li>\n  <li><a href=\"#skin-support-item\" class=\"tab-item\">お肌のサポート品</a></li>\n  <li><a href=\"#basic-item\" class=\"tab-item\">暮しの定番品</a></li>\n  <li><a href=\"#portable-item\" class=\"tab-item\">ドモホルンリンクル携帯用</a></li>\n</ul>\n</div>\n</div>\n</div>";
        this.$nav = $(str).prependTo(this.$list);
        self = this;
        return this.$nav.on('click.PresentsFilter', 'a', function(evt) {
          var $hide_targets, $targets, key, klass, p;
          evt.preventDefault();
          key = this.hash.replace('#', '');
          p = $(this).parent();
          p.siblings().find('a').removeClass('tab-stay');
          $(this).addClass('tab-stay');
          if (key === 'all') {
            $targets = self.items_base;
          } else {
            klass = '.present-item-' + key;
            $targets = self.items_base.filter(klass).clone(true);
            $hide_targets = self.items.not(klass);
            self.hideItem($hide_targets);
          }
          location.hash = '#' + key;
          return self.showItem($targets);
        });
      };

      PresentsFilter.prototype.showItem = function($targets) {
        this.items_canvas.empty();
        $targets.appendTo(this.items_canvas).addClass('has-left-margin').filter('.present-item:nth-child(4n+1)').removeClass('has-left-margin');
        new AdjustHeight($targets);
        return PanelDefault.setHoverAction($('.present-item-list-block'));
      };

      PresentsFilter.prototype.hideItem = function($targets) {
        return $targets.hide();
      };

      return PresentsFilter;

    })();
    main = function() {
      return new PresentsFilter();
    };
    if (!$.isReady) {
      $(main);
    } else {
      main();
    }
  });

}).call(this);
