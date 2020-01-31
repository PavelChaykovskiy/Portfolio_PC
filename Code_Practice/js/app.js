"use strict";
// let courseUSD = 24.7;

// //схема яка описує ДАНІ в одиниці товару( our cars) - ourDataBase - array with data;
// let data = [{
//     img: "https://cdn3.riastatic.com/photosnew/auto/photo/audi_a8__304774723fx.webp",
//     imgs: [
//       "https://cdn1.riastatic.com/photosnew/auto/photo/audi_a8__304774726fx.webp",
//       "https://cdn2.riastatic.com/photosnew/auto/photo/audi_a8__304774732fx.webp",
//       "https://cdn2.riastatic.com/photosnew/auto/photo/audi_a8__304774757fx.webp",
//       "https://cdn2.riastatic.com/photosnew/auto/photo/audi_a8__304774782fx.webp",
//     ],
//     title: "Audi A8 ARMOURED Class VR9 ",
//     data: {
//       distance: "10000",
//       geo: "Kiev",
//       engine: "Patrol 6.3",
//       transmission: "Automat",
//     },
//     year: "2018",
//     price: "480 000",
//     date: "25.02.2019",
//     checked: true,
//     top: 3,
//     description: "Audi A8 ARMOURED Class VR9 2018",
//     number: "KR12A22",
//     vin: `VSZZZ3506617`,
//   },
//   {
//     img: "https://cdn4.riastatic.com/photosnew/auto/photo/bentley_continental-gt__279567609fx.webp",
//     imgs: [
//       "https://cdn4.riastatic.com/photosnew/auto/photo/bentley_continental-gt__279567614fx.webp",
//       "https://cdn2.riastatic.com/photosnew/auto/photo/bentley_continental-gt__279567637fx.webp",
//       "https://cdn4.riastatic.com/photosnew/auto/photo/bentley_continental-gt__279567639fx.webp",
//       "https://cdn0.riastatic.com/photosnew/auto/photo/bentley_continental-gt__279567650fx.webp",
//     ],
//     title: "Bentley Continental GT FIRST EDITION ",
//     data: {
//       distance: "0",
//       geo: "Kiev",
//       engine: "Patrol 6.0",
//       transmission: "Automat",
//     },
//     year: "2019",
//     price: "340 000",
//     date: "27.02.2019",
//     checked: true,
//     top: 2,
//     description: "Официальный автомобиль более детальную информацию узнавайте по телефону. будем рады вам ответить",
//     number: "VIP CAR",
//     vin: false,
//   },
//   {
//     img: "https://cdn4.riastatic.com/photosnew/auto/photo/bentley_mulsanne__307189524fx.webp",
//     imgs: [
//       "https://cdn4.riastatic.com/photosnew/auto/photo/bentley_mulsanne__307189519fx.webp",
//       "https://cdn0.riastatic.com/photosnew/auto/photo/bentley_mulsanne__307189620fx.webp",
//       "https://cdn3.riastatic.com/photosnew/auto/photo/bentley_mulsanne__307189623fx.webp",
//       "https://cdn2.riastatic.com/photosnew/auto/photo/bentley_mulsanne__307189622fx.webp",
//     ],
//     title: "Bentley Mulsanne 1 of 100 Limited Ed.",
//     data: {
//       distance: "0",
//       geo: "Kiev",
//       engine: "Patrol 6.75",
//       transmission: "Automat",
//     },
//     year: "2019",
//     price: "550 000",
//     date: "25.02.2019",
//     checked: true,
//     top: 1,
//     description: "Автомобіль 2019 року, в ексклюзивній комплектації до 100-річчя Bentley. Офіційний дилер, авто в наявності в салоні в Києві. Гарантія 3 роки без обмеження пробігу.",
//     number: "VIP CAR",
//     vin: false,
//   },
//   {
//     img: "https://cdn2.riastatic.com/photosnew/auto/photo/bmw_850__301543957fx.webp",
//     imgs: [
//       "https://cdn4.riastatic.com/photosnew/auto/photo/bmw_850__301543959fx.webp",
//       "https://cdn1.riastatic.com/photosnew/auto/photo/bmw_850__301543991fx.webp",
//       "https://cdn2.riastatic.com/photosnew/auto/photo/bmw_850__301544012fx.webp",
//       "https://cdn2.riastatic.com/photosnew/auto/photo/bmw_850__301544077fx.webp",
//     ],
//     title: "BMW 850 M850i X-Drive",
//     data: {
//       distance: "10000",
//       geo: "Kiev",
//       engine: "Patrol 4.4",
//       transmission: "Automat",
//     },
//     year: "2019",
//     price: "149 900",
//     date: "25.02.2019",
//     checked: true,
//     top: 4,
//     description: "в наличии в Киеве Официальный автомобиль Состояние нового На гарантии Весь автомобиль в защитной пленке Максимальная комплектация Спортивные тормоза M M спортивный дифференциал",
//     number: "VIP CAR",
//     vin: `VSZZZ3506617`,
//   },
//   {
//     img: "https://cdn0.riastatic.com/photosnew/auto/photo/lexus_ls-500__311066465fx.webp",
//     imgs: [
//       "https://cdn2.riastatic.com/photosnew/auto/photo/lexus_ls-500__311066487fx.webp",
//       "https://cdn1.riastatic.com/photosnew/auto/photo/lexus_ls-500__311066531fx.webp",
//       "https://cdn2.riastatic.com/photosnew/auto/photo/lexus_ls-500__311066572fx.webp",
//       "https://cdn2.riastatic.com/photosnew/auto/photo/lexus_ls-500__311066637fx.webp",
//     ],
//     title: "Lexus LS 500 Hybrid",
//     data: {
//       distance: "15000",
//       geo: "Kiev",
//       engine: "Hybrid 3.5",
//       transmission: "Automat",
//     },
//     year: "2018",
//     price: "96 000.456",
//     date: "25.02.2019",
//     checked: true,
//     top: false,
//     description: "Автомобиль официальный. Год выпуска 2018, покупка в 2019 году в Лексус Центр Днепр. Состояние нового авто! Весь авто в бронепленке! (затянут с первого дня). Два комплекта новой резины.",
//     number: "KR12A22",
//     vin: `VSZZZ3506617`,
//   },
//   {
//     img: "https://cdn2.riastatic.com/photosnew/auto/photo/lincoln_navigator__200629377fx.webp",
//     imgs: [
//       "https://cdn2.riastatic.com/photosnew/auto/photo/lincoln_navigator__200629397fx.webp",
//       "https://cdn1.riastatic.com/photosnew/auto/photo/lincoln_navigator__200656366fx.webp",
//       "https://cdn0.riastatic.com/photosnew/auto/photo/lincoln_navigator__200629405fx.webp",
//       "https://cdn2.riastatic.com/photosnew/auto/photo/lincoln_navigator__200629397fx.webp",
//     ],
//     title: "Lincoln Navigator",
//     data: {
//       distance: "0",
//       geo: "Kiev",
//       engine: "Patrol 3.5",
//       transmission: "Automat",
//     },
//     year: "2019",
//     price: "145 000",
//     date: "25.02.2019",
//     checked: true,
//     top: false,
//     description: "Максимальная версия Black Label. Совершенно новый кузов, Новое поколение. Автосалон Рик-Авто к Вашим услугам. Trade in (Ваше авто с пробегом + доплата = новое авто). Для более детальной информации обращайтесь по указанным телефонам.",
//     number: "PIKAUTO",
//     vin: false,
//   },
// ];

// // $(`#showCarsBtn`).click(function() {
// //   $(this).hide();
// //   ;
// // });
// const formatter = new Intl.NumberFormat("uk", {
//   style: 'currency',
//   currency: 'UAH',
//   currencyDisplay: 'symbol'
// });

// $('#lll').click(function () {
//   console.log($('.car-list').children().length);

//   appendCarToList($('.car-list').children().length);
// })

// // let priceUa = carData.price * 25;

// //scelet ( Шаблон - Template) for input data from DataBase
// function createCarHtml(carData) {
//   let carTemplate = `
//     <div class="car ${carData.top ? "top" : ""}" data-top="${
//     carData.top ? carData.top : ""
//   }">
//     <img class="car-img" src="${carData.img}" alt="${carData.title}" />
//     <div class="info-wrap">
//     <a href="" class="car-title">${carData.title} ${carData.year} </a>
//     <div class="car-price">
//         <span>${formatter.format(parseFloat(carData.price.replace(' ',''))*courseUSD)} </span>
//         <span class="UKR"> </span>
//     </div>
//     <ul class="car-data">
//         <li><i class="fas fa-tachometer-alt-fast"></i> ${
//           carData.data.distance
//         } km</li>
//         <li><i class="fal fa-map-marker-alt"></i> ${carData.data.geo}</li>
//         <li><i class="fas fa-gas-pump"></i> ${carData.data.engine}</li>
//         <li><i class="fas fa-cogs"></i>  ${carData.data.transmission}</li>
//     </ul>
//         <div class="car-checked">

//         ${
//           carData.number
//             ? `<span class="car-number "> ${carData.number} </span>`
//             : ""
//         }
//            ${
//              carData.vin
//                ? `

//       <span class="car-vin "><i class="fas fa-car"></i> ${carData.vin}</span>
//              `
//                : ""
//            }

//             </div>

//   <div class="footer-ticket">
//     <small class="car-date"><i class="far fa-clock"></i>${carData.date}</small>
//     <div class="car-manipulate">
//             <a href="" class="car-star"><i class="fas fa-star"></i></a>
//             <a href="" class="car-compare"><i class="fal fa-balance-scale"></i></a>
//     </div>
//     </div >
//     </div >`;

//   return carTemplate;
// }

// {
//   /* <a href="" class="car-btn-view"> More </a> */
// }

// function appendCarToList(number) {
//   let len;
//   if (number >= data.length) {
//     len = data.length
//   } else{
//     len = number + 2
//   }
//   for (let i = number; i < len; i++) {
//     const car = data[i];
//     let html = createCarHtml(car);
//     $(`.car-list`).append(html);
//   }
// }

//дані які ми передаємо в формі ключа і використовуємо при виклику в $.get
let sendDataToNiko = {
  cat: 55,
  token: "0e94e098eac6e56a22496613b325473b7de8cb0a",
};
//дані які ми передаємо в формі ключа і використовуємо при виклику в $.get
let sendDataToPrivat = {
  json: ``,
  exchange: ``,
  coursid: 5,
};

// метод для форматування цифер в вигляді валюти і додає символ
let formatter = new Intl.NumberFormat("uk", {
  style: "currency",
  currency: "UAH",
  currencyDisplay: "symbol",
});

//метод get отримує потрібні нам обєкти в JSON форматі з серверів через API інтерфейс
$.get(`https://api.privatbank.ua/p24api/pubinfo?`, sendDataToPrivat, function(
  data,
) {
  let courceUSD = data[0].sale;
  $.get(`https://b2b.nikolink.com/api/get-items.php?`, sendDataToNiko, function(
    data,
  ) {
    let len = 0;
    // перший показ карток не залежно чи нажато на кнопку

    for (let i = len; i < len + 10; i++) {
      const e = data[i];
      //створюємо html шаблолн в який будуть внесені дані з отриманого обєкта
      // і цей шаблон буде вставлений в наш DOM html
      let priceUAH = formatter.format(Math.round(e.price * courceUSD));
      let html = `<div class="product">
            <img src="${e.img}" alt="" class="product-img" />
            <div class="details-section">
              <a href="" class="product-title">${e.name}</a>
              </br>
              <p class="product-price">${priceUAH} </p>
            </div>
          </div>`;
      $(`#pdl`).append(html);
      if (i == data.length - 1) {
        $(`#showCardsBtn`).hide();
      }
      console.log(len);
    }
    //створюємо цикл який вставлятиме стільки html скільки буде отримано обєктів з серевера
    $(`#showCardsBtn`).on("click", function() {
      // задаємо лен довжину вставлених обєктів
      len = $(`#pdl`).children().length;
      // задаємо к-ть по скільки елементів показувати
      let number = len + 19;
      // цикл який виводить елементи
      for (let i = len; (i < data.length) & (i < number); i++) {
        const e = data[i];
        //створюємо html шаблолн в який будуть внесені дані з отриманого обєкта
        // і цей шаблон буде вставлений в наш DOM html
        let priceUAH = formatter.format(Math.round(e.price * courceUSD));
        let html = `<div class="product">
            <img src="${e.img}" alt="" class="product-img" />
            <div class="details-section">
              <a href="" class="product-title">${e.name}</a>
              </br>
              <p class="product-price">${priceUAH} </p>
            </div>
          </div>`;
        $(`#pdl`).append(html);
        if (i == data.length - 1) {
          $(`#showCardsBtn`).hide();
        }
      }
      console.log(len);
    });
  });
});

// додаємо класи для кнопок і карток-товарів;
$("#listView").on("click", function() {
  $(`.product`).addClass(`p-small`);
  $(`.btn-list`).addClass(`active-list`);
  $(`.btn-gallery`).removeClass(`active-list`);
});

$("#galleryView").on("click", function() {
  $(`.product`).removeClass(`p-small`);
  $(`.btn-list`).removeClass(`active-list`);
  $(`.btn-gallery`).addClass(`active-list`);
});

$(`#sendEl`).on("click", function() {
  console.log($(`.product-list`).children().length);
});

$(`.sort-wrap`).on("click", function() {
  $(`.wrap-sort-list`).toggleClass("hidden");
});
