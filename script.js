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
