(function($) {
    "use strict";

    var sec_slider = $('.sec-slider');
    sec_slider.owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        margin: 30,
        navElement: 'div',
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            767: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

})(jQuery);