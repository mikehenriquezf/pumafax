<?php
session_start();
$fbId = $_SESSION['user_logged']['id'];
$path = "uploads/" . $fbId . "/";


  $valid_formats = array("jpg", "png", "gif", "bmp");
  if(isset($_POST) and $_SERVER['REQUEST_METHOD'] == "POST")
    {
      $name = $_FILES['photoimg']['name'];
      $size = $_FILES['photoimg']['size'];
      
      if(strlen($name))
        {
          list($txt, $ext) = explode(".", $name);
          if(in_array($ext,$valid_formats))
          {
          if($size<(1024*1024))
            {
              $actual_image_name = time().substr(str_replace(" ", "_", $txt), 5).".".$ext;
              $tmp = $_FILES['photoimg']['tmp_name'];
              if(move_uploaded_file($tmp, $path.$actual_image_name))
                {
                // mysql_query("UPDATE users SET profile_image='$actual_image_name' WHERE uid='$session_id'");
                  
                  // echo "<img src='uploads/".$fbId."/".$actual_image_name."'  class='preview'>";
                  echo "Gracias Por participar. Su recibo ha sido procesado. Si en serio enviaste un fax en el 2013, de seguro tienes hámbre.";
                }
              else
                echo "failed";
            }
            else
            echo "Image file size max 1 MB";          
            }
            else
            echo "Invalid file format.."; 
        }
        
      else
        echo "Please select image..!";
        
      exit;
    }
?>