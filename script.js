const fullScr = document.querySelector(".fullScr");
const fullScrBtn = document.querySelector(".fullScrBtn");

fullScrBtn.addEventListener("click", () => {
  // every browser have different function for full screen
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    if (fullScr.requestFullscreen) {
      fullScr.requestFullscreen();
    } else if (fullScr.webkitRequestFullScreen) {
      //for chrome
      fullScr.webkitRequestFullScreen();
    }
  }
});



document.querySelector(".white").addEventListener("click", () => {
  fullScr.style.backgroundColor = "white";
});

document.querySelector(".red").addEventListener("click", () => {
  fullScr.style.backgroundColor = "red";
});
document.querySelector(".blue").addEventListener("click", () => {
  fullScr.style.backgroundColor = "blue";
});
document.querySelector(".green").addEventListener("click", () => {
  fullScr.style.backgroundColor = "green";
});

const colorPicker = document.getElementById("myColorPicker");

colorPicker.addEventListener("input", (event) => {
  fullScr.style.backgroundColor = event.target.value;
});

