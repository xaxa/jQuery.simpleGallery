/*
*   jQuery.simpleGallery
*   ----------------------
*   version: 1.0.0
*   date: 7/13/11
*
*   Copyright (c) 2011 Vinicius Xaxá
*   
*   
*   
*   Licensed under the Apache License 2.0
*
*/
(function ($) {
	$.fn.simpleGallery = function () {
		$(this).children('img').hide();
		$(this).children('img:first').addClass('show').show();
    };
    
	$.fn.showNext = function () {
		current_image = $(this).children('.show');
		current_image.removeClass('show').hide();
		if(current_image.next().length > 0) 
			current_image.next().addClass('show').show();
		else
			$(this).children('img:first').addClass('show').show();
    };

    $.fn.showPrevious = function () {
		current_image = $(this).children('.show');
		current_image.removeClass('show').hide();
		if(current_image.prev().length > 0) 
			current_image.prev().addClass('show').show();
		else
			$(this).children('img:last').addClass('show').show();
				
    };
})(jQuery);