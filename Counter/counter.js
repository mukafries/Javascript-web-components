// set initial count
let count =0;

// select value and buttons
const value = document.getElementById("value");
const buttons = document.querySelectorAll(".btn");

console.log(buttons);

buttons.forEach(function (button){
  button.addEventListener('click', function (e){
    const styles = e.currentTarget.classList;

    if(styles.contains("decrease-btn")){
      count--;
    }else if (styles.contains("increase-btn")) {
      count++;
    } else if(styles.contains("reset-btn")) {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    else if(count === 0){
      value.style.color ="#222";
    }else{
      value.style.color = "red";
    }
    value.textContent = count;
  })
});