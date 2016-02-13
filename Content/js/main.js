$(document).ready(function () {

    $("#header").ready(function () {
        $("#header").delay(1000).slideDown(1000, function () {
            // Animation complete.
        });
    });
 
    $("#nav-toggle").on("click", function () {
        $("#Navigation").addClass(".active").slideToggle("fast", function () {

        });
    });

    // Back to the top!
    $('#top').on("click", function () {
        $('body').animate({ scrollTop: 0 }, 1000, function () {

        });
    });

    $('.portfolio-slideshow').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 1,
        asNavFor: '.portfolio-slideshow',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });

});

