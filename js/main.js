$(document).ready(function () {
	var userStatus;
	var fbid, firstname, lastname, birthday, email, gender;
	 
	$('#comenzar').live('click', function (){
		
	});



});

function init(status){
	if(status === 'logged'){
		FB.api('/me', function(response) {
        	fbid = response.id;
        	firstname = response.first_name;
        	lastname = response.last_name;
        	birthday = response.birthday;
        	email = response.email;
        	gender = response.gender;
        	console.log(response);
        	validateUser();
    	});
	}
}

function validateUser(){
	$.ajax({
	    type: "POST",
	    url: "includes/controller.php",
	    data: { fbid: fbid, firstname: firstname, lastname: lastname, birthday: birthday, email: email, gender: gender }
	}).done(function( msg ) {
	    if(msg == 1){
	    	$.ajax({
				type: "POST",
				dataType: "html",
				url: "includes/landingpage.php",
				data: { user : null }
			}).done(function(mensaje){
				$('#wrapper').html(mensaje);
			});

	    }else{

	    }
	});
}