const hourEl = document.getElementById("hour-number");
const minuteEl = document.getElementById("minute-number");
var secondEl = document.getElementById("second-number");
const meridiemEl = document.getElementById("meridiem");
let hour, minute, second, meridiem, currentTime;

function currentTimeFunction() {
  currentTime = new Date();
  hour = currentTime.getHours();
  minute = currentTime.getMinutes();
  second = currentTime.getSeconds();
  if (second < 10) {
    second = "0" + second;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (hour > 12) {
    meridiemEl.innerHTML = "PM";
    hour = hour - 12;
  } else {
    meridiemEl.innerHTML = "AM";
  }
  if (hour < 10) {
    hour = "0" + hour;
  }

  hourEl.innerHTML = hour;
  minuteEl.innerHTML = minute;
  secondEl.innerHTML = second;
}

setInterval(currentTimeFunction, 1000);
