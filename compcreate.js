$(document).ready(function(){
	$('#company_create').submit(function(event) {
		event.preventDefault();
		
		if($('input[name=co_password]').val() != $('input[name=co_password2]').val()){
			alert('Passwords are not the same.');
		}
		
		else
		{
		
		var data = $('form').serialize();
		$.post('https://flip2.engr.oregonstate.edu:17941/company_create', data)
		
		.done(function(){
			alert('Company Account Created');
			window.location.replace('http://web.engr.oregonstate.edu/~emersoel/table.html');
		})
		
		.fail(function() {
			alert('Something went terribly wrong');
		})
		}
	});
});