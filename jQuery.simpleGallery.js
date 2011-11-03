/*
*   jQuery.simpleGallery
*   ----------------------
*   version: 2.0
*   date: 7/15/11
*
*   Copyright (c) 2011 Vinicius Xaxá

*   Licensed under the Apache License 2.0
*
*/
(function ($) {
	$.fn.simpleGallery = function () {
		var images = $(this).children('img');
		var description = $(this).find('p');
		images.hide();
		$(images[0]).addClass('show').show();
		var current_image = 0;
		var last_image = images.length - 1;
		
		set_description = function(new_description){
			if(new_description != "" && typeof new_description != "undefined") {
				$(description).show();
				$(description).html(new_description);
			}else{
				$(description).hide();
			}
		}
		set_description($(images[0]).attr('title'));
		
		return {
			images: images,
			description: description,
			
			next: function(){
				$(images[current_image]).hide();
				current_image == last_image ? current_image = 0 : current_image++;
				$(images[current_image]).show();
				new_description = $(images[current_image]).attr('title');
				set_description(new_description);

			},
			previous: function(){
				$(images[current_image]).hide();
				current_image == 0 ? current_image = last_image : current_image--;
				$(images[current_image]).show();
				new_description = $(images[current_image]).attr('title');
				set_description(new_description);
			},
			current_image: function(){
				return images[current_image];
			}
		}
  };
})(jQuery);