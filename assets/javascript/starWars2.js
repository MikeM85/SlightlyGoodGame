$(document).ready(function(){
  var hp = 0;
  var attack = 0;
  var counterAttack = 0;
  var char1Count = true;

  // var char2Count = 0;
  // var char3Count = 0;
  // var char4Count = 0;


  // When character 1 is clicked other moves to enemy box

  $(".character").on("click",function(){
    console.log("click" + "character");
  
      // if (char1Count === true) {
          
      //     char1Count === false;
      //     console.log(char1Count);
      $('chewbacca').appendTo('.available-to-attack-section').css({'height':'150px'});
      $('stromTrooper').appendTo('.available-to-attack-section').css({'height':'150px'});
      $('pilot').appendTo('.available-to-attack-section').css({'height':'150px'});
  
      // }
      

      // else if (char1Count === flase) {
      //     $('chewbacca').appendTo('#defender');
      // }
    
      
    
  });
  
  
// When character 2 is clicked other moves to enemy box
$("chewbacca").on("click",function(){
  console.log("click" + "chewbacca");
  if (char1Count === true) {
      char1Count === false;

  $('ZamWesell').appendTo('.available-to-attack-section').css({'height':'150px'});
  $('stromTrooper').appendTo('.available-to-attack-section').css({'height':'150px'});
  $('pilot').appendTo('.available-to-attack-section').css({'height':'150px'});

  // $('stromTrooper').on('click', function(){
  //     $('chewbacca').append('.defender');
  // });
}   
else if (char1Count === flase) {
  $('chewbacca').appendTo('#defender');
}
});


if (char1Count === true) {
  char1Count === false;

// When character 3 is clicked other moves to enemy box
$("stromTrooper").on("click",function(){
  console.log("click" + "stormTrooper");
  $('chewbacca').appendTo('.available-to-attack-section').css({'height':'150px'});
  $('ZamWesell').appendTo('.available-to-attack-section').css({'height':'150px'});
  $('pilot').appendTo('.available-to-attack-section').css({'height':'150px'});

});

}
else if (char1Count === flase) {
  $('pilot').appendTo('#defender');
}

if (char1Count === true) {
  char1Count === false;

// When character 4 is clicked other moves to enemy box
$("pilot").on("click",function(){
  console.log("click" + "pilot");
  $('chewbacca').appendTo('.available-to-attack-section').css({'height':'150px'});
  $('stromTrooper').appendTo('.available-to-attack-section').css({'height':'150px'});
  $('ZamWesell').appendTo('.available-to-attack-section').css({'height':'150px'});

});

}
else if (char1Count === flase) {
  $('ZamWesell').appendTo('#defender');
}

});

