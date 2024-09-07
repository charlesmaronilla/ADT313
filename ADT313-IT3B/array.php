<h1>ARRAY</h1>
<?php
  $cars = array("Volvo","BMW","Nissan");
  $cars = ["Volvo","BMW","Nissan"];

  //echo $cars[1];

  $userInformation = array(
    "firstname"=>"Charles",
    "lastname"=>"Maronilla",
    "role"=>"admin"
  );
  $userInformation["address"] = 'Valenzuela City'; 

  echo $userInformation['role'];
  //print all arrays
  print_r($userInformation);
  echo "<br/>";
  var_dump($userInformation);
  echo "</pre>";

  $user = array(
     "information"=> array(
        "firstname"=>"Charles",
        "lastname"=>"Maronilla",
     ),
     "roles"=>array(
        "instructor",
        "student"
     ),
     "address"=>array(
        "province"=>"Valenzuela",
        "municipality"=>"Punturin",
        "city"=>"New townsville"
     )
     );

     echo "<h1>".$user["address"]["province"]."</h1>";
     echo "<h2>".$user["roles"][1]."</h2>";
?>