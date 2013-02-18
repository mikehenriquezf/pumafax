<?php
	// Set Global Variables
	global $mysqli;

	// Database Params
	define('DB_HOST_REMOTE', 	'127.0.0.1');
	define('DB_NAME', 			'pumafax');
	define('DB_USERNAME', 		'root');
	define('DB_PASSWORD', 		'root');
	define('DB_TABLE',			'users');

	$mysqli = new mysqli(DB_HOST_REMOTE, DB_USERNAME, DB_PASSWORD, DB_NAME); //init the mysqli conn.

	if (mysqli_connect_errno()) {
	    printf("Connect failed: %s\n", mysqli_connect_error());
	    exit();
	}
?>