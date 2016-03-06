$(document).ready(function(){
  $('.bxslider').bxSlider({
  	mode: 'fade',
  	captions: true,
  	auto: true,
  	autoControls: true,
  	pause: 4000

  });
});
window.onload = function(){
	$(document).ready(function(){
		$('a.js-soft-scroll').bind("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 400);
			e.preventDefault();
		});
		return false;
	});
}
$(document).ready(function() {
    $(".pict_galery").fancybox({
    openEffect : 'elastic',
    closeEffect : 'elastic',
    speedOut : 10000,
    speedIn : 10000,
    helpers: {
     title : {
      type : 'inside'
     },
     overlay : {
      speedOut : 0
     }
    }
   });
   $('.fancybox-media')
    .attr('rel', 'media-gallery')
    .fancybox({
     
     openEffect : 'fade',
     closeEffect : 'elastic',
     prevEffect : 'none',
     nextEffect : 'none',

     arrows : false,
     helpers : {
      media : {},
      buttons : {}
     }
    });
  });
