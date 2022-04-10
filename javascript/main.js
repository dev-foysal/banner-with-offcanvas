(function ($) {
    "use strict"


     /*-------------------------------------
            Offcanvas Menu activation code
        -------------------------------------*/
        $('#header-widget').on('click', '.offcanvas-menu-btn', function (e) {
            e.preventDefault();
            var $this = $(this),
            headerWidget = $(this).parents('body').find('>#header-widget'),
                wrapMask = $('<div />').addClass('offcanvas-mask'),
                offCancas = $('#offcanvas-wrap'),
                position = offCancas.data('position') || 'top';

            if ($this.hasClass('menu-status-open')) {
                headerWidget.addClass('open').append(wrapMask);
                $this.removeClass('menu-status-open').addClass('menu-status-close');
                offCancas.css({
                    'visibility': 'visible',
                    'opacity': '1',
                    'top': '50%',
                    'height': '100%'
                });
            } else {
                removeOffcanvas();
            }

            function removeOffcanvas() {
                headerWidget.removeClass('open').find('> .offcanvas-mask').remove();
                $this.removeClass('menu-status-close').addClass('menu-status-open');
                if (position === 'top') {
                    offCancas.css({
                        'visibility': 'hidden',
                        'opacity': '0',
                        'top': '0',
                        'height': '0'

                    });
                } else {
                    offCancas.css({
                        'visibility': 'hidden',
                        'opacity': '0',
                        'top': '0',
                        'height': '0'
                    });
                }
            }

            $(".offcanvas-mask, .offcanvas-close").on('click', function () {
                removeOffcanvas();
            });

            return false;
        });

        /*-------------------------------------
          Sidebar Toggle Menu
        -------------------------------------*/
        $('.offcanvas-menu, .menu-list').on('click', '.menu-item>a', function (e) {
            if ($(this).parents('body').hasClass('has-offcanvas')) {
                var animationSpeed = 500,
                    subMenuSelector = '.sub-menu',
                    $this = $(this),
                    checkElement = $this.next();
                if (checkElement.is(subMenuSelector) && checkElement.is(':visible')) {
                    checkElement.slideUp(animationSpeed, function () {
                        checkElement.removeClass('menu-open');
                    });
                    checkElement.parent(".menu-item").removeClass("active");
                } else if ((checkElement.is(subMenuSelector)) && (!checkElement.is(':visible'))) {
                    var parent = $this.parents('ul').first();
                    var ul = parent.find('ul:visible').slideUp(animationSpeed);
                    ul.removeClass('menu-open');
                    var parent_li = $this.parent("li");
                    checkElement.slideDown(animationSpeed, function () {
                        checkElement.addClass('menu-open');
                        parent.find('.menu-item.active').removeClass('active');
                        parent_li.addClass('active');
                    });
                }
                if (checkElement.is(subMenuSelector)) {
                    e.preventDefault();
                }
            } else {
                if ($(this).attr('href') === "#") {
                    e.preventDefault();
                }
            }
        });

            var bannerVar = $('.banner-owl');
            bannerVar.owlCarousel({
                loop:true,
                margin:10,
                nav:true,
                dots: false,
                autoplay: false,
                items: 1
            })

})(jQuery);
