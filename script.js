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
    started = true;
  }
});

// Game Start Over
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
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
