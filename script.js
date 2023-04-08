`use strict`;

// Global Variables
const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

// Game Start
$(document).keypress(function () {
  if (!started) {
    $("#title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

// Next Sequence
function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#title").text("Level: " + level);

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);
}

// User Clicks
$(".btn").click(function () {
  const userChosenColor = $(this).attr("id");
  playSound(userChosenColor);
  animatePress(userChosenColor);
});

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

// Play Sound
function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// Game Start Over
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
