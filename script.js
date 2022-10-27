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
let containerTopOne = document.getElementById("containerTopOne");
let containerTopTwo = document.getElementById("containerTopTwo");
let containerBotOne = document.getElementById("containerBotOne");
let containerBotTwo = document.getElementById("containerBotTwo");
let containerBotThree = document.getElementById("containerBotThree");
let containerBotFour = document.getElementById("containerBotFour");
let containerBotFive = document.getElementById("containerBotFive");
let lineOne = document.getElementById("lineOne");
let lineTwo = document.getElementById("lineTwo");
let lineThree = document.getElementById("lineThree");
let lineFour = document.getElementById("lineFour");
let lineFive = document.getElementById("lineFive");
let lineSix = document.getElementById("lineSix");
let lineSeven = document.getElementById("lineSeven");

btn.addEventListener("click", () => {
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
  containerTopOne.classList.toggle("container-active");
  lineOne.classList.toggle("line-one-active");
});
circleTwo.addEventListener("click", () => {
  containerTopTwo.classList.toggle("container-active");
  lineTwo.classList.toggle("line-two-active");
});
circleThree.addEventListener("click", () => {
  containerBotOne.classList.toggle("container-active");
  lineThree.classList.toggle("line-three-active");
});
circleFour.addEventListener("click", () => {
  containerBotTwo.classList.toggle("container-active");
  lineFour.classList.toggle("line-four-active");
});
circleFive.addEventListener("click", () => {
  containerBotThree.classList.toggle("container-active");
  lineFive.classList.toggle("line-five-active");
});
circleSix.addEventListener("click", () => {
  containerBotFour.classList.toggle("container-active");
  lineSix.classList.toggle("line-six-active");
});
circleSeven.addEventListener("click", () => {
  containerBotFive.classList.toggle("container-active");
  lineSeven.classList.toggle("line-seven-active");
});
