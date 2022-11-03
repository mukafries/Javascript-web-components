const colors = ["green","red","rgba(133,122,200", "#fi5025"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener('click', ()=>{
  // get random number between 0 and 3
  
  const random = Math.floor(Math.random() * colors.length);
  console.log(random);
  document.body.style.backgroundColor =colors[random];
  color.textContent = colors[random];
})