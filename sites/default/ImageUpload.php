<?php
/*
if($_FILES["userfile"]["error"] > 0) {
	echo  "Error: " . $_FILES["userfile"]["error"] . "<br />";
} else {
	$uploadDir = 'files/';
	$file = basename($_FILES['userfile']['name']);
	$uploadfile = $uploaddir . $file;

	if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
      	echo $uploadfile;
	} else {
      	echo "ERROR";
	}
}
*/
$target_path = "files/";

$target_path = $target_path . basename( $_FILES['userfile']['name']); 

if(move_uploaded_file($_FILES['userfile']['tmp_name'], $target_path)) {
      echo "The file ".  basename( $_FILES['userfile']['name']). 
          " has been uploaded";
} else{
      echo "There was an error uploading the file, please try again!";
}
?>
