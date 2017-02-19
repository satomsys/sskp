(function() {
  define(['jquery'], function($) {
    var DefaultPanel, target_classes;
    target_classes = ['.mixed-content-menu-block01', '.product-item-list-block', '.panel-and-link-item-block01', '.faq-item-block01', '.panel-advisement'];
    DefaultPanel = {};
    DefaultPanel.setHoverAction = function($targets) {
      return $targets.off('mouseenter.MENUBLOCK mouseleave.MENUBLOCK').on('mouseenter.MENUBLOCK', 'a', function(evt) {
        return $(evt.delegateTarget).addClass('panel-hover-spurious');
      }).on('mouseleave.MENUBLOCK', 'a', function(evt) {
        return $(evt.delegateTarget).removeClass('panel-hover-spurious');
      });
    };
    $(function() {
      return DefaultPanel.setHoverAction($(target_classes.join(',')));
    });
    return DefaultPanel;
  });

}).call(this);
