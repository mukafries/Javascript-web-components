//Method 2 - using selectors inmside the element
const questions = document.querySelectorAll(".question");

// variable to hold the selected/opened question
let selectedQuestion ='';

questions.forEach((question) =>{
  // console.log(question);
  const button = question.querySelector(".question-btn");

  button.addEventListener('click', ()=>{

    if(selectedQuestion === question){
      selectedQuestion = '';
    }
    else if(selectedQuestion === ''){
      selectedQuestion = question;
    }
    else if(selectedQuestion !== question){
      selectedQuestion.classList.remove("show-text");
      selectedQuestion = question;
    }


    // to close other opened question article if the one clicled on is not the one to close

    console.log(selectedQuestion);
    // questions.forEach((item) =>{
    //   if(item !== question){
    //     item.classList.remove("show-text");
    //   }
    // } );

    question.classList.toggle("show-text");
  });

});









// Method 1 -traversing the DOM

// get elements  to control
// const buttons = document.querySelectorAll(".question-btn");


// buttons.forEach(function (button){
//   button.addEventListener('click', function(e){
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });