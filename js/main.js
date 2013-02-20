$(document).ready(function () {
	var userStatus;
	var fbid, firstname, lastname, birthday, email, gender;

	SI.Files.stylizeAll();
	 
	$('#comenzar').live('click', function (){
		$('#wrapper').html('');
		$('#wrapper').css('background-image', 'url(img/main_background.jpg)');
		loadWelcomePage();
	});

	$('#btncontinuar').live('click', function (){
		$('#wrapper').html('');
		loadReglas();
	});

	$('#registrar').live('click', function (){
		$('#wrapper').html('');
		loadParticipa();
	});

	// IMAGE UPLOAD
	$('#photoimg').live('change', function() { 
		$("#preview").html('');
		$("#preview").html('<img src="loader.gif" alt="Uploading...."/>');
		$("#imageform").ajaxForm({
			target: '#preview'
			}).submit();
	});

	// NAVIGATION BEHAVIOR

	$('.obj1').live('click', function (){
		$('#wrapper').html('');
		loadParticipa();
	});

	$('.obj2').live('click', function (){
		$('#wrapper').html('');
		loadCuenta();
	});

	$('.obj3').live('click', function (){
		$('#wrapper').html('');
		loadReglas();
		
	});

	$('.obj4').live('click', function (){
		$('#wrapper').html('');
		loadCalendario();
		
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
        	validateUser();
    	});
	}
}


// Funcion validar si un usuario es nuevo

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
	    	
			$.ajax({
				type: "POST",
				dataType: "html",
				url: "includes/participa.php",
				data: { user : null }
			}).done(function(participa2){
				$('#wrapper').css('background-image', 'url(img/main_background.jpg)');
				$('#nav').show();
				loadParticipa();
			});
	    }
	});
}

// Funcion para mostrar loadReglas

function loadReglas(){
	$.ajax({
		type: "POST",
		dataType: "html",
		url: "includes/reglas.php",
		data: { user : null }
	}).done(function(reglas){
		$('#wrapper').append(reglas);
	});
}

function loadWelcomePage(){
	$.ajax({
		type: "POST",
		dataType: "html",
		url: "includes/welcome.php",
		data: { user : null }
	}).done(function(welcome){
		$('#wrapper').append(welcome);
	});	
}

function loadParticipa(){
	$.ajax({
		type: "POST",
		dataType: "html",
		url: "includes/participa.php",
		data: { user : null }
	}).done(function(participa){
		$('#nav').show();
		$('#wrapper').append(participa);
	});	
}

function loadCuenta(){
	$.ajax({
		type: "POST",
		dataType: "html",
		url: "includes/micuenta.php",
		data: { user : null }
	}).done(function(micuenta){
		$('#wrapper').append(micuenta);
	});	
}