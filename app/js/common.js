$(document).ready(function(){

	//mob menu
	$('.menu-bar').on('click', function(){
		$('.header').toggleClass('open-menu');
		$('.header-nav ul').slideToggle();
	});

	$('.person-details div').on('click', function(e){
		e.preventDefault();
		var target = $(e.target);
		if(target.is("a"))
			$(this).find('input').toggleClass('input-open');
	});

	$('.lesson-block__wrap span div').on('click', function(){
		console.log('ds');
		$(this).find('ul').toggleClass('ul-open');
	});

});