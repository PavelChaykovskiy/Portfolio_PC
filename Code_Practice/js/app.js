"use strict";


//add new course for uah 
if (!localStorage[`courseUSD`]) {
  $.get(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`, function (data) {
    localStorage[`courseUSD`] = data[0].sale;
  });
}


//метод get отримує потрібні нам обєкти в JSON форматі з серверів через API інтерфейс
$.get(
  `https://b2b.nikolink.com/api/get-items.php?cat=55&token=0e94e098eac6e56a22496613b325473b7de8cb0a`,
  function (data) {
    const arr = data;

    appendCards(arr, 10);
    $(`#pdl`).on(`click`, `.empty-heart`, function () {
      let takeIdValue = $(this).parent().parent().parent().parent(`.product`).attr(`data-id`);
      console.log(takeIdValue);
    });


    $(`#showCardsBtn`).click(function () {
      appendCards(arr, 10);
    });
  },
);


let localArray = [33, 23, 65, 33];
localStorage[`favorites`] = localArray;

let obj = { 1: 33, 2: `name`, name: `John` }
localStorage[`obj`] = JSON.stringify(obj);

console.log(JSON.parse(localStorage[`obj`]).name);


// додаємо класи для кнопок і карток-товарів;
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

$(document).on(`click`, function (e) {
  if (e.target != $(`.sort-wrap`)[0]) {
    $(`.wrap-sort-list`).addClass("hidden");
  }
})



function createCard(product) {

  let html = `<div class="product" data-id="${product.id}">
            <img src="${product.img}" alt="" class="product-img" />
            <div class="details-section">
              <a href="" class="product-title">${product.name}</a>
              </br>
              
              <p class="product-price" data-price="${product.price}">${product.price} </p>
              <div class="tools-container">
              <div class="buy-basket"></div>
              <div class="wish-list">
              <div class="empty-heart"><i class="far fa-heart" ></i></div>
              <div class="full-heart hidden"><i class="fas fa-heart" ></i></div>
              </div>  
              </div>
            </div>
          </div>`;
  return html;
}



function appendCards(arr, number = 20) {
  const pdl = $(`#pdl`);
  let childs = pdl.children().length;

  let len;

  if (arr.length <= childs) {
    len = arr.length;
  } else {
    len = childs + number;
  }

  for (let i = childs; i < len; i++) {
    const e = arr[i];
    let html = createCard(e);
    pdl.append(html);
  }

  changeCourse(pdl.children().not(`[data-uah=1]`));

  if (childs == arr.length) {
    $(`#showCardsBtn`).hide();
  }
}


function changeCourse(arr) {
  // метод для форматування цифер в вигляді валюти і додає символ
  const formatter = new Intl.NumberFormat("uk", {
    style: "currency",
    currency: "UAH",
    currencyDisplay: "symbol",
  });

  for (let elem of arr) {

    elem = $(elem);

    let course = localStorage[`courseUSD`];

    let usd = parseFloat(elem.find(`.product-price`).text());


    let uah = formatter.format(usd * course);


    elem.find(`.product-price`).text(uah);

    elem.attr(`data-uah`, `1`);
  }
};







