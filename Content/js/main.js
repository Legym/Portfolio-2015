$(document).ready(function () {

    $("#header").ready(function () {
        $("#header").delay(500).slideDown(500, function () {
            // Animation complete.
        });
    });

    $("#logo").ready(function () {
        $(".logo").delay(500).slideDown(700, function () {
            // Animation complete.
        });
    });
 
    $("#nav-toggle").on("click", function () {

        $("#nav-toggle").toggleClass("active");

        $("#Navigation").slideToggle("slow", function () {
            
        });

    });

    // Back to the top!
    var $scroll_top_duration = 700,
        $back_to_top = $('#top');

    //smooth scroll to top
    $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, $scroll_top_duration
        );
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

    $(".fancybox").fancybox({
        padding: 0
    });

    var $linkURL = $("#Navigation ul li > a");

    $linkURL.filter(function(){
        return this.href == location.href.replace(/#.*/, "");
    }).addClass("menu-active"); 


});

