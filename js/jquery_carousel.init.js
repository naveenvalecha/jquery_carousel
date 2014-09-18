/**
 * @file
 * Handles jcarousel initialization.
 */

(function ($) {
  Drupal.behaviors.jqueryCarousel = {
    attach: function (context) {
      $(document).ready(function(){
        var jcarouselSettings = Drupal.settings.jquery_carousel;
        var keys = [];
        for(var k in jcarouselSettings) {
          keys.push(k);
        }
        for (var i = 0; i < keys.length; i++) {
          var selector = '.' + keys[i];
          if ($(selector).length > 0) {
            $(selector).carousel(jcarouselSettings[keys[i]]);
          }
        }
      });
    }
  };
})(jQuery);
