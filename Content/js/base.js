/* global $ */
/**
 *    ▄████████ ▀████    ▐████▀  ▄██████▄  ███▄▄▄▄           ▄████████  ▄██████▄  ███    █▄      ███        ▄████████    ▄████████ 
 *   ███    ███   ███▌   ████▀  ███    ███ ███▀▀▀██▄        ███    ███ ███    ███ ███    ███ ▀█████████▄   ███    ███   ███    ███ 
 *   ███    ███    ███  ▐███    ███    ███ ███   ███        ███    ███ ███    ███ ███    ███    ▀███▀▀██   ███    █▀    ███    ███ 
 *   ███    ███    ▀███▄███▀    ███    ███ ███   ███       ▄███▄▄▄▄██▀ ███    ███ ███    ███     ███   ▀  ▄███▄▄▄      ▄███▄▄▄▄██▀ 
 * ▀███████████    ████▀██▄     ███    ███ ███   ███      ▀▀███▀▀▀▀▀   ███    ███ ███    ███     ███     ▀▀███▀▀▀     ▀▀███▀▀▀▀▀   
 *   ███    ███   ▐███  ▀███    ███    ███ ███   ███      ▀███████████ ███    ███ ███    ███     ███       ███    █▄  ▀███████████ 
 *   ███    ███  ▄███     ███▄  ███    ███ ███   ███        ███    ███ ███    ███ ███    ███     ███       ███    ███   ███    ███ 
 *   ███    █▀  ████       ███▄  ▀██████▀   ▀█   █▀         ███    ███  ▀██████▀  ████████▀     ▄████▀     ██████████   ███    ███ 
 *                                                          ███    ███                                                  ███    ███                                                                             
 * -------------------------------------------------------------------------------------------------------------------------------
 *   "An Axon is the long threadlike part of a nerve cell along which impulses are conducted from the cell body to other cells.""
 *
 * @author 
 * 		Cameron Van Orman
 * 		<cameron@efelle.com>
 * 		Slack @cameronv
 *
 * @reference
 * 		Code Standards: http://daux.efellemedia.com/SOP/master/code-standards/javascript
 *
 * @usage
 * 		Store javascript functions under the FEATURES namespace to give your functions global scope.
 * 		Pass your functions to the Site Router under the relevant page name. Page names are defined by body classes.
 *
 * 		NOTE: You must have a body class on the template you're targeting in order for your page specific scripts to run.
 * 		i.e <body class='home'> if you're on the frontpage template.
 * 
 * 		NOTE: In order for your javascript to run on a specific page you need to declare the function in the FEATURES global namespace,
 * 		then call the function in the page setup where you've setup your page specific body class.
 *
 *
 * FEATURES SETUP
 * -------------
 *
 *	NOTE: Your FEATURES variable is global scope.
 * 	Javascript Global Scope: http://stackoverflow.com/a/500459 
 * 	ie. FEATURES.yourFunctionName();
 * 
 * 	NOTE: Our global variable "FEATURES" is all caps. 
 * 	ALL global scoped variables should be written in all caps
 *	to signify hierarchy in the application,
 *
 * 	Write your page specific functions here, then call the function for 
 * 	the pages you need it on below.
 *
 * @usage
 * 		var FEATURES = {
 *   		yourFunctionName: function() {
 *    		 -- Write/paste your script here --
 *  		},
 * 		};
 */

var FEATURES = {

    headerSlideDown: function () {
        var waypoint = new Waypoint({
            element: document.getElementById('header'),
            handler: function (direction) {
                if (direction === 'down') {
                    $('#header').addClass('about-show animated slideInDown');
                    this.destroy()
                }
            },
        });
    },

    openNavigation: function() {
        $("#navigation").addClass('load');

        $("#navigation").mmenu({
            extensions: [
                //"pagedim-black",
                //"effect-menu-slide",
                "theme-dark",
                "pageshadow",
                "border-none"
            ],

            offCanvas: {
                position: "right",
                //zposition: "front"
            },

            "navbars": [
               true,
               {
                   "position": "bottom",
                   "content": [
                      "<a class='fa fa-github fa-2x' href='#/'></a>",
                      "<a class='fa fa-facebook fa-2x' href='#/'></a>",
                      "<a class='fa fa-linkedin fa-2x' href='#/'></a>"
                   ]
               }
            ]
        });
    },

    backToTop: function () {
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
    },

    portfolioSlider: function () {

        /* Header Slideshow*/
        $('.portfolio-slideshow').slick({
            lazyLoad: 'ondemand',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            fade: true,
            asNavFor: '.slider-nav'
        });

        /* Display projects in grid*/
        $('.entry').hover(function () {
            var li = $('li', this);

            for (var i = 0; i < $(li).length; i++) {
                $($(li)[i]).stop().animate({
                    'height': '18px'
                }, 300 + (i * 150));
            }
        }, function () {
            $('li', this).stop().animate({
                'height': '5px'
            }, 250);
        });
    },

    aboutFancyBox: function () {
        $(".fancybox").fancybox({
            padding: 0
        });
    },

    aboutSection1: function () {

        var waypoint = new Waypoint({
            element: document.getElementById('Interest01'),
            handler: function (direction) {                
                if (direction === 'down') {
                    //$.notify("This is Interest01");
                    $('#Interest01').addClass('about-show animated slideInLeft');

                    var header = $('.stats__header');
                    var bar = $('.stats__item-bar');
                    var nums = $('.stats__item-num');
                    var overlay = $('.stats__overlay');
                    var back = $('.stats__overlay-back');
                    var isOpen = false;

                    var vYear = $('#year');
                    var vAvg = $('#avg');
                    var vGames = $('#games');
                    var vGoal = $('#goals');

                    entrance();

                    bar.on('click', showOverlay);
                    back.on('click', showOverlay);

                    function entrance() {
                        bar.addClass('active');
                        header.addClass('active');
                        header.on('transitionend webkitTransitionend', function () {
                            nums.css('opacity', '1');
                            bar.css('transition-delay', '0');
                            header.off('transitionend webkitTransitionend');
                        });
                    }

                    function showOverlay() {
                        if (!isOpen) {
                            overlay.addClass('active').removeAttr('style');
                            bar.css('transition', 'all 0.4s cubic-bezier(0.86, 0, 0.07, 1)')
                            .removeClass('active');
                            header.removeClass('active');
                            nums.css('opacity', '0');
                            isOpen = true;

                            updateInfo($(this).parent().index());
                        } else {
                            overlay.css('transition', 'all 0.4s cubic-bezier(0.755, 0.05, 0.855, 0.06)').removeClass('active');
                            bar.addClass('active').removeAttr('style');
                            header.addClass('active');
                            nums.css('opacity', '1');
                            isOpen = false;
                        }
                    }

                    var data = [
                      {
                          year: '2007-2008',
                          goals: '65',
                          games: '82',
                          avg: '0.79'

                      },
                      {
                          year: '2008-2009',
                          goals: '56',
                          games: '79',
                          avg: '0.7'

                      },
                      {
                          year: '2009-2010',
                          goals: '50',
                          games: '72',
                          avg: '0.69'

                      },
                      {
                          year: '2010-2011',
                          goals: '32',
                          games: '79',
                          avg: '0.40'

                      },
                      {
                          year: '2011-2012',
                          goals: '38',
                          games: '78',
                          avg: '0.48'

                      },
                      {
                          year: '2012-2013',
                          goals: '32',
                          games: '48',
                          avg: '0.66'

                      },
                      {
                          year: '2013-2014',
                          goals: '51',
                          games: '78',
                          avg: '0.65'

                      },
                      {
                          year: '2014-2015',
                          goals: '50',
                          games: '76',
                          avg: '0.66'

                      }
                    ];

                    function updateInfo(index) {
                        vYear.text(data[index].year);
                        vAvg.text(data[index].avg);
                        vGoal.text(data[index].goals);
                        vGames.text(data[index].games);
                    }


                    this.destroy()                    
                }
            },
            offset: '90%'
        });

        var waypoint = new Waypoint({
            element: document.getElementById('Interest02'),
            handler: function (direction) {
                if (direction === 'down') {
                    //$.notify("This is Interest02");
                    $('#Interest02').addClass('about-show animated slideInLeft');


                    this.destroy()
                }
            },
            offset: '90%'
        });

        var waypoint = new Waypoint({
            element: document.getElementById('Interest03'),
            handler: function (direction) {
                if (direction === 'down') {
                    //$.notify("This is Interest03");
                    $('#Interest03').addClass('about-show animated slideInLeft');

                    $.fn.jQuerySimpleCounter = function (options) {
                        var settings = $.extend({
                            start: 0,
                            end: 100,
                            easing: 'swing',
                            duration: 400,
                            complete: ''
                        }, options);

                        var thisElement = $(this);

                        $({ count: settings.start }).animate({ count: settings.end }, {
                            duration: settings.duration,
                            easing: settings.easing,
                            step: function () {
                                var mathCount = Math.ceil(this.count);
                                thisElement.text(mathCount);
                            },
                            complete: settings.complete
                        });
                    };


                    $('#number1').jQuerySimpleCounter({ end: 12, duration: 3000 });
                    $('#number2').jQuerySimpleCounter({ end: 55, duration: 3000 });
                    $('#number3').jQuerySimpleCounter({ end: 359, duration: 2000 });
                    $('#number4').jQuerySimpleCounter({ end: 246, duration: 2500 });

                    this.destroy()
                }
            },
            offset: '90%'
        });
    }
};