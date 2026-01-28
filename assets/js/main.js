
(function ($) {
    "use strict";
    let device_width = window.innerWidth;
    $.exists = function (selector) {
        return $(selector).length > 0;
    };

    //   gsap.registerPlugin(ScrollTrigger, SplitText);

    var webJs = {
        m: function (e) {
            webJs.d();
            webJs.methods();
        },
        d: function (e) {
            (this._window = $(window)),
                (this._document = $(document)),
                (this._body = $("body")),
                (this._html = $("html"));
        },
        methods: function (e) {
            webJs.announceBarTime();
            webJs.headerHemburgeCross();
            webJs.slickSlidersActivation();
            webJs.productSliderWithTab();

        },



        // Start Announce Bar Time

        announceBarTime: function () {
            function updateTime() {
                var now = new Date();
                var hours = now.getHours().toString().padStart(2, '0');
                var minutes = now.getMinutes().toString().padStart(2, '0');
                var seconds = now.getSeconds().toString().padStart(2, '0');
                $('.announcebar__time p').text(hours + " : " + minutes + " : " + seconds);
            }
            updateTime();
            setInterval(updateTime, 1000);
        },

        // End Announce Bar Time



        // Start Hemburge Cross

        headerHemburgeCross: function () {
            $('.header__menubar').on('click', function () {
                $(this).toggleClass('active');
            });
        },

        // End Hemburge Cross



        // Start Slick SLider Activation

        slickSlidersActivation: function () {

            // Start Best Weed 
            $('.best-product__product-card-items').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                ]
            });
            $('.best-product__slider-left-arrow').click(function () {
                $(this).parent().parent().find('.slick-slider').slick('slickPrev');
            });
            $('.best-product__slider-right-arrow').click(function () {
                $(this).parent().parent().find('.slick-slider').slick('slickNext');
            });
            // End Best Weed 

            // Start Testimonial 
            $('.testimonial__items').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                ]
            });
            $('.testimonial__arrow-left').click(function () {
                $(this).parent().parent().find('.slick-slider').slick('slickPrev');
            });
            $('.testimonial__arrow-right').click(function () {
                $(this).parent().parent().find('.slick-slider').slick('slickNext');
            });
            // End Testimonial 


        },

        // End Slick SLider Activation


        // Start Best Weed Tab 

        productSliderWithTab: function () {
            $('.best-product__btn-wrapper a').on('click', function (e) {
                e.preventDefault();
                var tabName = $(this).attr('data-tab');
                $('.best-product__btn-wrapper a').removeClass('active');
                $(this).addClass('active');
                $('.best-product__item').removeClass('active');
                $('.best-product__item[data-content="' + tabName + '"]').addClass('active');
            });
        },

        // End Best Weed Tab 







    };
    webJs.m();
})(jQuery, window);