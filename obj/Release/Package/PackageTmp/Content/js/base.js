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
                //"pageshadow",
                "border-none"
            ],

            offCanvas: {
                position: "right",
                zposition: "front"
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

                    // Our labels and three data series
                    var data = {
                        labels: ['Week1', 'Week2', 'Week3', 'Week4', 'Week5', 'Week6'],
                        series: [
                          [5, 4, 3, 7, 5, 10],
                          [3, 2, 9, 5, 4, 6],
                          [2, 1, -3, -4, -2, 0]
                        ]
                    };

                    // We are setting a few options for our chart and override the defaults
                    var options = {
                        // Don't draw the line chart points
                        showPoint: false,
                        // Disable line smoothing
                        lineSmooth: false,
                        // X-Axis specific configuration
                        axisX: {
                            // We can disable the grid for this axis
                            showGrid: false,
                            // and also don't show the label
                            showLabel: false
                        },
                        // Y-Axis specific configuration
                        axisY: {
                            // Lets offset the chart a bit from the labels
                            offset: 40,
                            // The label interpolation function enables you to modify the values
                            // used for the labels on each axis. Here we are converting the
                            // values into million pound.
                            labelInterpolationFnc: function (value) {
                                return '$' + value + 'm';
                            }
                        }
                    };

                    // All you need to do is pass your configuration as third parameter to the chart function
                    new Chartist.Line('.ct-chart', data, options);

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

                    // Our labels and three data series
                    var data = {
                        labels: ['Week1', 'Week2', 'Week3', 'Week4', 'Week5', 'Week6'],
                        series: [
                          [5, 4, 3, 7, 5, 10],
                          [3, 2, 9, 5, 4, 6],
                          [2, 1, -3, -4, -2, 0]
                        ]
                    };

                    // We are setting a few options for our chart and override the defaults
                    var options = {
                        // Don't draw the line chart points
                        showPoint: false,
                        // Disable line smoothing
                        lineSmooth: false,
                        // X-Axis specific configuration
                        axisX: {
                            // We can disable the grid for this axis
                            showGrid: false,
                            // and also don't show the label
                            showLabel: false
                        },
                        // Y-Axis specific configuration
                        axisY: {
                            // Lets offset the chart a bit from the labels
                            offset: 40,
                            // The label interpolation function enables you to modify the values
                            // used for the labels on each axis. Here we are converting the
                            // values into million pound.
                            labelInterpolationFnc: function (value) {
                                return '$' + value + 'm';
                            }
                        }
                    };

                    // All you need to do is pass your configuration as third parameter to the chart function
                    new Chartist.Line('.ct-chart2', data, options);

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

                    // Our labels and three data series
                    var data = {
                        labels: ['Week1', 'Week2', 'Week3', 'Week4', 'Week5', 'Week6'],
                        series: [
                          [5, 4, 3, 7, 5, 10],
                          [3, 2, 9, 5, 4, 6],
                          [2, 1, -3, -4, -2, 0]
                        ]
                    };

                    // We are setting a few options for our chart and override the defaults
                    var options = {
                        // Don't draw the line chart points
                        showPoint: false,
                        // Disable line smoothing
                        lineSmooth: false,
                        // X-Axis specific configuration
                        axisX: {
                            // We can disable the grid for this axis
                            showGrid: false,
                            // and also don't show the label
                            showLabel: false
                        },
                        // Y-Axis specific configuration
                        axisY: {
                            // Lets offset the chart a bit from the labels
                            offset: 40,
                            // The label interpolation function enables you to modify the values
                            // used for the labels on each axis. Here we are converting the
                            // values into million pound.
                            labelInterpolationFnc: function (value) {
                                return '$' + value + 'm';
                            }
                        }
                    };

                    // All you need to do is pass your configuration as third parameter to the chart function
                    new Chartist.Line('.ct-chart3', data, options);

                    this.destroy()
                }
            },
            offset: '90%'
        });
    }
};