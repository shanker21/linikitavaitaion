(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow');
            } else {
                $('.fixed-top').removeClass('bg-dark shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-dark shadow').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Causes progress
    $('.causes-progress').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    
})(jQuery);

            document.addEventListener('DOMContentLoaded', function () {
                const header = document.getElementById('linkit-header');
                const logo = document.getElementById('linkit-logo');
                const body = document.body;

                const normalLogo = 'img/logo/aviacademy-logo-yellow-JV3LGS.png';
                const stickyLogo = 'img/logo/sticky.png'; // ✅ replace with actual black logo path

                function handleStickyHeader() {
                    if (window.scrollY > 50) {
                        header.classList.add('sticky');
                        body.classList.add('sticky-header-padding');
                        logo.src = stickyLogo;
                        logo.srcset = `${stickyLogo} 727w, ${stickyLogo} 300w`;
                    } else {
                        header.classList.remove('sticky');
                        body.classList.remove('sticky-header-padding');
                        logo.src = normalLogo;
                        logo.srcset = `${normalLogo} 727w, ${normalLogo} 300w`;
                    }
                }

                window.addEventListener('scroll', handleStickyHeader);
            });


            /*---Banner----*/
