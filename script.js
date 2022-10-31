let arrow = document.getElementsByClassName("arrow");
let deviceDown = document.getElementById("deviceDown");
let btn = document.getElementById("btn");
let allContainer = document.getElementById("allContainer");
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

function marginBot() {
  if (allContainer.classList.contains("all-container-active") == false) {
    allContainer.classList.toggle("all-container-active");
  } else if (
    containerTopOne.classList.contains("container-active") == false &&
    containerTopTwo.classList.contains("container-active") == false &&
    containerBotOne.classList.contains("container-active") == false &&
    containerBotTwo.classList.contains("container-active") == false &&
    containerBotThree.classList.contains("container-active") == false &&
    containerBotFour.classList.contains("container-active") == false &&
    containerBotFive.classList.contains("container-active") == false
  ) {
    allContainer.classList.toggle("all-container-active");
  }
}

function closeTexts() {
  if (
    containerTopOne.classList.contains("container-active") ||
    lineOne.classList.contains("line-one-active")
  ) {
    containerTopOne.classList.toggle("container-active");
    lineOne.classList.toggle("line-one-active");
  }
  if (
    containerTopTwo.classList.contains("container-active") ||
    lineTwo.classList.contains("line-two-active")
  ) {
    containerTopTwo.classList.toggle("container-active");
    lineTwo.classList.toggle("line-two-active");
  }
  if (
    containerBotOne.classList.contains("container-active") ||
    lineThree.classList.contains("line-three-active")
  ) {
    containerBotOne.classList.toggle("container-active");
    lineThree.classList.toggle("line-three-active");
  }
  if (
    containerBotTwo.classList.contains("container-active") ||
    lineFour.classList.contains("line-four-active")
  ) {
    containerBotTwo.classList.toggle("container-active");
    lineFour.classList.toggle("line-four-active");
  }
  if (
    containerBotThree.classList.contains("container-active") ||
    lineFive.classList.contains("line-five-active")
  ) {
    containerBotThree.classList.toggle("container-active");
    lineFive.classList.toggle("line-five-active");
  }
  if (
    containerBotFour.classList.contains("container-active") ||
    lineSix.classList.contains("line-six-active")
  ) {
    containerBotFour.classList.toggle("container-active");
    lineSix.classList.toggle("line-six-active");
  }
  if (
    containerBotFive.classList.contains("container-active") ||
    lineSeven.classList.contains("line-seven-active")
  ) {
    containerBotFive.classList.toggle("container-active");
    lineSeven.classList.toggle("line-seven-active");
  }
}

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
  closeTexts();
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
  marginBot();
});
circleFive.addEventListener("click", () => {
  containerBotThree.classList.toggle("container-active");
  lineFive.classList.toggle("line-five-active");
  marginBot();
});
circleSix.addEventListener("click", () => {
  containerBotFour.classList.toggle("container-active");
  lineSix.classList.toggle("line-six-active");
  marginBot();
});
circleSeven.addEventListener("click", () => {
  containerBotFive.classList.toggle("container-active");
  lineSeven.classList.toggle("line-seven-active");
  marginBot();
});

const mobbileBP = matchMedia("(max-width:768px)");
const changeMobile = (mql) => {
  if (mql.matches) {
    closeTexts();
    circleOne.addEventListener("click", () => {
      if (
        containerTopTwo.classList.contains("container-active") ||
        lineTwo.classList.contains("line-two-active")
      ) {
        containerTopTwo.classList.toggle("container-active");
        lineTwo.classList.toggle("line-two-active");
      }
      if (
        containerBotOne.classList.contains("container-active") ||
        lineThree.classList.contains("line-three-active")
      ) {
        containerBotOne.classList.toggle("container-active");
        lineThree.classList.toggle("line-three-active");
      }
      if (
        containerBotTwo.classList.contains("container-active") ||
        lineFour.classList.contains("line-four-active")
      ) {
        containerBotTwo.classList.toggle("container-active");
        lineFour.classList.toggle("line-four-active");
      }
      if (
        containerBotThree.classList.contains("container-active") ||
        lineFive.classList.contains("line-five-active")
      ) {
        containerBotThree.classList.toggle("container-active");
        lineFive.classList.toggle("line-five-active");
      }
      if (
        containerBotFour.classList.contains("container-active") ||
        lineSix.classList.contains("line-six-active")
      ) {
        containerBotFour.classList.toggle("container-active");
        lineSix.classList.toggle("line-six-active");
      }
      if (
        containerBotFive.classList.contains("container-active") ||
        lineSeven.classList.contains("line-seven-active")
      ) {
        containerBotFive.classList.toggle("container-active");
        lineSeven.classList.toggle("line-seven-active");
      }
    });
    circleTwo.addEventListener("click", () => {
      if (
        containerTopOne.classList.contains("container-active") ||
        lineOne.classList.contains("line-one-active")
      ) {
        containerTopOne.classList.toggle("container-active");
        lineOne.classList.toggle("line-one-active");
      }
      if (
        containerBotOne.classList.contains("container-active") ||
        lineThree.classList.contains("line-three-active")
      ) {
        containerBotOne.classList.toggle("container-active");
        lineThree.classList.toggle("line-three-active");
      }
      if (
        containerBotTwo.classList.contains("container-active") ||
        lineFour.classList.contains("line-four-active")
      ) {
        containerBotTwo.classList.toggle("container-active");
        lineFour.classList.toggle("line-four-active");
      }
      if (
        containerBotThree.classList.contains("container-active") ||
        lineFive.classList.contains("line-five-active")
      ) {
        containerBotThree.classList.toggle("container-active");
        lineFive.classList.toggle("line-five-active");
      }
      if (
        containerBotFour.classList.contains("container-active") ||
        lineSix.classList.contains("line-six-active")
      ) {
        containerBotFour.classList.toggle("container-active");
        lineSix.classList.toggle("line-six-active");
      }
      if (
        containerBotFive.classList.contains("container-active") ||
        lineSeven.classList.contains("line-seven-active")
      ) {
        containerBotFive.classList.toggle("container-active");
        lineSeven.classList.toggle("line-seven-active");
      }
    });
    circleThree.addEventListener("click", () => {
      if (
        containerTopTwo.classList.contains("container-active") ||
        lineTwo.classList.contains("line-two-active")
      ) {
        containerTopTwo.classList.toggle("container-active");
        lineTwo.classList.toggle("line-two-active");
      }
      if (
        containerTopOne.classList.contains("container-active") ||
        lineOne.classList.contains("line-one-active")
      ) {
        containerTopOne.classList.toggle("container-active");
        lineOne.classList.toggle("line-one-active");
      }
      if (
        containerBotTwo.classList.contains("container-active") ||
        lineFour.classList.contains("line-four-active")
      ) {
        containerBotTwo.classList.toggle("container-active");
        lineFour.classList.toggle("line-four-active");
      }
      if (
        containerBotThree.classList.contains("container-active") ||
        lineFive.classList.contains("line-five-active")
      ) {
        containerBotThree.classList.toggle("container-active");
        lineFive.classList.toggle("line-five-active");
      }
      if (
        containerBotFour.classList.contains("container-active") ||
        lineSix.classList.contains("line-six-active")
      ) {
        containerBotFour.classList.toggle("container-active");
        lineSix.classList.toggle("line-six-active");
      }
      if (
        containerBotFive.classList.contains("container-active") ||
        lineSeven.classList.contains("line-seven-active")
      ) {
        containerBotFive.classList.toggle("container-active");
        lineSeven.classList.toggle("line-seven-active");
      }
    });
    circleFour.addEventListener("click", () => {
      if (
        containerTopTwo.classList.contains("container-active") ||
        lineTwo.classList.contains("line-two-active")
      ) {
        containerTopTwo.classList.toggle("container-active");
        lineTwo.classList.toggle("line-two-active");
      }
      if (
        containerTopOne.classList.contains("container-active") ||
        lineOne.classList.contains("line-one-active")
      ) {
        containerTopOne.classList.toggle("container-active");
        lineOne.classList.toggle("line-one-active");
      }
      if (
        containerBotOne.classList.contains("container-active") ||
        lineThree.classList.contains("line-three-active")
      ) {
        containerBotOne.classList.toggle("container-active");
        lineThree.classList.toggle("line-three-active");
      }
      if (
        containerBotThree.classList.contains("container-active") ||
        lineFive.classList.contains("line-five-active")
      ) {
        containerBotThree.classList.toggle("container-active");
        lineFive.classList.toggle("line-five-active");
      }
      if (
        containerBotFour.classList.contains("container-active") ||
        lineSix.classList.contains("line-six-active")
      ) {
        containerBotFour.classList.toggle("container-active");
        lineSix.classList.toggle("line-six-active");
      }
      if (
        containerBotFive.classList.contains("container-active") ||
        lineSeven.classList.contains("line-seven-active")
      ) {
        containerBotFive.classList.toggle("container-active");
        lineSeven.classList.toggle("line-seven-active");
      }
    });
    circleFive.addEventListener("click", () => {
      if (
        containerTopTwo.classList.contains("container-active") ||
        lineTwo.classList.contains("line-two-active")
      ) {
        containerTopTwo.classList.toggle("container-active");
        lineTwo.classList.toggle("line-two-active");
      }
      if (
        containerTopOne.classList.contains("container-active") ||
        lineOne.classList.contains("line-one-active")
      ) {
        containerTopOne.classList.toggle("container-active");
        lineOne.classList.toggle("line-one-active");
      }
      if (
        containerBotOne.classList.contains("container-active") ||
        lineThree.classList.contains("line-three-active")
      ) {
        containerBotOne.classList.toggle("container-active");
        lineThree.classList.toggle("line-three-active");
      }
      if (
        containerBotTwo.classList.contains("container-active") ||
        lineFour.classList.contains("line-four-active")
      ) {
        containerBotTwo.classList.toggle("container-active");
        lineFour.classList.toggle("line-four-active");
      }
      if (
        containerBotFour.classList.contains("container-active") ||
        lineSix.classList.contains("line-six-active")
      ) {
        containerBotFour.classList.toggle("container-active");
        lineSix.classList.toggle("line-six-active");
      }
      if (
        containerBotFive.classList.contains("container-active") ||
        lineSeven.classList.contains("line-seven-active")
      ) {
        containerBotFive.classList.toggle("container-active");
        lineSeven.classList.toggle("line-seven-active");
      }
    });
    circleSix.addEventListener("click", () => {
      if (
        containerTopTwo.classList.contains("container-active") ||
        lineTwo.classList.contains("line-two-active")
      ) {
        containerTopTwo.classList.toggle("container-active");
        lineTwo.classList.toggle("line-two-active");
      }
      if (
        containerTopOne.classList.contains("container-active") ||
        lineOne.classList.contains("line-one-active")
      ) {
        containerTopOne.classList.toggle("container-active");
        lineOne.classList.toggle("line-one-active");
      }
      if (
        containerBotOne.classList.contains("container-active") ||
        lineThree.classList.contains("line-three-active")
      ) {
        containerBotOne.classList.toggle("container-active");
        lineThree.classList.toggle("line-three-active");
      }
      if (
        containerBotTwo.classList.contains("container-active") ||
        lineFour.classList.contains("line-four-active")
      ) {
        containerBotTwo.classList.toggle("container-active");
        lineFour.classList.toggle("line-four-active");
      }
      if (
        containerBotThree.classList.contains("container-active") ||
        lineFive.classList.contains("line-five-active")
      ) {
        containerBotThree.classList.toggle("container-active");
        lineFive.classList.toggle("line-five-active");
      }
      if (
        containerBotFive.classList.contains("container-active") ||
        lineSeven.classList.contains("line-seven-active")
      ) {
        containerBotFive.classList.toggle("container-active");
        lineSeven.classList.toggle("line-seven-active");
      }
    });
    circleSeven.addEventListener("click", () => {
      if (
        containerTopTwo.classList.contains("container-active") ||
        lineTwo.classList.contains("line-two-active")
      ) {
        containerTopTwo.classList.toggle("container-active");
        lineTwo.classList.toggle("line-two-active");
      }
      if (
        containerTopOne.classList.contains("container-active") ||
        lineOne.classList.contains("line-one-active")
      ) {
        containerTopOne.classList.toggle("container-active");
        lineOne.classList.toggle("line-one-active");
      }
      if (
        containerBotOne.classList.contains("container-active") ||
        lineThree.classList.contains("line-three-active")
      ) {
        containerBotOne.classList.toggle("container-active");
        lineThree.classList.toggle("line-three-active");
      }
      if (
        containerBotTwo.classList.contains("container-active") ||
        lineFour.classList.contains("line-four-active")
      ) {
        containerBotTwo.classList.toggle("container-active");
        lineFour.classList.toggle("line-four-active");
      }
      if (
        containerBotThree.classList.contains("container-active") ||
        lineFive.classList.contains("line-five-active")
      ) {
        containerBotThree.classList.toggle("container-active");
        lineFive.classList.toggle("line-five-active");
      }
      if (
        containerBotFour.classList.contains("container-active") ||
        lineSix.classList.contains("line-six-active")
      ) {
        containerBotFour.classList.toggle("container-active");
        lineSix.classList.toggle("line-six-active");
      }
    });
  }
};
mobbileBP.addEventListener("change", changeMobile);
changeMobile(mobbileBP);
