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
