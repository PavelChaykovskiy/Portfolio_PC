"use strict";

//create object with lenght sale-cards inside
const pdl = $(`#pdl`);

//if we dont have in localStorage save currency, then we load it from the bank API in JSON format and sace it in localStorage
// if we have saved courseUSD in localStorage - we change price on uah in our sale-cards without attribute data-uah=1 
if (!localStorage[`courseUSD`]) {
  $.get(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`, function (data) {
    localStorage[`courseUSD`] = data[0].sale;
    if (localStorage['courseUSD']) {
      changeCourse(pdl.children().not(`[data-uah=1]`));
    }
  });
}


//method get take objects with data about our sale-cards in JSON format 
//we append 10 cards on our page in #pdl
//durring click on #showCardsBtn we add 10 more cards
$.get(
  `https://b2b.nikolink.com/api/get-items.php?cat=55&token=0e94e098eac6e56a22496613b325473b7de8cb0a`,
  function (data) {
    const arr = data;

    appendCards(arr, 10);

    $(`#showCardsBtn`).click(function () {
      appendCards(arr, 10);
    });
  },
);

//if we dont have created favs in localStorage yet, we make it with empty object inside 
// we use JSON.stringify for convert objects in  JSON format.
if (!localStorage['favs']) {
  localStorage.setItem('favs', JSON.stringify({}))
}


// style and functinal for change the look of the cards and buttons durring press on them 
$("#listView").on("click", function () {
  $(`.product-list`).addClass(`p-small`);
  $(`.btn-list`).addClass(`active-list`);
  $(`.btn-gallery`).removeClass(`active-list`);
});

$("#galleryView").on("click", function () {
  $(`.product-list`).removeClass(`p-small`);
  $(`.btn-list`).removeClass(`active-list`);
  $(`.btn-gallery`).addClass(`active-list`);
});


$(`.sort-wrap`).on("click", function () {
  $(`.wrap-sort-list`).toggleClass("hidden");
});


// durring click on any zone of document ( all window of browser ) 
$(document).on(`click`, function (e) {
  if (e.target != $(`.sort-wrap`)[0]) { //! ??? how it work, why[0]
    $(`.wrap-sort-list`).addClass("hidden");
  }
})


//if we click on  heart we 
//take id of product 
// take saved favorite data in JSON format  from localStorage and convert them into object with JSON.parse method
//we check if we have the same saved  id  in our object , then durring click on button we delete it from object
// else we save new ID of our sale-card  inside object with favorites sale-cards
//also we change the color of heart if we add or delete it from localStorage
//and we add our object with new data to localStorage with JSON.sringify method 
$(`#pdl`).on(`click`, `.fav`, function () {
  let takeIdValue = $(this).parents(`.product`).attr(`data-id`);

  const favs = JSON.parse(localStorage[`favs`]);

  if (favs[takeIdValue]) {
    delete favs[takeIdValue]
  } else {
    favs[takeIdValue] = takeIdValue;
  }

  if (favs[takeIdValue]) {
    $(this).children('i').removeClass('far').addClass('fas');
  } else {
    $(this).children('i').removeClass('fas').addClass('far');
  }

  localStorage[`favs`] = JSON.stringify(favs);
});






//durring first press button "add to cart" we add our product to cart ( by create a html template)
//durring second press open our cart
pdl.on('click', '.add-cart-btn', function () {

  if ($(this).attr('data-cart')) {
    //открываем корзину!
    console.log('cart open');

  } else {
    const $product = $(this).parents('.product');
    const product = {};

    product.img = $product.children('img').attr('src');
    product.title = $product.find('.product-title').text();
    product.price = $product.find('.product-price').attr('data-price'); //in USD
    product.id = $product.attr('data-id');

    addCartRow(product);

    $(this).text('Already in cart').attr('data-cart', 'true');
  }
});



// add and delete more the same products in cart with buttons "+"&"-"
$('.cart-body').on('click', '.cart-row-number>button', function () {
  const btn = $(this);
  const number = btn.siblings('div');
  let type = btn.attr('data-type');

  let val = parseFloat(number.text()); //take number from div with count of thr same product in cart 


  if (type == '-' && val > 1) {
    val--;
  } else if (type == '+' && val < 100) {
    val++;
  }

  number.text(val);

})





//function add sale-cards in our html code
//if we dont have miore card to show we hide bitton "show more"

function appendCards(arr, number = 20) {
  let childs = pdl.children().length;

  let len;

  if (childs >= arr.length) {
    len = arr.length;
  } else {
    len = childs + number;
  }

  for (let i = childs; i < len; i++) {
    const e = arr[i];
    let html = createCard(e);
    pdl.append(html);
  }

  if (localStorage['courseUSD']) {
    changeCourse(pdl.children().not(`[data-uah=1]`));
  }

  if (childs == arr.length) {
    $(`#showCardsBtn`).hide();
  }
}



function changeCourse(arr) {
  // show price in  visual style of this currency
  const formatter = new Intl.NumberFormat("uk", {
    style: "currency",
    currency: "UAH",
  });

  //take course from local storage, take price from sale-card in $, multiplies course*usd, 
  //append new price in uah on sale-card, add new attribute with value 1  for understand which card have new price in uah  

  for (let elem of arr) {

    elem = $(elem);

    let course = localStorage[`courseUSD`];

    let usd = parseFloat(elem.find(`.product-price`).text().replace('$', '')); //? should we use raplace here?

    let uah = formatter.format(usd * course);

    elem.find(`.product-price`).text(uah);

    elem.attr(`data-uah`, `1`);
  }
};


function createCard(product) {
  let html = `<div class="product" data-id="${product.id}">
            <img src="${product.img}" alt="" class="product-img" />
            <div class="details-section">
              <a href="" class="product-title">${product.name}</a>
              </br>
              <p class="product-price" data-price="${product.price}">${product.price} $</p>
              <div class="tools-container">
              <button class="add-cart-btn">Add to cart</button>
              <button class="fav"><i class="${JSON.parse(localStorage['favs'])[product.id] ? 'fas' : 'far'} fa-heart" ></i></button> 
              </div>
            </div>
          </div>`;
  return html;
}



function addCartRow(product) {
  let html = `<div class="cart-row" data-id="${product.id}">
  <div class="cart-row-index">#</div>
  <div class="cart-row-img">
    <img src="${product.img}">
  </div>
  <div class="cart-row-title">${product.title}</div>
  <div class="cart-row-price">${product.price}</div>
  <div class="cart-row-number">
  <button data-type="-">-</button>
  <div>1</div>
  <button data-type="+">+</button>  
  </div>
  <div class="cart-row-total">Total</div>
</div>`

  $('.cart-body').append(html);
}


