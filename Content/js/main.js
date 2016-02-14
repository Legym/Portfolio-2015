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
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        lazyLoad: 'ondemand',
        centerPadding: '1px',
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.portfolio-slideshow',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
           {
               breakpoint: 1400,
               settings: {
                   centerPadding: '20px',
                   slidesToShow: 5
               }
           },
           {
               breakpoint: 1200,
               settings: {
                   centerPadding: '20px',
                   slidesToShow: 3
               }
           },
           {
               breakpoint: 970,
               settings: {
                   centerPadding: '20px',
                   slidesToShow: 3
               }
           },
           {
               breakpoint: 740,
               settings: {
                   centerPadding: '20px',
                   slidesToShow: 3
               }
           },
           {
               breakpoint: 480,
               settings: {
                   centerPadding: '1px',
                   slidesToShow: 1
               }
           }
    ]
    });

});

