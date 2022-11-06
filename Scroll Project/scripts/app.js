const navButton = document.querySelector("#nav-button");
const navBar = document.querySelector("#nav-bar");
const navList = document.querySelector("#nav-list");

// Close Links
navButton.addEventListener("click", () => {
  console.log("pressed");
  navBar.classList.toggle("navbar-show");

  const containerHeight = navBar.getBoundingClientRect();

  const linksHeight = navList.getBoundingClientRect();

  
  if(containerHeight === 0){
    navList.style.height = 0;
  }else{
    navList.style.height = `${linksHeight}px`;
  }
});

window.addEventListener("resize", () =>{
  if (window.innerWidth > 800 && !navBar.classList.contains("navbar-show")) {
    navBar.classList.toggle("navbar-show");
  }
});

// Dynamic date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// Fixed NavBar

const header = document.querySelector(".header");

const backToTop = document.querySelector("#back-to-top");
window.addEventListener('scroll', () => {
  if(window.scrollY > header.getBoundingClientRect().height){
    header.classList.add("header-fixed");
  }else{
    header.classList.remove("header-fixed");
  }


  // back to top button
  if(window.scrollY > document.body.offsetHeight/3){
    backToTop.classList.add("back-to-top-show");
  }else{
    backToTop.classList.remove("back-to-top-show");
  }
});


// Smooth scroll
// select links