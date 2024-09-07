<?php
   echo "Conditional statements <br/>";
     
   $showVariable == true;
   $name = "Charles";
   $auth = false;
   if($showVariable == true){
      echo $name;
   }elseif($showVariable && $name == 'Charles' && $auth){
      echo "Hello" .$name;
   }elseif($showVariable && $name){
      echo 'Not Charles';
   }else{
      echo "Else statement";
   }
     
   $anotherVariable = ($showVariable == true)  ? $name : "short hand: else";
   echo $anotherVariable;
?>