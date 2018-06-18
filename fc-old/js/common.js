$(function() {
    var main_owl_settings = {
        loop: true,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        navSpeed: 1000,
        dotsSpeed: 1000,
        responsive: {
            0: {
                nav: false
            },
            1200: {
                nav: true
            }
        }
    };

    $(".first-carousel").owlCarousel($.extend(true, {}, main_owl_settings ,{
        items: 1
    }));

    $(".second-carousel").owlCarousel($.extend(true, {}, main_owl_settings ,{
        margin: 20,
        slideBy: 3,
        navSpeed: 500,
        dotsSpeed: 500,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    }));

    if(md === true) {
        $('.fourth-section .item-title').equalHeights();
    }
    $(window).resize(function () {
        if(md === true) {
            $('.fourth-section .item-title').equalHeights();
        }
        else{
            $('.fourth-section .item-title').css('height', 'auto');
        }
    });

});
