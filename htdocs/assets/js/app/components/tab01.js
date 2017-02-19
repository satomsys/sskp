(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'jquery', 'backbone', 'underscore', 'controllers/device'], function(require) {
    var $, Backbone, Device, Tab01, TabData, _, _ref;
    $ = require('jquery');
    Backbone = require('backbone');
    _ = require('underscore');
    Device = require('controllers/device');
    TabData = (function() {
      function TabData($el) {
        this.$el = $el;
        this.menuinfo = this.initTabs();
      }

      TabData.prototype.initTabs = function() {
        var data;
        data = [];
        this.$el.find('.tab-content-block').each(function(idx, e) {
          var $e, className, name, stay;
          className = 'tab-content' + idx;
          $e = $(e);
          $e.addClass(className);
          name = $e.find('.tab-name-block').text();
          stay = !!($e.hasClass('tab-stay'));
          return data[idx] = {
            wrapperClassName: className,
            name: name,
            stay: stay
          };
        });
        return data;
      };

      TabData.prototype.$stayTab = function() {
        return this.$el.find('.tab-content-block.tab-stay');
      };

      return TabData;

    })();
    Tab01 = (function(_super) {
      __extends(Tab01, _super);

      function Tab01() {
        _ref = Tab01.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Tab01.prototype.initialize = function(o) {
        this.$el = o.$el;
        this.tabData = new TabData(o.$el);
        return this.render();
      };

      Tab01.prototype.events = {
        'click .tab-item': 'onMenuItemClick'
      };

      Tab01.prototype.render = function() {
        var htmlSrc;
        htmlSrc = this.buildTabHeader();
        this.$el.find('.tab-content-block').parent().prepend(htmlSrc);
        return this.hideTabNameBlock();
      };

      Tab01.prototype.buildTabHeaderListAnchor = function(item) {
        var cssClasses;
        cssClasses = 'tab-item';
        if (item.stay) {
          cssClasses += ' tab-stay';
        }
        return "<li><a href='#' class='" + cssClasses + "' data-tab-target='" + item.wrapperClassName + "'>" + item.name + "</a></li>";
      };

      Tab01.prototype.buildTabHeader = function() {
        var htmls, lists,
          _this = this;
        lists = _.map(this.tabData.menuinfo, function(item) {
          return _this.buildTabHeaderListAnchor(item);
        });
        htmls = [];
        htmls.push('<div class="tab-header-block">');
        htmls.push('<ul>');
        htmls.push(lists);
        htmls.push('</ul>');
        htmls.push('</div>');
        return (_.flatten(htmls)).join('');
      };

      Tab01.prototype.hideTabNameBlock = function() {
        return $('.tab-name-block').hide();
      };

      Tab01.prototype.changeHeader = function(stayTarget) {
        return this.$el.find('.tab-header-block .tab-item').each(function(idx, e) {
          var $e;
          $e = $(e);
          if ($e.attr('data-tab-target') === stayTarget) {
            $e.addClass('tab-stay');
            return;
          }
          return $e.removeClass('tab-stay');
        });
      };

      Tab01.prototype.changeContent = function(stayTarget) {
        return this.$el.find('.tab-content-block').each(function(idx, e) {
          var $e;
          $e = $(e);
          if ($e.hasClass(stayTarget)) {
            $e.addClass('tab-stay');
            return;
          }
          return $e.removeClass('tab-stay');
        });
      };

      Tab01.prototype.changeTab = function(stayTarget) {
        this.changeHeader(stayTarget);
        return this.changeContent(stayTarget);
      };

      Tab01.prototype.onMenuItemClick = function(e) {
        var $menuItem, stayTarget;
        e.preventDefault();
        $menuItem = $(e.target);
        stayTarget = $menuItem.attr('data-tab-target');
        return this.changeTab(stayTarget);
      };

      return Tab01;

    })(Backbone.View);
    return $(function() {
      return $('.tab-wrapper-block01, .panel-tab-wrapper-block01').not('.tab-wrapper-block01-static').each(function(idx, e) {
        var o;
        o = {
          $el: $(e)
        };
        return new Tab01(o);
      });
    });
  });

}).call(this);
