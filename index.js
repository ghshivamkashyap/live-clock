function updateClock() {
  let id = document.getElementById("clock-container");
  let date = new Date();
  let hours = date.getHours().toString().padStart(2, 0);
  let minutes = date.getMinutes().toString().padStart(2, 0);
  let seconds = date.getSeconds().toString().padStart(2, 0);
  id.textContent = `${hours}:${minutes}:${seconds}`;
}

// setTimeout(() => {
//   updateClock();
// }, 1000);
setInterval(() => {
  updateClock();
}, 1000);
