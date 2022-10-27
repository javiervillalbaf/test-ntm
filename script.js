let arrow = document.getElementsByClassName("arrow");
let deviceDown = document.getElementById("deviceDown");
let btn = document.getElementById("btn");
let circleOne = document.getElementById("circleOne");
let circleTwo = document.getElementById("circleTwo");
let circleThree = document.getElementById("circleThree");
let circleFour = document.getElementById("circleFour");
let circleFive = document.getElementById("circleFive");
let circleSix = document.getElementById("circleSix");
let circleSeven = document.getElementById("circleSeven");
let containerOne = document.getElementById("containerOne");
let lineOne = document.getElementById("lineOne");
let lineTwo = document.getElementById("lineTwo");
let lineThree = document.getElementById("lineThree");
let lineFour = document.getElementById("lineFour");
let lineFive = document.getElementById("lineFive");
let lineSix = document.getElementById("lineSix");
let lineSeven = document.getElementById("lineSeven");

btn.addEventListener("click", () => {
  console.log("click");
  deviceDown.classList.toggle("inactive");
  deviceDown.classList.toggle("device-down");
  btn.classList.toggle("active");
  circleOne.classList.toggle("disable");
  circleTwo.classList.toggle("disable");
  circleThree.classList.toggle("disable");
  circleFour.classList.toggle("disable");
  circleFive.classList.toggle("disable");
  circleSix.classList.toggle("disable");
  circleSeven.classList.toggle("disable");
});
circleOne.addEventListener("click", () => {
  containerOne.classList.toggle("container-active");
  lineOne.classList.toggle("line-one-active");
});
circleTwo.addEventListener("click", () => {
  lineTwo.classList.toggle("line-two-active");
});
