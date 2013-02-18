<?php
	require('config.php');
	/* check connection */

	// Get user's Facebook values

	$fb_id = mysql_real_escape_string($_POST["fbid"]);
	$fb_firstname = mysql_real_escape_string($_POST["firstname"]);
	$fb_lastname = mysql_real_escape_string($_POST["lastname"]);
	$fb_birthday = mysql_real_escape_string($_POST["birthday"]);
	$fb_email = mysql_real_escape_string($_POST["email"]);
	$fb_gender = mysql_real_escape_string($_POST["gender"]);
	
    
	// if (!$mysqli->query($insert_user_query)) {
	//     echo "INSERT failed: (" . $mysqli->errno . ") " . $mysqli->error;
	// }

	// Check if user exists in the DB

	$check_user_query = "SELECT * FROM " . DB_TABLE . " WHERE fb_id = '" . $fb_id . "'";

	$check_user = $mysqli->query($check_user_query);

	if($check_user->num_rows > 0 ){
		
		echo 1;

	}else{
		
		// Create user into the DB
		$insert_user_query = "INSERT INTO " . DB_TABLE . " (fb_id, fb_firstname, fb_lastname, fb_birthday, fb_email, fb_gender) VALUES ('" . $fb_id . "', '" . $fb_firstname . "', '" . $fb_lastname . "', '" . $fb_birthday . "', '" . $fb_email . "', '$fb_gender')";
		$insert_user = $mysqli->query($insert_user_query);
		if($insert_user){
			echo 0;
		}
	
	}

?>