$( document ).ready(function() {
 
    $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
	});

	$('#prog-popup').popup({
		transition: 'all 0.3s',
  		scrolllock: true 
	});

	$('#dev-popup').popup({
		transition: 'all 0.3s',
  		scrolllock: true 
	});

	$('#mobile-popup').popup({
		transition: 'all 0.3s',
  		scrolllock: true 
	});

	$('#music-popup').popup({
		transition: 'all 0.3s',
  		scrolllock: true 
	});

	$('#sr-popup').popup({
		transition: 'all 0.3s',
  		scrolllock: true 
	});
 
});