$(function(){

    $('.header__burger, .menu__link').on('click', function() {
        $('.header__burger, .menu__list, .header').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.header, .hero, .footer').on('click','a', function (event) {
		event.preventDefault(); //опустошим стандартную обработку
		var id  = $(this).attr('href'), //заберем айдишник блока с параметром URL
			top = $(id).offset().top; //определим высоту от начала страницы до якоря
	$('body,html').animate({scrollTop: top}, 1000); //сделаем прокрутку за 1 с
	});

    var mixer = mixitup('.portfolio__content');
});