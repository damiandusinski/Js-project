const times = document.querySelectorAll(".time");
const environments = document.querySelectorAll(".environment");
const btnStart = document.querySelector(".btn-start");
const modal = document.querySelector(".modal");
const container = document.querySelector(".container");
const btnCancel = document.querySelector(".btn-cancel");
const pMin = document.querySelector(".min");
const pSec = document.querySelector(".sec");
let timerFlag = false;
let pause;
let min = 9;
let sec = 10;

const addEvent = nodeList => {
  nodeList.forEach(item => {
    item.addEventListener("click", () => {
      nodeList.forEach(item => {
        item.classList.remove("active");
      });
      item.classList.add("active");
      if (nodeList === times) {
        min = item.dataset.min;
        sec = item.dataset.sec;
        pMin.textContent = min;
        pSec.textContent = sec;
      }
    });
  });
};
const restart = nodeList => {
  nodeList.forEach(item => {
    item.classList.remove("active");
  });
};

const timer = () => {
  sec--;
  if (sec <= 0) {
    min--;
    if (min <= 9) {
      min = "0" + min;
    }
    sec = 59;
  }

  if (sec <= 9) {
    sec = "0" + sec;
  }
  pMin.textContent = min;
  pSec.textContent = sec;
  console.log(min + ":" + sec);
};

addEvent(times);
addEvent(environments);

btnStart.addEventListener("click touchstart", e => {
  pause = setInterval(timer, 1000);
  modal.classList.add("active");
  container.classList.add("blur");
  timerFlag = true;
});
btnCancel.addEventListener("click touchstart", () => {
  modal.classList.remove("active");
  container.classList.remove("blur");
  clearInterval(pause);
  restart(times);
  restart(environments);
});

document.querySelector(".btn-pause").addEventListener("click", () => {
  if (timerFlag === true) {
    clearInterval(pause);
    timerFlag = false;
  } else {
    pause = setInterval(timer, 1000);
    timerFlag = true;
  }
});
