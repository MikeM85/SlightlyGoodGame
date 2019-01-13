$(document).ready(function(){
    var hp = 0;
    var attack = 0;
    var counterAttack = 0;
    var char1Count = true;

    // var char2Count = 0;
    // var char3Count = 0;
    // var char4Count = 0;


    // When character 1 is clicked other moves to enemy box
  
    $("#char1").on("click",function(){

        if (char1Count === true) {
            
            char1Count === false;
            console.log(char1Count);
        $('#char2').appendTo('.enemies').css({'height':'150px'});
        $('#char3').appendTo('.enemies').css({'height':'150px'});
        $('#char4').appendTo('.enemies').css({'height':'150px'});

        }

        else if (char1Count === flase) {
            $('#char2').appendTo('#defender');
        }

    });
    
    
// When character 2 is clicked other moves to enemy box
$("#char2").on("click",function(){

    if (char1Count === true) {
        char1Count === false;

    $('#char1').appendTo('.enemies').css({'height':'150px'});
    $('#char3').appendTo('.enemies').css({'height':'150px'});
    $('#char4').appendTo('.enemies').css({'height':'150px'});

    // $('#char3').on('click', function(){
    //     $('#char2').append('.defender');
    // });
}   
else if (char1Count === flase) {
    $('#char2').appendTo('#defender');
}
});


if (char1Count === true) {
    char1Count === false;

// When character 3 is clicked other moves to enemy box
$("#char3").on("click",function(){

    $('#char2').appendTo('.enemies').css({'height':'150px'});
    $('#char1').appendTo('.enemies').css({'height':'150px'});
    $('#char4').appendTo('.enemies').css({'height':'150px'});

});

}
else if (char1Count === flase) {
    $('#char4').appendTo('#defender');
}

if (char1Count === true) {
    char1Count === false;

// When character 4 is clicked other moves to enemy box
$("#char4").on("click",function(){

    $('#char2').appendTo('.enemies').css({'height':'150px'});
    $('#char3').appendTo('.enemies').css({'height':'150px'});
    $('#char1').appendTo('.enemies').css({'height':'150px'});

});

}
else if (char1Count === flase) {
    $('#char1').appendTo('#defender');
}

});

