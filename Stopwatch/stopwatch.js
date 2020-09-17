let timer = document.querySelector(".timer"),
  start = document.querySelector(".start"),
  pause = document.querySelector(".pause"),
  resume = document.querySelector(".resume"),
  reset = document.querySelector(".reset");

let ms = 0,
  second = 0,
  minute = 0,
  hour = 0;

let time;


let run = () => {
  timer.textContent = (hour < 10 ? "0" + hour : hour) + ":" + (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second) + ":" + (ms < 10 ? "0" + ms : ms);
  ms++;

  if (ms == 100) {
    ms = 0;
    second++
  } else if (second == 60) {
    second = 0;
    minute++
  } else if (minute == 60) {
    minute = 0;
    hour++
  }
}

start.addEventListener("click", () => {
  if (!time) {
    time = setInterval(run, 10);
  }
});

pause.addEventListener("click", () => {
  clearInterval(time);
  time = false;
});

reset.addEventListener("click", () => {
  clearInterval(time);
  time = false;
  ms = 0;
  second = 0;
  minute = 0;
  hour = 0;
  timer.textContent = (hour < 10 ? "0" + hour : hour) + ":" + (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second) + ":" + (ms < 10 ? "0" + ms : ms);
});

resume.addEventListener("click", () => {
  if (!time) {
    time = setInterval(run, 10);
  }
})