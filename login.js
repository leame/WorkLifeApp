$(document).ready(function(){
	$('#login').submit(function(event) {
		event.preventDefault();
		
		var user_type;
		
		if($('input[name=username]').val().indexOf('@') == true){
			user_type = 'employee';
		}
		
		else
		{
			user_type = 'company';
		}
		
		var data = $('form').serialize();
		$.post('http://flip2.engr.oregonstate.edu:3909/login', data +'&user_type=' + user_type)
		
		.done(function(){
			window.location.replace('http://web.engr.oregonstate.edu/~leame/table.html');
		})
		
		.fail(function() {
			alert('Something went terribly wrong');
		})
		
	});
});