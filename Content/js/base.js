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
            element: document.getElementById('Interest02'),
            handler: function (direction) {                
                if (direction === 'down') {
                    $.notify("Hello World");
                    this.destroy()
                }
            }
        });

        //var pieData = [
        //    {
        //        value: 25,
        //        label: 'Java',
        //        color: '#811BD6'
        //    },
        //    {
        //        value: 10,
        //        label: 'Scala',
        //        color: '#9CBABA'
        //    },
        //    {
        //        value: 30,
        //        label: 'PHP',
        //        color: '#D18177'
        //    },
        //    {
        //        value: 35,
        //        label: 'HTML',
        //        color: '#6AE128'
        //    }
        //];

        //var context = document.getElementById('skills').getContext('2d');
        //var skillsChart = new Chart(context).Doughnut(pieData);

        //var context = document.getElementById('skills2').getContext('2d');
        //var skillsChart2 = new Chart(context).Pie(pieData);

        //var context = document.getElementById('skills3').getContext('2d');
        //var skillsChart3 = new Chart(context).Pie(pieData);
    }
};