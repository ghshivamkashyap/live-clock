function updateClock() {
  let id = document.getElementById("clock-container");
  let date = new Date();
  let hours = date.getHours().toString().padStart(2, 0);
  let minutes = date.getMinutes().toString().padStart(2, 0);
  let seconds = date.getSeconds().toString().padStart(2, 0);
  let amPm;
  if (hours > 12) {
    amPm = "PM";
  } else {
    amPm = "AM";
  }

  id.textContent = hours < 12 ? `${hours}:${minutes}:${seconds} ${amPm}` :  `${hours-12}:${minutes}:${seconds} ${amPm}`;
    //  id.textContent = hours < 12 ? `${hours}:${minutes}:${seconds} ${amPm}` :  `${hours}:${minutes}:${seconds} ${amPm}`;

}

setTimeout(() => {
  updateClock();
}, 1000);
setInterval(() => {
  updateClock();
}, 1000);
