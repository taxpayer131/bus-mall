'use strict';
var productImages = [];
var clickChart = [];
var displayedChart = [];
var globalClicks = 0;
var currentImages = [];
var img1;
var img2;
var img3;
var productImageOne = document.getElementById('imageOne');
var productImageTwo = document.getElementById('imageTwo');
var productImageThree = document.getElementById('imageThree');
var imageSection = document.getElementById('hide');
var resultsButton = document.getElementById('resultsButton');
var thankYou = document.getElementById('appear');
var clearLS = document.getElementById('lsClear');
var chartData = localStorage.getItem('chartPersist');

function Products (productName, filePath) {
  this.productName = productName;
  this.filePath = filePath;
  this.clickTotal = 0;
  this.timesDisplayed = 0;
  productImages.push(this);
}
var bag = new Products('Star Wars Luggage', 'img/bag.jpg');
var banana = new Products('Banana Slicer', 'img/banana.jpg');
var boots = new Products('Toe-less Rain Boots', 'img/boots.jpg');
var chair = new Products('Chair', 'img/chair.jpg');
var cthulu = new Products('Cthulhu Toy', 'img/cthulhu.jpg');
var dragon = new Products('Dragon Meat', 'img/dragon.jpg');
var pen = new Products('Untensil Pens', 'img/pen.jpg');
var scissors = new Products('Pizza Scissors', 'img/scissors.jpg');
var shark = new Products('Shark Sleeping Bag', 'img/shark.jpg');
var sweep = new Products('Baby Broom Onesie', 'img/sweep.png');
var unicorn = new Products('Unicorn Meat', 'img/unicorn.jpg');
var usb = new Products('Tentacle USB', 'img/usb.gif');
var waterCan = new Products('Watering Can', 'img/water-can.jpg');
var wineGlass = new Products('Wine Glass', 'img/wine-glass.jpg');


var imgRandom = function () {
  currentImages.push(productImages[Math.floor(Math.random() * productImages.length]);
}

'use strict'
var productImages = [];

function Products (productName, filePath) {
    this.productName = productName;
    this.filePath = filePath;
    productImages.push(this);
}
var bag = new Products('Star Wars Luggage', 'img/bag.jpg');
var banana = new Products('Banana Slicer', 'img/banana.jpg');
var boots = new Products('Toe-less Rain Boots', 'img/boots.jpg');
var chair = new Products('Chair', 'img/chair.jpg');
var cthulu = new Products('Cthulu Toy', 'img/cthulhu.jpg');
var dragon = new Products('Dragon Meat', 'img/dragon.jpg');
var pen = new Products('Untensil Pens', 'img/pen.jpg');
var scissors = new Products('Pizza Scissors', 'img/scissors.jpg');
var shark = new Products('Shark Sleeping Bag', 'img/shark.jpg');
var sweep = new Products('Baby Broom Onesie', 'img/sweep.png');
var unicorn = new Products('Unicorn Meat', 'img/unicorn.jpg');
var usb = new Products('Tentacle USB', 'img/usb.gif');
var waterCan = new Products('Watering Can', 'img/water-can.jpg');
var wineGlass = new Products('Wine Glass', 'img/wine-glass.jpg');


var imgRandom = function () {
    return Math.floor(Math.random() * productImages.length);
}
var imageAppear = function(){
    var productImageOne = document.getElementById('imageOne');
    var img1 = imgRandom();
    productImageOne.src = productImages[img1].filePath;
    var productImageTwo = document.getElementById('imageTwo');
    var img2 = imgRandom();
    while (img1 === img2) {
        img2 = imgRandom();
    };
    productImageTwo.src = productImages[img2].filePath;
    var productImageThree = document.getElementById('imageThree');
    var img3 = imgRandom();
    while (img1 === img2 || img2 === img3 || img3 === img1) {
        img3 = imgRandom();
    };
    productImageThree.src = productImages[img3].filePath;
}
imageAppear();

var firstClick = 0;
var secondClick = 0;
var thirdClick = 0;

function handleClick(){
    imageAppear();
}

imageOne.addEventListener('click', handleClick);
imageTwo.addEventListener('click', handleClick);
imageThree.addEventListener('click', handleClick);
