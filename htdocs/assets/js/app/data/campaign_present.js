/*
campaign present
*/


(function() {
  define(['require', 'collections/campaign_presents'], function(require) {
    var CampaignPresents, campaignPresents;
    CampaignPresents = require('collections/campaign_presents');
    campaignPresents = new CampaignPresents();
    campaignPresents.add({
      'shohinCd': 'campaign001',
      'shohinName': '七年の恵み 長白参',
      'thumbnailUrl': '/assets/ps/domohornwrinkle/member/order/img/dummy_product_thumbnail01.png'
    });
    campaignPresents.add({
      'shohinCd': 'campaign002',
      'shohinName': '夏のお手当て応援4ポイント',
      'point': '4'
    });
    campaignPresents.add({
      'shohinCd': 'campaign003',
      'shohinName': 'キャンペーン表示テスト用:化粧落としジェル10個',
      'point': '100',
      'thumbnailUrl': '/assets/ps/domohornwrinkle/member/order/img/dummy_product_thumbnail01.png'
    });
    campaignPresents.add({
      'shohinCd': 'campaign004',
      'shohinName': 'キャンペーン表示テスト用:保湿液10個'
    });
    return campaignPresents;
  });

}).call(this);
