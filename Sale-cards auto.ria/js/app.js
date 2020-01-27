"use strict";

//схема яка описує ДАНІ в одиниці товару( our cars) - ourDataBase - array with data;
let data = [
  {
    img:
      "https://cdn3.riastatic.com/photosnew/auto/photo/audi_a8__304774723fx.webp",
    imgs: [
      "https://cdn1.riastatic.com/photosnew/auto/photo/audi_a8__304774726fx.webp",
      "https://cdn2.riastatic.com/photosnew/auto/photo/audi_a8__304774732fx.webp",
      "https://cdn2.riastatic.com/photosnew/auto/photo/audi_a8__304774757fx.webp",
      "https://cdn2.riastatic.com/photosnew/auto/photo/audi_a8__304774782fx.webp",
    ],
    title: "Audi A8 ARMOURED Class VR9 ",
    data: {
      distance: "10000",
      geo: "Kiev",
      engine: "Patrol 6.3",
      transmission: "Automat",
    },
    year: "2018",
    price: "480 000",
    date: "25.02.2019",
    checked: true,
    top: 3,
    description: "Audi A8 ARMOURED Class VR9 2018",
    number: "KR12A22",
    vin: `VSZZZ3506617`,
  },
  {
    img:
      "https://cdn3.riastatic.com/photosnew/auto/photo/audi_a8__304774723fx.webp",
    imgs: [
      "https://cdn1.riastatic.com/photosnew/auto/photo/audi_a8__304774726fx.webp",
      "https://cdn2.riastatic.com/photosnew/auto/photo/audi_a8__304774732fx.webp",
      "https://cdn2.riastatic.com/photosnew/auto/photo/audi_a8__304774757fx.webp",
      "https://cdn2.riastatic.com/photosnew/auto/photo/audi_a8__304774782fx.webp",
    ],
    title: "Audi A8 ARMOURED Class VR9 ",
    data: {
      distance: "10000",
      geo: "Kiev",
      engine: "Patrol 6.3",
      transmission: "Automat",
    },
    year: "2018",
    price: "480 000",
    date: "25.02.2019",
    checked: true,
    top: 3,
    description: "Audi A8 ARMOURED Class VR9 2018",
    number: "KR12A22",
    vin: `VSZZZ3506617`,
  },
  {
    img:
      "https://cdn3.riastatic.com/photosnew/auto/photo/audi_a8__304774723fx.webp",
    imgs: [
      "https://cdn1.riastatic.com/photosnew/auto/photo/audi_a8__304774726fx.webp",
      "https://cdn2.riastatic.com/photosnew/auto/photo/audi_a8__304774732fx.webp",
      "https://cdn2.riastatic.com/photosnew/auto/photo/audi_a8__304774757fx.webp",
      "https://cdn2.riastatic.com/photosnew/auto/photo/audi_a8__304774782fx.webp",
    ],
    title: "Audi A8 ARMOURED Class VR9 ",
    data: {
      distance: "10000",
      geo: "Kiev",
      engine: "Patrol 6.3",
      transmission: "Automat",
    },
    year: "2018",
    price: "480 000",
    date: "25.02.2019",
    checked: true,
    top: 3,
    description: "Audi A8 ARMOURED Class VR9 2018",
    number: "KR12A22",
    vin: `VSZZZ3506617`,
  },
  {
    img:
      "https://cdn3.riastatic.com/photosnew/auto/photo/audi_a8__304774723fx.webp",
    imgs: [
      "https://cdn1.riastatic.com/photosnew/auto/photo/audi_a8__304774726fx.webp",
      "https://cdn2.riastatic.com/photosnew/auto/photo/audi_a8__304774732fx.webp",
      "https://cdn2.riastatic.com/photosnew/auto/photo/audi_a8__304774757fx.webp",
      "https://cdn2.riastatic.com/photosnew/auto/photo/audi_a8__304774782fx.webp",
    ],
    title: "Audi A8 ARMOURED Class VR9 ",
    data: {
      distance: "10000",
      geo: "Kiev",
      engine: "Patrol 6.3",
      transmission: "Automat",
    },
    year: "2018",
    price: "480 000",
    date: "25.02.2019",
    checked: true,
    top: 3,
    description: "Audi A8 ARMOURED Class VR9 2018",
    number: "KR12A22",
    vin: `VSZZZ3506617`,
  },
  {
    img:
      "https://cdn3.riastatic.com/photosnew/auto/photo/audi_a8__304774723fx.webp",
    imgs: [
      "https://cdn1.riastatic.com/photosnew/auto/photo/audi_a8__304774726fx.webp",
      "https://cdn2.riastatic.com/photosnew/auto/photo/audi_a8__304774732fx.webp",
      "https://cdn2.riastatic.com/photosnew/auto/photo/audi_a8__304774757fx.webp",
      "https://cdn2.riastatic.com/photosnew/auto/photo/audi_a8__304774782fx.webp",
    ],
    title: "Audi A8 ARMOURED Class VR9 ",
    data: {
      distance: "10000",
      geo: "Kiev",
      engine: "Patrol 6.3",
      transmission: "Automat",
    },
    year: "2018",
    price: "480 000",
    date: "25.02.2019",
    checked: true,
    top: 3,
    description: "Audi A8 ARMOURED Class VR9 2018",
    number: "KR12A22",
    vin: `VSZZZ3506617`,
  },
  {
    img:
      "https://cdn3.riastatic.com/photosnew/auto/photo/audi_a8__304774723fx.webp",
    imgs: [
      "https://cdn1.riastatic.com/photosnew/auto/photo/audi_a8__304774726fx.webp",
      "https://cdn2.riastatic.com/photosnew/auto/photo/audi_a8__304774732fx.webp",
      "https://cdn2.riastatic.com/photosnew/auto/photo/audi_a8__304774757fx.webp",
      "https://cdn2.riastatic.com/photosnew/auto/photo/audi_a8__304774782fx.webp",
    ],
    title: "Audi A8 ARMOURED Class VR9 ",
    data: {
      distance: "10000",
      geo: "Kiev",
      engine: "Patrol 6.3",
      transmission: "Automat",
    },
    year: "2018",
    price: "480 000",
    date: "25.02.2019",
    checked: true,
    top: 3,
    description: "Audi A8 ARMOURED Class VR9 2018",
    number: "KR12A22",
    vin: `VSZZZ3506617`,
  },
];

// $(`#showCarsBtn`).click(function() {
//   $(this).hide();
//   ;
// });
appendCarToList();

// let priceUa = carData.price * 25;
function makeUA() {
  let dollar = data[0].price;
  return parseInt(dollar, Number) * 25 + "000";
}

console.log(makeUA());
//scelet ( Шаблон - Template) for input data from DataBase
function createCarHtml(carData) {
  let carTemplate = `
    <div class="car ${carData.top ? "top" : ""}" data-top="${
    carData.top ? carData.top : ""
  }">
    <img class="car-img" src="${carData.img}" alt="${carData.title}" />
    <div class="info-wrap">
    <a href="" class="car-title">${carData.title} ${carData.year} </a>
    <div class="car-price">
        <span>${carData.price} $</span>
        <span class="UKR"> ${makeUA()} UAH</span>
    </div>
    <ul class="car-data">
        <li><i class="fas fa-tachometer-alt-fast"></i> ${
          carData.data.distance
        } km</li>
        <li><i class="fal fa-map-marker-alt"></i> ${carData.data.geo}</li>
        <li><i class="fas fa-gas-pump"></i> ${carData.data.engine}</li>
        <li><i class="fas fa-cogs"></i>  ${carData.data.transmission}</li>
    </ul>
        <div class="car-checked">

        ${
          carData.number
            ? `<span class="car-number "> ${carData.number} </span>`
            : ""
        } 
           ${
             carData.vin
               ? `
             
      <span class="car-vin "><i class="fas fa-car"></i> ${carData.vin}</span>
             `
               : ""
           } 
           
        
            </div>

  <div class="footer-ticket"> 
    <small class="car-date"><i class="far fa-clock"></i>${carData.date}</small>
    <div class="car-manipulate">
            <a href="" class="car-star"><i class="fas fa-star"></i></a>
            <a href="" class="car-compare"><i class="fal fa-balance-scale"></i></a>  
    </div>
    </div > 
    </div >`;

  return carTemplate;
}

{
  /* <a href="" class="car-btn-view"> More </a> */
}

function appendCarToList() {
  for (const car of data) {
    let html = createCarHtml(car);
    $(`.car-list`).append(html);
  }
}
