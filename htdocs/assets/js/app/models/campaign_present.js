/*
campaign present
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'backbone', 'underscore'], function(require) {
    var Backbone, CampaignPresent, _, _ref;
    _ = require('underscore');
    Backbone = require('backbone');
    CampaignPresent = (function(_super) {
      __extends(CampaignPresent, _super);

      function CampaignPresent() {
        _ref = CampaignPresent.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CampaignPresent.prototype.defaults = function() {
        return {
          'shohinCd': null,
          'shohinName': null,
          'thumbnail': null,
          'point': null,
          'campaign': null
        };
      };

      CampaignPresent.prototype.is = function(shohinCd) {
        return this.get('shohinCd') === shohinCd;
      };

      return CampaignPresent;

    })(Backbone.Model);
    return CampaignPresent;
  });

}).call(this);
