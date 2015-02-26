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

});
