jQuery( document ).ready(function($) {
    $('.uk-navbar-left > ul.nav').addClass('uk-navbar-nav');
    $('.uk-navbar-left > ul.nav > .parent > ul.nav-child').wrap("<div class='uk-navbar-dropdown'></div>");
    // $('.uk-navbar-left > ul.nav > .parent > .uk-navbar-dropdown  > ul.nav-child').addClass('uk-nav uk-navbar-dropdown-nav');

    if ($('.uk-navbar-left > ul.nav > .parent > a').hasClass("width-2")){
    	
    	$('.uk-navbar-left > ul.nav > .parent > .uk-navbar-dropdown  > ul.nav-child').addClass('uk-nav-default uk-nav-parent-icon');
		$('.uk-navbar-left > ul.nav > .parent > .uk-navbar-dropdown  > ul.nav-child').attr('uk-nav', '');
		$('.uk-navbar-left > ul.nav > .parent > .uk-navbar-dropdown  > ul.nav-child > li > ul.nav-child').addClass('uk-nav-sub');
	}

	$('.uk-navbar-left > ul.nav').addClass('uk-navbar-nav');
    $('.scroll').attr('uk-scroll', '');
    $('.scrollStart').attr('uk-scroll', 'offset: 150');

    $(window).scroll(function() {
            var scrollDistance = $(window).scrollTop() + 500;
            // Assign active class to nav links while scolling
            $('.block').each(function(i) {
                    if ($(this).position().top <= scrollDistance) {
                            $('.uk-navbar-nav li').removeClass('active');
                            $('.uk-navbar-nav li').eq(i).addClass('active');
                            $('.uk-offcanvas-bar li').removeClass('uk-active');
                            $('.uk-offcanvas-bar li').eq(i).addClass('uk-active');
                    }
            });
    }).scroll();

    // $(window).scroll(function() {
    //         var scrollDistance = $(window).scrollTop();

    //         // Show/hide menu on scroll
    //         //if (scrollDistance >= 850) {
    //         //      $('nav').fadeIn("fast");
    //         //} else {
    //         //      $('nav').fadeOut("fast");
    //         //}
        
    //         // Assign active class to nav links while scolling
    //         $('.uk-section-default').each(function(i) {
    //                 if ($(this).position().top <= scrollDistance) {
    //                         $('.uk-nav li').removeClass('uk-active');
    //                         $('.uk-nav li').eq(i).addClass('uk-active');
    //                 }
    //         });
    // }).scroll();


	if ($(window).width() > 1600) {
        console.log('1600 Up');
    }
    else if ($(window).width() < 1600 && $(window).width() > 1200) {
        console.log('1200 - 1600');
    }
    else if ($(window).width() < 1200 && $(window).width() > 960) {
        console.log('960 - 1200');
    }
    else if ($(window).width() < 960 && $(window).width() > 640) {
        console.log('640 - 960');
    }
    else  if ($(window).width()< 640 & $(window).width() > 1) {
        // $('#menu-mobile').removeClass('uk-position-center');
        // $('#menu-mobile').addClass('uk-position-center-right');
    }
    else {
       // $('#menu-mobile').addClass('uk-position-center');
       //  $('#menu-mobile').removeClass('uk-position-center-right');
    }
});


jQuery(window).resize(function () {
    if (jQuery(window).width() > 1600) {
        console.log('1600 Up');
    }
    else if (jQuery(window).width() < 1600 && jQuery(window).width() > 1200) {
        console.log('1200 - 1600');
    }
    else if (jQuery(window).width() < 1200 && jQuery(window).width() > 960) {
        console.log('960 - 1200');
    }
    else if (jQuery(window).width() < 960 && jQuery(window).width() > 640) {
        console.log('640 - 960');
    }
    else  if (jQuery(window).width()< 640) {
        // jQuery('#menu-mobile').removeClass('uk-position-center');
        // jQuery('#menu-mobile').addClass('uk-position-center-right');
    }
    else {
        // jQuery('#menu-mobile').addClass('uk-position-center');
        // jQuery('#menu-mobile').removeClass('uk-position-center-right');
    }
});
paceOptions = {
  ajax: true, // disabled
  document: true, // disabled
  eventLag: true, // disabled

};