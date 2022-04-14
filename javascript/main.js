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
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                items: 1
            })

           
})(jQuery);

var swiper = new Swiper(".portfolioSlider", {
    autoplay: {
         delay: 2500,
         disableOnInteraction: false,
       },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  });

  var testimonialSlider = new Swiper(".testimonial-slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }
  });

  var swiper = new Swiper(".logo-slider", {
    slidesPerView: 6,
    loop: true,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });

//   /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles-js', 'assets/particles.json', function() {
//     console.log('callback - particles.js config loaded');
//   });

  /* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"]
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#b6b2b2"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 8.017060304327615,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 12.181158184520,
            "size_min": 0.1,
            "sync": true
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#c8c8c8",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 3,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "bounce",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 0,
            "size": 47.952047952047955,
            "duration": 3.116883116883117,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
  });

  //////////////
var onHover = document.querySelectorAll(".onhover");
onHover.forEach(hover => {
  hover.addEventListener("mouseout", function() {
    document.querySelector(".follower").classList.remove("big");
  });
  hover.addEventListener("mouseenter", function() {
    document.querySelector(".follower").classList.add("big");
  });
});

function moveMagnet(event) {
  var magnetButton = event.currentTarget;
  var bounding = magnetButton.getBoundingClientRect();
  TweenMax.to(magnetButton, 0.5, {
    x:
      ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
      strength,
    y:
      ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
      strength,
    ease: Power4.easeOut
  });
}

$(document).on("mousemove mouseenter", function(e) {
  const pointer = $(".pointer");
  const follower = $(".follower");
  TweenMax.to(pointer, 0.8, {
    left: e.clientX,
    top: e.clientY,
    ease: Expo.easeOut
  });
  TweenMax.to(follower, 1.5, {
    left: e.clientX,
    top: e.clientY,
    ease: Expo.easeOut
  });
});

// Mouse follower Reverted
$('.reverted').on('mouseenter mouseleave', (e)=> {
  if(e.type == 'mouseenter'){
    $('.follower-wrapper').addClass('revert');
  } else{
    $('.follower-wrapper').removeClass('revert');
  }
});