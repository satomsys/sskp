(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'jquery', 'backbone', 'shifty'], function(require) {
    var $, Backbone, ButtonElement, CarouselBanner01Controller, CarouselBanner01List, CarouselBanner01SequentialButton, NextButtonElement, Pagination, PaginationDot, PreviousButtonElement, SequentialButtonElement, ShowAllButtonElement, Tweenable, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
    $ = require('jquery');
    Backbone = require('backbone');
    Tweenable = require('shifty');
    /*
    カルーセルバナー表示
    */

    CarouselBanner01Controller = (function(_super) {
      __extends(CarouselBanner01Controller, _super);

      function CarouselBanner01Controller() {
        _ref = CarouselBanner01Controller.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      /*
      初期化
      */


      CarouselBanner01Controller.prototype.initialize = function(o) {
        this.$el = o.$el;
        this.parseData();
        this.$el.append('<div class="carousel-banner-footer" />');
        this.initializeElementObjects();
        return this.page(0);
      };

      /*
      内容のオブジェクトを初期化する
      */


      CarouselBanner01Controller.prototype.initializeElementObjects = function() {
        var listObject, paginationObject, sequentialButtonObject, showAllButtonObject;
        sequentialButtonObject = {
          controller: this
        };
        this.sequentialButton = new CarouselBanner01SequentialButton(sequentialButtonObject);
        listObject = {
          controller: this
        };
        this.list = new CarouselBanner01List(listObject);
        showAllButtonObject = {
          controller: this,
          $parent: this.$el.find('.carousel-banner-footer')
        };
        this.showAllButton = new ShowAllButtonElement(showAllButtonObject);
        paginationObject = {
          controller: this,
          $parent: this.$el.find('.carousel-banner-footer')
        };
        return this.pagenation = new Pagination(paginationObject);
      };

      /*
      次のページに進む
      */


      CarouselBanner01Controller.prototype.next = function() {
        return this.page(this.pagePosition() + 1);
      };

      /*
      前のページに戻る
      */


      CarouselBanner01Controller.prototype.previous = function() {
        return this.page(this.pagePosition() - 1);
      };

      /*
      すべて表示する
      */


      CarouselBanner01Controller.prototype.showAll = function() {
        this.isExpanded(true);
        return this.trigger('view-style-change');
      };

      /*
      通常表示にする
      */


      CarouselBanner01Controller.prototype.showNormal = function() {
        this.isExpanded(false);
        return this.trigger('view-style-change');
      };

      /*
      すべて表示する 状態になっているかどうか
      すべて表示する担っている場合 true
      通常状態 false
      */


      CarouselBanner01Controller.prototype.isExpanded = function(isExpanded) {
        if ((this._isExpanded != null) && isExpanded === void 0) {
          return this._isExpanded;
        }
        if (isExpanded != null) {
          this._isExpanded = isExpanded;
        }
        return this._isExpanded;
      };

      /*
      内容をパースする
      */


      CarouselBanner01Controller.prototype.parseData = function() {
        this.totalBanner(this.$el.find('.carousel-list > .list-item').length);
        return this.parseColumns();
      };

      /*
      ページを移動させる
      */


      CarouselBanner01Controller.prototype.page = function(positionNumber) {
        if (positionNumber === void 0) {
          return;
        }
        if (positionNumber < 0) {
          return;
        }
        if (positionNumber >= this.totalPage()) {
          return;
        }
        this.$el.css('visibility', 'visible');
        this.pagePosition(positionNumber);
        return this.trigger('change');
      };

      /*
      表示位置を返す
      最初の位置は 0
      */


      CarouselBanner01Controller.prototype.pagePosition = function(positionNumber) {
        if ((this._positionNumber != null) && positionNumber === void 0) {
          return this._positionNumber;
        }
        if (positionNumber != null) {
          this._positionNumber = positionNumber;
        }
        return this._positionNumber;
      };

      /*
      左端のとき
      */


      CarouselBanner01Controller.prototype.isFirstPage = function() {
        return this.pagePosition() === 0;
      };

      CarouselBanner01Controller.prototype.isLastPage = function() {
        return this.pagePosition() === this.totalPage() - 1;
      };

      /*
      表示カラムを取得する
      */


      CarouselBanner01Controller.prototype.parseColumns = function() {
        var column, columnClass;
        columnClass = this.$el.get(0).className.match(/carousel-column(\d+)/);
        if (columnClass != null) {
          column = parseInt(columnClass[1]);
        }
        if (columnClass == null) {
          column = 1;
        }
        return this.columns(column);
      };

      /*
      表示カラム数を設定する/返す
      */


      CarouselBanner01Controller.prototype.columns = function(columnsCount) {
        if ((this._columnsCount != null) && columnsCount === void 0) {
          return this._columnsCount;
        }
        if (columnsCount != null) {
          this._columnsCount = columnsCount;
        }
        return this._columnsCount;
      };

      /*
      最大カラム数を返す
      */


      CarouselBanner01Controller.prototype.totalPage = function() {
        return Math.ceil(this.totalBanner() / this.columns());
      };

      /*
      バナーの個数を設定する/返す
      */


      CarouselBanner01Controller.prototype.totalBanner = function(count) {
        if ((this._bannerCount != null) && count === void 0) {
          return this._bannerCount;
        }
        if (count != null) {
          this._bannerCount = count;
        }
        return this._bannerCount;
      };

      return CarouselBanner01Controller;

    })(Backbone.View);
    /*
    リスト
    */

    CarouselBanner01List = (function(_super) {
      __extends(CarouselBanner01List, _super);

      function CarouselBanner01List() {
        _ref1 = CarouselBanner01List.__super__.constructor.apply(this, arguments);
        return _ref1;
      }

      /*
      初期化
      */


      CarouselBanner01List.prototype.initialize = function(o) {
        this.controller = o.controller;
        this.tween = new Tweenable();
        return this.initializeView();
      };

      /*
      要素を初期化する
      */


      CarouselBanner01List.prototype.initializeView = function() {
        var $el, $list, $parent, listWidth, unitWidth;
        $parent = this.controller.$el;
        $el = $('<div class="carousel-list-block"></div>');
        this.$list = $list = $parent.find('.carousel-list');
        $list.wrap($el);
        this.unitWidth = unitWidth = $list.find('> li').outerWidth(true) * this.controller.columns();
        this.listWidth = listWidth = this.controller.totalPage() * unitWidth;
        if (this.controller.totalPage() === 1 && this.controller.totalBanner() < this.controller.columns()) {
          return;
        }
        this.controller.on('change', _.bind(this.onPageChanged, this));
        this.controller.on('view-style-change', _.bind(this.onViewStyleChanged, this));
        $list.width(listWidth);
        return this.listHeight = $list.height();
      };

      /*
      # 中央揃えにする
      */


      /*
      ページ位置が変更されたときに呼び出されるコールバック
      */


      CarouselBanner01List.prototype.onPageChanged = function() {
        return this.slide();
      };

      /*
      ビューの表示が変更されたときに呼び出されるコールバック
      */


      CarouselBanner01List.prototype.onViewStyleChanged = function() {
        if (this.controller.isExpanded()) {
          this.showExpandMode();
          return;
        }
        return this.showNormalMode();
      };

      CarouselBanner01List.prototype.showExpandMode = function() {
        var style, tweenObj;
        style = {
          left: 0,
          position: 'relative'
        };
        this.$list.width(this.unitWidth).css(style);
        tweenObj = this.expandTweenObject({
          to: {
            height: this.$list.height()
          }
        });
        return this.tween.stop().tween(tweenObj);
      };

      CarouselBanner01List.prototype.showNormalMode = function() {
        var left, page, tweenObj,
          _this = this;
        page = this.controller.pagePosition();
        left = page * this.unitWidth * (-1);
        tweenObj = this.expandTweenObject({
          to: {
            height: this.listHeight
          },
          callback: function() {
            var style;
            style = {
              left: left,
              position: 'absolute'
            };
            return _this.$list.width(_this.listWidth).css(style);
          }
        });
        return this.tween.stop().tween(tweenObj);
      };

      /*
      ページをスライドさせる
      */


      CarouselBanner01List.prototype.slide = function() {
        var left, page, tweenObj;
        page = this.controller.pagePosition();
        left = page * this.unitWidth * (-1);
        tweenObj = this.slideTweenObject({
          to: {
            left: left
          }
        });
        return this.tween.stop().tween(tweenObj);
      };

      /*
      スライド用 Tween 用のオブジェクトを作成する
      */


      CarouselBanner01List.prototype.slideTweenObject = function(obj) {
        var fromPosition, returnObject, showTweenObj;
        returnObject = {};
        fromPosition = Number(this.$list.css('left').replace('px', '')) || 0;
        showTweenObj = {
          duration: 200,
          easing: 'easeInOutQuad',
          step: _.bind(this.slideTweenStepCallback, this),
          from: {
            left: fromPosition
          }
        };
        _.extend(returnObject, showTweenObj, obj);
        return returnObject;
      };

      /*
      スライド時 ステップ毎に呼び出されるコールバック
      */


      CarouselBanner01List.prototype.slideTweenStepCallback = function(obj) {
        return this.$list.css('left', obj.left + 'px');
      };

      /*
      すべて表示 Tween 用のオブジェクトを作成する
      */


      CarouselBanner01List.prototype.expandTweenObject = function(obj) {
        var fromHeight, returnObject, showTweenObj;
        returnObject = {};
        fromHeight = this.$list.parent().height() || 0;
        showTweenObj = {
          duration: 550,
          easing: 'easeInOutQuad',
          step: _.bind(this.expandTweenStepCallback, this),
          from: {
            height: fromHeight
          }
        };
        _.extend(returnObject, showTweenObj, obj);
        return returnObject;
      };

      /*
      すべて表示時 ステップ毎に呼び出されるコールバック
      */


      CarouselBanner01List.prototype.expandTweenStepCallback = function(obj) {
        return this.$list.parent().height(obj.height);
      };

      return CarouselBanner01List;

    })(Backbone.View);
    /*
    次へ/戻るボタンクラス
    */

    CarouselBanner01SequentialButton = (function(_super) {
      __extends(CarouselBanner01SequentialButton, _super);

      function CarouselBanner01SequentialButton() {
        _ref2 = CarouselBanner01SequentialButton.__super__.constructor.apply(this, arguments);
        return _ref2;
      }

      CarouselBanner01SequentialButton.prototype.initialize = function(o) {
        this.controller = o.controller;
        return this.initializeView();
      };

      CarouselBanner01SequentialButton.prototype.initializeView = function() {
        var c, o;
        c = this.controller;
        if (c.totalPage() <= 1) {
          return;
        }
        this.controller.on('change', _.bind(this.onPageChanged, this));
        this.controller.on('view-style-change', _.bind(this.onViewChanged, this));
        o = {
          controller: this,
          $parent: c.$el
        };
        this.nextButtonElement = new NextButtonElement(o);
        return this.previousButtonElement = new PreviousButtonElement(o);
      };

      CarouselBanner01SequentialButton.prototype.next = function() {
        return this.controller.next();
      };

      CarouselBanner01SequentialButton.prototype.previous = function() {
        return this.controller.previous();
      };

      CarouselBanner01SequentialButton.prototype.isExpanded = function() {
        return this.controller.isExpanded();
      };

      CarouselBanner01SequentialButton.prototype.onViewChanged = function() {
        return this.trigger('view-style-change');
      };

      CarouselBanner01SequentialButton.prototype.onPageChanged = function() {
        return this.trigger('change');
      };

      CarouselBanner01SequentialButton.prototype.isFirstPage = function() {
        return this.controller.isFirstPage();
      };

      CarouselBanner01SequentialButton.prototype.isLastPage = function() {
        return this.controller.isLastPage();
      };

      return CarouselBanner01SequentialButton;

    })(Backbone.View);
    /*
    ボタンのインタフェース風
    */

    ButtonElement = (function(_super) {
      __extends(ButtonElement, _super);

      function ButtonElement() {
        _ref3 = ButtonElement.__super__.constructor.apply(this, arguments);
        return _ref3;
      }

      ButtonElement.prototype.initialize = function(o) {
        this.controller = o.controller;
        return this.$parent = o.$parent;
      };

      ButtonElement.prototype.enable = function() {};

      ButtonElement.prototype.disable = function() {};

      ButtonElement.prototype.show = function() {};

      ButtonElement.prototype.hide = function() {};

      return ButtonElement;

    })(Backbone.View);
    /*
    進む/戻るの親クラス
    */

    SequentialButtonElement = (function(_super) {
      __extends(SequentialButtonElement, _super);

      function SequentialButtonElement() {
        _ref4 = SequentialButtonElement.__super__.constructor.apply(this, arguments);
        return _ref4;
      }

      /*
      初期化
      */


      SequentialButtonElement.prototype.initialize = function(o) {
        SequentialButtonElement.__super__.initialize.call(this, o);
        this.controller.on('change', _.bind(this.onPageChanged, this));
        this.controller.on('view-style-change', _.bind(this.onViewStyleChanged, this));
        return this.status = null;
      };

      /*
      要素を作成する
      */


      SequentialButtonElement.prototype.render = function() {
        this.$el = $(this.src);
        this.$parent.append(this.$el);
        return this.$el.find('.button-anchor').on('click', function(e) {
          return e.preventDefault();
        });
      };

      /*
      有効にする
      */


      SequentialButtonElement.prototype.enable = function() {
        if (this.status === 'enabled') {
          return;
        }
        this.$el.find('.button-anchor').removeClass('button-square-disabled').on('click.sequential-button-event', _.bind(this.onClick, this));
        return this.status = 'enabled';
      };

      /*
      無効にする
      */


      SequentialButtonElement.prototype.disable = function() {
        if (this.status === 'disabled') {
          return;
        }
        this.$el.find('.button-anchor').addClass('button-square-disabled').off('click.sequential-button-event');
        return this.status = 'disabled';
      };

      SequentialButtonElement.prototype.onPageChanged = function() {
        throw new Error('plz overrde onClick');
      };

      SequentialButtonElement.prototype.onViewStyleChanged = function() {
        if (this.controller.isExpanded()) {
          this.$el.hide();
          return;
        }
        return this.$el.show();
      };

      SequentialButtonElement.prototype.onClick = function() {
        throw new Error('plz overrde onClick');
      };

      return SequentialButtonElement;

    })(ButtonElement);
    /*
    次へボタン
    */

    NextButtonElement = (function(_super) {
      __extends(NextButtonElement, _super);

      function NextButtonElement() {
        _ref5 = NextButtonElement.__super__.constructor.apply(this, arguments);
        return _ref5;
      }

      NextButtonElement.prototype.src = '<span class="button-square01 button-square-arrow-next"><a class="button-anchor" href="#"><span class="ir ir-button-arrow-next01">次のページへ</span></a></span>';

      /*
      初期化
      */


      NextButtonElement.prototype.initialize = function(o) {
        NextButtonElement.__super__.initialize.call(this, o);
        return this.render();
      };

      /*
      ページが切り替わったときに呼び出されるコールバック
      */


      NextButtonElement.prototype.onPageChanged = function() {
        if (this.controller.isLastPage()) {
          this.disable();
          return;
        }
        return this.enable();
      };

      /*
      ボタンがクリックされたときに呼び出されるコールバック
      */


      NextButtonElement.prototype.onClick = function(e) {
        return this.controller.next();
      };

      return NextButtonElement;

    })(SequentialButtonElement);
    /*
    戻るボタン
    */

    PreviousButtonElement = (function(_super) {
      __extends(PreviousButtonElement, _super);

      function PreviousButtonElement() {
        _ref6 = PreviousButtonElement.__super__.constructor.apply(this, arguments);
        return _ref6;
      }

      PreviousButtonElement.prototype.src = '<span class="button-square01 button-square-arrow-previous"><a class="button-anchor" href="#"><span class="ir ir-button-arrow-previous01">前のページへ</span></a></span>';

      PreviousButtonElement.prototype.initialize = function(o) {
        PreviousButtonElement.__super__.initialize.call(this, o);
        return this.render();
      };

      /*
      ページが切り替わったときに呼び出されるコールバック
      */


      PreviousButtonElement.prototype.onPageChanged = function() {
        if (this.controller.isFirstPage()) {
          this.disable();
          return;
        }
        return this.enable();
      };

      /*
      ボタンがクリックされたときに呼び出されるコールバック
      */


      PreviousButtonElement.prototype.onClick = function() {
        return this.controller.previous();
      };

      return PreviousButtonElement;

    })(SequentialButtonElement);
    /*
    すべて表示するリンク
    */

    ShowAllButtonElement = (function(_super) {
      __extends(ShowAllButtonElement, _super);

      function ShowAllButtonElement() {
        _ref7 = ShowAllButtonElement.__super__.constructor.apply(this, arguments);
        return _ref7;
      }

      ShowAllButtonElement.prototype.src = '<div class="show-all-block"></div>';

      ShowAllButtonElement.prototype.buttonShowAllSrc = '<span class="link-text01 link-for-show-all"><a class="link-anchor" href="#"><span class="ir ir-link-for-show-all01"></span>すべて表示する</a></span>';

      ShowAllButtonElement.prototype.buttonCloseSrc = '<span class="link-text01 link-for-close"><a class="link-anchor" href="#"><span class="ir ir-link-for-close01"></span>閉じる</a></span>';

      /*
      初期化
      */


      ShowAllButtonElement.prototype.initialize = function(o) {
        ShowAllButtonElement.__super__.initialize.call(this, o);
        if (this.controller.columns() === 1) {
          return;
        }
        if (this.controller.totalPage() === 1) {
          return;
        }
        this.controller.on('view-style-change', _.bind(this.onViewStyleChanged, this));
        return this.render();
      };

      /*
      要素を作成する
      */


      ShowAllButtonElement.prototype.render = function() {
        var $el;
        this.$el = $el = $(this.src);
        $el.append($(this.buttonShowAllSrc));
        this.$parent.append(this.$el);
        return $el.find('.link-for-show-all .link-anchor').on('click.show-all', _.bind(this.onShowAllButtonClicked, this));
      };

      /*
      すべて表示ボタンがクリックされたときに呼び出されるコールバック
      */


      ShowAllButtonElement.prototype.onShowAllButtonClicked = function(e) {
        e.preventDefault();
        return this.controller.showAll();
      };

      /*
      閉じるボタンがクリックされたときに呼び出されるコールバック
      */


      ShowAllButtonElement.prototype.onCloseButtonClicked = function(e) {
        e.preventDefault();
        return this.controller.showNormal();
      };

      ShowAllButtonElement.prototype.showCloseButton = function() {
        var $el;
        $el = this.$el;
        $el.find('.link-for-show-all .link-anchor').off('click.show-all');
        $el.find('.link-for-show-all').remove();
        $el.append($(this.buttonCloseSrc));
        return $el.find('.link-for-close .link-anchor').on('click.close', _.bind(this.onCloseButtonClicked, this));
      };

      ShowAllButtonElement.prototype.showShowAllButton = function() {
        var $el;
        $el = this.$el;
        $el.find('.link-for-close .link-anchor').off('click.close');
        $el.find('.link-for-close').remove();
        $el.append($(this.buttonShowAllSrc));
        return $el.find('.link-for-show-all .link-anchor').on('click.show-all', _.bind(this.onShowAllButtonClicked, this));
      };

      ShowAllButtonElement.prototype.onViewStyleChanged = function() {
        if (this.controller.isExpanded()) {
          this.showCloseButton();
          return;
        }
        return this.showShowAllButton();
      };

      return ShowAllButtonElement;

    })(ButtonElement);
    /*
    ページネーション
    */

    Pagination = (function(_super) {
      __extends(Pagination, _super);

      function Pagination() {
        _ref8 = Pagination.__super__.constructor.apply(this, arguments);
        return _ref8;
      }

      Pagination.prototype.src = '<div class="carousel-pagination-block"><ul class="carousel-pagination"></ul></div>';

      /*
      初期化
      */


      Pagination.prototype.initialize = function(o) {
        this.controller = o.controller;
        this.$parent = o.$parent;
        return this.initializeView();
      };

      /*
      要素を初期化する
      */


      Pagination.prototype.initializeView = function() {
        if (this.controller.totalPage() <= 1) {
          return;
        }
        this.controller.on('change', _.bind(this.onPageChanged, this));
        this.controller.on('view-style-change', _.bind(this.onViewChanged, this));
        return this.render();
      };

      /*
      要素を描画する
      */


      Pagination.prototype.render = function() {
        var $ul, dots, _i, _ref9, _results,
          _this = this;
        this.$el = $(this.src);
        this.$parent.append(this.$el);
        $ul = this.$el.find('.carousel-pagination');
        dots = [];
        return _.each((function() {
          _results = [];
          for (var _i = 0, _ref9 = this.controller.totalPage() - 1; 0 <= _ref9 ? _i <= _ref9 : _i >= _ref9; 0 <= _ref9 ? _i++ : _i--){ _results.push(_i); }
          return _results;
        }).apply(this), function(item) {
          var dot, o;
          o = {
            controller: _this,
            position: item
          };
          dot = new PaginationDot(o);
          dots.push(dot);
          return $ul.append(dot.$el);
        });
      };

      /*
      ページが切り替わったときに呼び出されるコールバック
      */


      Pagination.prototype.onPageChanged = function() {
        return this.trigger('change');
      };

      /*
      表示
      */


      Pagination.prototype.onViewChanged = function() {
        if (this.controller.isExpanded()) {
          this.$el.hide();
          return;
        }
        return this.$el.show();
      };

      /*
      表示位置を返す
      */


      Pagination.prototype.pagePosition = function() {
        return this.controller.pagePosition();
      };

      /*
      バナーを切り替える
      */


      Pagination.prototype.page = function(page) {
        return this.controller.page(page);
      };

      return Pagination;

    })(Backbone.View);
    /*
    ページネーションのドット
    これは1から始まる
    */

    PaginationDot = (function(_super) {
      __extends(PaginationDot, _super);

      function PaginationDot() {
        _ref9 = PaginationDot.__super__.constructor.apply(this, arguments);
        return _ref9;
      }

      PaginationDot.prototype.src = '<li class="pagination-dot"><span class="position">{{position}}</span></li>';

      /*
      初期化
      */


      PaginationDot.prototype.initialize = function(o) {
        this.controller = o.controller;
        this.position = Number(o.position);
        this.controller.on('change', _.bind(this.onPageChanged, this));
        return this.render();
      };

      /*
      描画する
      */


      PaginationDot.prototype.render = function() {
        this.$el = $(this.src.replace("{{position}}", this.position));
        return this.$el.on('click', _.bind(this.onClicked, this));
      };

      /*
      クリックされた時に呼び出されたコールバック
      */


      PaginationDot.prototype.onClicked = function(e) {
        return this.controller.page(this.position);
      };

      /*
      stay 表示にする
      */


      PaginationDot.prototype.stay = function() {
        return this.$el.addClass('pagination-dot-stay');
      };

      /*
      通常表示にする
      */


      PaginationDot.prototype.normal = function() {
        return this.$el.removeClass('pagination-dot-stay');
      };

      /*
      ページが切り替わったときに呼び出されるコールバック
      */


      PaginationDot.prototype.onPageChanged = function() {
        if (this.position === this.controller.pagePosition()) {
          this.stay();
          return;
        }
        return this.normal();
      };

      return PaginationDot;

    })(Backbone.View);
    /*
    初期化
    */

    $(function() {
      return $('.carousel-banner01').each(function(idx, e) {
        var o;
        o = {
          $el: $(e)
        };
        return new CarouselBanner01Controller(o);
      });
    });
    return CarouselBanner01Controller;
  });

}).call(this);
