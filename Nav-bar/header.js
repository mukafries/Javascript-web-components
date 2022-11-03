const toggle = document.getElementById("nav-toggle");
const toggle_btn = document.getElementById("nav-toggle-btn");
const navbar = document.getElementById("navbar");

console.log(window.innerWidth);

window.addEventListener('resize', ()=>{
  console.log("window resized");
  console.log(window.innerWidth);
  if(window.innerWidth > 700){

    navbar.className ="show-navbar";
  }else{
    navbar.className ="hide-navbar";
  }
});

toggle_btn.addEventListener('click', ()=>{

  toggle_btn.classList.toggle("nav-toggle-btn_open");
  navbar.classList.toggle("show-navbar");
});
