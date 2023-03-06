const dealTime = document.getElementById('dealTime');
const time =  new Date("Jan 5, 2024 15:37:25").getTime();
const addItems =  [...document.querySelectorAll('.add-item')];
const saveItems =  [...document.querySelectorAll('.save-item')];
const shirt = document.getElementById('shirts');
const shoes = document.getElementById('shoes');
const short = document.getElementById('short');
const cap = document.getElementById('cap');


const itemsName = document.getElementById('item');
const price = document.getElementById('price');
const shipping = document.getElementById('shapping-info');
const names = document.querySelector('.name')
const pric = document.querySelector('.name')
const cartNum = document.querySelector('.cart-num');
const saveNum = document.querySelector('.saved-num');
let increment = 1;
let addup = 1;


const allPrices = {
   shirt : '18.99',
   shipping : 'Your Item will be shippied in 5 days'
}



////When the items get add to cart this is triggerd!!
Array.from(addItems).forEach(items => {
   items.addEventListener('click', (e) => {
      cartNum.innerHTML = increment++
      cartNum.style.cssText = `
      animation: notification 2s linear infinite;
      transition: animation .20s linear;
      visibility: visible;`
      items.innerHTML = 'Added';
      itemsName.innerHTML = `Item : ${names.innerHTML}`;
      price.innerHTML = `Price : $${allPrices.shirt}`;
      shipping.innerHTML = `Shipping : ${allPrices.shipping}`;
      setTimeout(() => {
         cartNum.style.cssText = `
         animation: notification 2s linear forward;
         transition: animation .20s linear;
         visibility: visible;`
      },5000);
   });
});

////When the items get saved this is triggerd!!
Array.from(saveItems).forEach(items => {
   items.addEventListener('click', (e) => {
      saveNum.innerHTML = addup++
      saveNum.style.cssText = `
      animation: savedItem 2s linear infinite;
      transition: animation .20s linear;
      visibility: visible;`
      setTimeout(() => {
         saveNum.style.cssText = `
         animation: notification 2s linear forward;
         transition: animation .20s linear;
         visibility: visible;`
      },3000);
   });
});



////Data for the images when the are selected!!
const shirtData = {
   orange : './images/orange.jpg',
   red : './images/red.jpg',
   black : './images/black.jpg',
   teal : './images/teal.jpg'
};

const shoesData = {
   black : './images/shoes-black.jpg',
   red : './images/shoes-red.jpg',
   white : './images/shoes-white.jpg',
};

const shortData = {
   blue : './images/s-blue.jpg',
   grey : './images/s-grey.jpg',
   red : './images/s-red.jpg',
   white : './images/s-white.jpg',
};

const capData = {
   black : './images/c-black.jpg',
   gold : './images/c-gold.jpg',
   red : './images/c-red.jpeg',
   navy : './images/c-navy.jpg',
};

////Function for individuals change effects!
function changeShirtColor(shirt){
   const shirtImage =  document.querySelector('.img1');
   let colors = shirt.value.toLowerCase();
    shirt.style.background = colors
    if(shirt.value == 'red') {
      shirtImage.style.backgroundImage = `url(${shirtData.red})`;
    }else if(shirt.value == 'teal'){
      shirtImage.style.backgroundImage = `url(${shirtData.teal})`;
      shirt.style.color = 'white';
    }else if(shirt.value == 'black'){
      shirtImage.style.backgroundImage = `url(${shirtData.black})`;
      shirt.style.color = 'white';
    }else if(shirt.value == 'orange'){
      shirtImage.style.backgroundImage = `url(${shirtData.orange})`;
      shirt.style.color = 'black';
    }else {
      alert('please select the color you want');
    };
};

function changeShoesColor(shoes){
    const shoesImage =  document.querySelector('.img3');
    let colors = shoes.value.toLowerCase();
    shoes.style.background = colors;
    if(shoes.value == 'red') {
      shoesImage.style.backgroundImage = `url(${shoesData.red})`;
      shoes.style.color = 'white';
    }else if(shoes.value == 'white'){
      shoesImage.style.backgroundImage = `url(${shoesData.white})`;
      shoes.style.color = 'black';
    }else if(shoes.value == 'black'){
      shoesImage.style.backgroundImage = `url(${shoesData.black})`
      ;
      shoes.style.color = 'white';
    }else {
      alert('please select the color you want');
    };
};

function changeShortColor(short){
    const shortImages =  document.querySelector('.img4');
    let colors = short.value.toLowerCase();
    short.style.background = colors;
    if(short.value == 'red') {
      shortImages.style.backgroundImage = `url(${shortData.red})`;
      short.style.color = 'white';
    }else if(short.value == 'white'){
      shortImages.style.backgroundImage = `url(${shortData.white})`;
      short.style.color = 'black';
    }else if(short.value == 'grey'){
      shortImages.style.backgroundImage = `url(${shortData.grey})`;
      short.style.color = 'white';
    }else if(short.value == 'blue'){
      shortImages.style.backgroundImage = `url(${shortData.blue})`;
      short.style.color = 'white';
    };
};


function changeCapColor(cap){
    const capImages =  document.querySelector('.img2');
    let colors = cap.value.toLowerCase();
    cap.style.background = colors;
    if(cap.value == 'red') {
      capImages.style.backgroundImage = `url(${capData.red})`;
      cap.style.color = 'white';
    }else if(cap.value == 'gold'){
      capImages.style.backgroundImage = `url(${capData.gold})`;
      cap.style.color = 'black';
    }else if(cap.value == 'black'){
      capImages.style.backgroundImage = `url(${capData.black})`;
      cap.style.color = 'white';
    }else if(cap.value == 'navy'){
      capImages.style.backgroundImage = `url(${capData.navy})`;
      cap.style.color = 'white';
    }else {
      alert('please select the color you want');
    };
};

/// Events for all the data when items are selected!!
shirt.addEventListener('change', function(e) {
   changeShirtColor(shirt);
});
shoes.addEventListener('change', function(e) {
   changeShoesColor(shoes);
});
short.addEventListener('change', function(e) {
   changeShortColor(short);
});
cap.addEventListener('change', function(e) {
   changeCapColor(cap);
});

///Time count down for the sales of items!!
const countDown = setInterval(() => {
   const now = new Date().getTime();
   const calc = time - now
   var hours = Math.floor((calc % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((calc % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((calc % (1000 * 60)) / 1000);
   dealTime.innerHTML = hours + 'h ' + minutes + 'm ' + seconds + 's '

   if(calc < 0){
      clearInterval(countDown)
      console.log('expired');
   }
},5000);