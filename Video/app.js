const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
video.playbackRate = .5;

window.load


btn.addEventListener("click", () => {
  if (!btn.classList.contains("slide")){
    btn.classList.add('slide');
    video.pause();
  }else{
    btn.classList.remove('slide');
    video.play();
  }
});

// preloader
const preloader = document.querySelector(".preloader");
window.addEventListener('load', () => {
  preloader.classList.add("hide-preloader");
});