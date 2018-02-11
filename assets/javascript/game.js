// CRYSTAL COLLECTOR GAME - ADAM SPECKER

$(document).ready(function(){
var btnOneNum=0;
var btnTwoNum=0;
var btnThreeNum=0;
var btnFourNum=0;
var wins=0;
var losses=0;
var targetNum=0;
var currentNum=0;

    // resets random numbers and displays them with new score and w/l
    function reset(){
        btnOneNum=Math.floor(Math.random() * 12 + 1);
        btnTwoNum=Math.floor(Math.random() * 12 + 1);
        btnThreeNum=Math.floor(Math.random() * 12 + 1);
        btnFourNum=Math.floor(Math.random() * 12 + 1);
        
        
        targetNum=Math.floor(Math.random() * 101 + 19);;
        currentNum=0;
        $("#targetNumber").text(targetNum);
        $("#scoreBox").text(currentNum);
        $("#winLoss").text("Wins : "+wins+" || Losses: "+losses);
    }

    reset();


    // makes buttons wiggle when clicked
    // courtesy of  https://jsfiddle.net/macloo/g39k3h3e/

    function shake(thing) {
        var interval = 60;
        var distance = 10;
        var times = 4;
      
        for (var i = 0; i < (times + 1); i++) {
          $(thing).animate({
            left:
              (i % 2 == 0 ? distance : distance * -1)
          }, interval);
        }
        $(thing).animate({
          left: 0,
          top: 0
        }, interval);
      }

    // button click functionality
    $("#btnOne").click(function(){
        $(this).finish();
        shake(this);
        currentNum+=btnOneNum;
        $("#scoreBox").text(currentNum);
       
    });

    $("#btnTwo").click(function(){
        $(this).finish();
        shake(this);
        currentNum+=btnTwoNum;
        $("#scoreBox").text(currentNum);
       
    });

    $("#btnThree").click(function(){
        $(this).finish();
        shake(this);
        currentNum+=btnThreeNum;
        $("#scoreBox").text(currentNum);
       
    });

    $("#btnFour").click(function(){
        $(this).finish();
        shake(this);
        currentNum+=btnFourNum;
        $("#scoreBox").text(currentNum);      
       
    });

    $(".crystalBtn").click(function(){
   
        if (currentNum===targetNum){
            wins ++;
            Materialize.toast("You Win!", 3500);
            reset();
            
    
        }  else if (currentNum>targetNum){
            losses++;
            Materialize.toast("You lose. :(", 3500);
            reset();
    
        }  
    
    });

    
 });