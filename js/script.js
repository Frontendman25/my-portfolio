$(function(){
	var navA = $('.nav').find('a');
	navA.on('click', function(e){
		e.preventDefault();

		var selector = $(this).attr('href');
		var h = $(selector);

		$('html, body').animate({
			scrollTop: h.offset().top - 10
		}, 300);
	});
});