const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Steak Dinner",
    category: "dinner",
    price: 39.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];


// selection the container that will display all the menuitems
const sectionCenter = document.querySelector(".menu-list-container");
const categoryList = document.querySelector(".category-list");
// Selecting all the filter buttons
const categoryBtns = document.querySelectorAll(".category-item_btn");

// holds the selected category
let selectedBtn = '';

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);

  displayMenuButtons();
});


//Carries out all the functions needed to display the menu buttons and make them work
function displayMenuButtons(){
  const categories = menu.reduce(function(values, item,id,dk){

    if(!values.includes(item.category)){
      values.push(item.category);
    }
    console.log("==========================");
    return values;
  }, ['all']);
  
  console.log(categories);
  displayCategories(categories);

  // Initialize the selected button after they have been rendered
  if(categories){
    selectedBtn = document.querySelector('[data-id ="all"]');
    selectedBtn.classList.toggle("category-item_btn__selected");
  }

  const categoryBtns = document.querySelectorAll(".category-item_btn");
  categoryBtns.forEach((btn) => categoryBtnsClickEvent(btn, 'click'));
}






function categoryBtnsClickEvent(btn, event){
  btn.addEventListener(event, (e) => {

    const category = e.currentTarget.dataset.id;
    
    if(selectedBtn.category !== category){
      selectedBtn.classList.remove("category-item_btn__selected");
      selectedBtn = btn;
      selectedBtn.classList.add('category-item_btn__selected');
    }

    /*
    @description: creates a list containing items in the category of the buttton clicked
    **/
    const categoryFilteredList = category === "all"? menu : menu.filter(function(menuItem){

      if(menuItem.category !== category){
        return null;
      }
      return menuItem;
    });

    // console.log(categoryFilteredList);
    displayMenuItems(categoryFilteredList);

  });
}

function displayCategories(categories){
  let displayCategories = categories.map((item) => {
    return `
    <li class="category-item"><button class="category-item_btn" data-id="${item}">${item}</button></li>
    `;
  });

 
  displayCategories = displayCategories.join("");
  categoryList.innerHTML = displayCategories;
}

function displayMenuItems(menuItems){
  let displayMenu = menuItems.map((item) => {
    return `<article class="menu-item">
      <div class="img-container">
        <img src="${item.img}" class="menu-item_img" alt="${item.title}">
      </div>
      <div class="menu-item_details">
        <div class="menu-item-heading-container">
          <h4 class="menu-item-heading">
            ${item.title}
          </h4>
          <div class="price">$${item.price}</div>
        </div>

        <p class="description">
        ${item.desc}
        </p>
      </div>
    </article>`;
  });

  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}