//document.getElementsByClassName(".btn").addEventListener("click", function() {
  //  alert(+ );
//});




let buttonColors = ["red", "blue", "green" , "yellow"];

let gamePattern =[];
let userChosenColor = [];
let userClickedPattern = [];
  
    

function nextSequence() {
    let randomNumber= Math.floor(Math.random() * buttonColors.length);
    let randomChooseColor = buttonColors[randomNumber];
    gamePattern.push(randomChooseColor);

    $("#" + randomChooseColor).fadeOut(100).fadeIn(100);   

    var audio = new Audio ("sounds/" + randomChooseColor + ".mp3" );
    audio.play();  

 // $("#" + randomChooseColor).on("click", function() {
  //$("." + randomChooseColor).fadeOut(100).fadeIn(100);
  //document.addEventListener("keydown" , function (){

  }
  nextSequence();

 let userChosenColor = $(".btn").on("click", function () {
    $("this").attr("id");
 }) 





