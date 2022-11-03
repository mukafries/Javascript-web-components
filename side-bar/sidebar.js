const sidebar = document.getElementById("sidebar");
const toggle_sidebar_btn = document.getElementById("nav-toggle-btn");
const close_sidebar_btn = document.getElementById("close-sidebar-btn");

toggle_sidebar_btn.addEventListener('click', ()=>{
  toggle_sidebar_btn.classList.toggle("nav-toggle-btn_open");
  sidebar.classList.toggle('show-sidebar');
});

close_sidebar_btn.addEventListener('click', () =>{
  sidebar.classList.toggle("show-sidebar");
  toggle_sidebar_btn.classList.toggle("nav-toggle-btn_open");
});