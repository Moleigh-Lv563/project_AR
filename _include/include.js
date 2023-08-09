/*(function(d) {
	var config = {
		kitId: 'gah6iet',
		scriptTimeout: 3000,
		async: true
	},
		h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);
*/

$('.sp-button').click(function() {
	$('.bt-bar1').toggleClass('bt-bar1-on'),
	$('.bt-bar2').toggleClass('bt-bar2-on'),
	$('.bt-bar3').toggleClass('bt-bar3-on'),
	$('.nav-sp').toggleClass('open');
});

$(window).on('load', function(){
	$('.container').addClass('loaded').delay(0).queue(function(){
		$('.header').addClass('h-load').dequeue();
	});
});

var WinH = window.innerHeight,
    WinW = window.innerWidth;
$(function(){
	if ( WinW > 768 ) {
		$('.top-image').css('height', WinH - 146 + 143 + 'px')
	} else {
        $('.top-image').css('height', WinH - 62 + 'px')
    }
});

(function($) {
    $.fn.acs = function(options) {
 
        var elements = this;
        var defaults = {
            screenPos: 0.9,
            className: 'visible-y0op1'
        };
        var setting = $.extend(defaults, options);
 
        $(window).on('load scroll', function() {
            add_class_in_scrolling();
        });
 
        function add_class_in_scrolling() {
            var winScroll = $(window).scrollTop();
            var winHeight = $(window).height();
            var scrollPos = winScroll + (winHeight * setting.screenPos);
 
            if(elements.offset().top < scrollPos) {
                elements.addClass(setting.className);
            }
        }
    }
})(jQuery);