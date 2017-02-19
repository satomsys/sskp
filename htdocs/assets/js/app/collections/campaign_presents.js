/*
campaign presents
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'backbone', 'underscore', 'models/campaign_present'], function(require) {
    var Backbone, CampaignPresent, CampaignPresents, _, _ref;
    _ = require('underscore');
    Backbone = require('backbone');
    CampaignPresent = require('models/campaign_present');
    return CampaignPresents = (function(_super) {
      __extends(CampaignPresents, _super);

      function CampaignPresents() {
        _ref = CampaignPresents.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CampaignPresents.prototype.model = CampaignPresent;

      CampaignPresents.prototype.findByShohinCd = function(shohinCd) {
        return this.find(function(item) {
          return item.is(shohinCd);
        });
      };

      return CampaignPresents;

    })(Backbone.Collection);
  });

}).call(this);
