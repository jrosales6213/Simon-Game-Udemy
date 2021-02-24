let level = [0];



let buttonColors = ["red", "blue", "green" , "yellow"];
let gamePattern =[];
let userClickedPattern = [];
  
// detects the button clicked and logs it into the userClickedPattern Array  
$(".btn").click( function () {
   let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playSound(userChosenColor);
     
}) 


//This function creates a random color and then pushed into gamePattern empyty array. 
function nextSequence() {
    let randomNumber= Math.floor(Math.random() * buttonColors.length);
    let randomChooseColor = buttonColors[randomNumber];
    gamePattern.push(randomChooseColor);

    $("#" + randomChooseColor).fadeOut(100).fadeIn(100);   

    var audio = new Audio ("sounds/" + randomChooseColor + ".mp3" );
    audio.play();  
  }
// funciton to play sound when clicked 

  function playSound(name) {
   $("#" + name).fadeOut(100).fadeIn(100); 
   var color = new Audio ("sounds/" + name + ".mp3" );
   color.play();
     
 }
 

  

  nextSequence();

