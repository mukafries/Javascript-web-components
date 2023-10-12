
// select items
const img = O('person-img');
const author = O('name');
const title = O('title');
const comment = O('review');

// select buttons
const prevBtn = O("previous");
const nextBtn = O("next");
const randomBtn = O("random-btn");

// Set starting item
let currentItem = 5;

// set up event listeners for the buttons
nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);
randomBtn.addEventListener('click', surprise);



// load initial iten
window.addEventListener('DOMContentLoaded', function(){
  console.log("Shake and bake");
  loadComment(currentItem);

});

// 
function loadComment(id){
  const item = data[currentItem];

  author.textContent = item.author;
  title.textContent = item.post_title;
  comment.textContent = item.body;
}

function next(){
  
  if(currentItem+1 > data.length-1){
    currentItem = 0;
  }else{
    currentItem += 1;
  }

  loadComment(currentItem);
}

function prev(){
  if(currentItem-1 < 0){
    currentItem = data.length -1;
    console.log(currentItem);
  }else{
    currentItem -= 1;
  }
  loadComment(currentItem);
}

function changeImage(){
  img;
}

function surprise(){
  currentItem = Math.floor(Math.random() * (data.length));
  loadComment(currentItem);
}