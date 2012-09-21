define(['ext/jquery'],
function($) {

  /**
   * A simple jQuery plugin to be a tiny bit fancier when sliding down (fade in
   * as well).
   */
  $.fn.fancySlide = function(dir, duration) {
    duration = duration === undefined ? 300 : duration;

    if (dir === 'down') {
      return this.css('opacity', 0)
        .animate({
          opacity: 1.0
        }, {
          duration: duration,
          queue: false
        })
        .slideDown(duration);
    } else if (dir === 'up') {
      return this.stop(/* clearQueue */ true)
        .slideUp(duration);
    }

    return this;
  };

});
