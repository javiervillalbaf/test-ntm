let arrow = document.getElementsByClassName("arrow");
let deviceDown = document.getElementById("deviceDown");
let btn = document.getElementById("btn");
let circleOne = document.getElementById("circleOne");
let circleTwo = document.getElementById("circleTwo");

btn.addEventListener("click", () => {
  console.log("click");
  deviceDown.classList.toggle("inactive");
  deviceDown.classList.toggle("device-down");
  btn.classList.toggle("active");
  circleOne.classList.toggle("disable");
  circleTwo.classList.toggle("disable");
});
