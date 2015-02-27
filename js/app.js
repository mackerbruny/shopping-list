$(document).ready(function() {

	// use enter to add list items
	
	$('.enter-item').keyup(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			$('.add-button').click();
		};
	});	

	// Validate text box, then add value in text box to list, show list item
	
	$('.add-button').click(function() {
		if( $('input.enter-item').val().trim().length == 0 ) {
				// alert("put something here");
				$('#error').show();
				$('input.enter-item').val("");
		} else { 

		$('ul').append('<li class="item"><p>' + $('input.enter-item').val() + '</p><i class="fa fa-check-circle check-button"></i>');
		$('input.enter-item').val("");
		$('.item').show();
		$('#error').hide();

		};	
	
	});

	// Change li and p class when user clicks Done button and add uncheck button	

	$('ul').on('click', '.check-button', function() {
		$(this).closest('li').toggleClass('checked-item');
		$(this).closest('li').append('<i class="fa fa-check-circle uncheck"></i>');
		$(this).remove();
	});

	// Change checked li back to unchecked

	$('ul').on('click', '.uncheck', function() {
		$(this).closest('li').toggleClass('checked-item');
		$(this).closest('li').append('<i class="fa fa-check-circle check-button"></i>');
		$(this).remove();
	});

	// Edit items

	$(document).on("click", ".edit-list", function(){
	    $('.check-button').hide();
	    $('.uncheck').hide();
	    $('.input-wrapper').hide();
	    $('.new-list').hide();
	    $('ul').children().append('<i class="fa fa-minus-circle minus-button"></i>');
	    $('.edit-list').hide();
	    $('.done').show();
	});

	// Done editing items

	$(document).on("click", ".done", function(){
	    $('.check-button').show();
	    $('.uncheck').show();
	    $('.input-wrapper').show();
	    $('.new-list').show();
	    $('.minus-button').remove();
	    $('.edit-list').show();
	    $('.done').hide();
	});

	// Remove items from list

	$('ul').on('click', '.minus-button', function() {
		$(this).closest('li').remove();
	});

	//Clears all items on list

	$(document).on("click", ".new-list", function(){
	    $("ul").empty();
	    submissions = 0;
	});

});


