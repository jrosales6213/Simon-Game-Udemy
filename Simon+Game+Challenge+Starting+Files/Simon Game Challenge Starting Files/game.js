
//List of the variables//

var buttonColours = ["red", "blue", "green", "yellow"]; 

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;


// this function starts the game when you press a key.//
$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


//this function detects what button was clicked from buttonColors arrrays and then
// stores it into the userChosenColor array. It also plays the sound and animation the the button its assinged to.
// it also checks the last index in  the pattern of he userClickedPatter

$(".btn").click(function(){

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

// This function checks if the gamePatter and UserClicked patter match. If they do it will call the nextSequence function. if not it will play the "wrong" sound. and start over. 
function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}
// This function will pick a random index in the array and store it into the un

function nextSequence() {
  userClickedPattern = [];
  level++; // increments the levels
  $("#level-title").text("Level " + level);// in the html document it gets the h1 level-title and record level. the level ++ will increment it everytime. 

  var randomNumber = Math.floor(Math.random() * 4);// picks random number
  var randomChosenColour = buttonColours[randomNumber]; // picks random index in array
  gamePattern.push(randomChosenColour); // stores gamePattern into an empty array called agmePattern

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);// animation for the ramdom picked button
  playSound(randomChosenColour);//sound for the random picked button
}
// this funciton animates the button that is pressed. it is called in line 33 and taked in the userChosen color. the userColor is only holds a name in the function. you can Name it
//What ever you like. 
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
// plays sound. it called in the nextSequence(); line 71 
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
// starts the game over. 
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
