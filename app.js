'use strict'
var productImages = [];

function Products (productName, filePath) {
    this.productName = productName;
    this.filePath = filePath;
    productImages.push(this);
}
var bag = new Products('R2D2Luggage', 'img/bag.jpg');
var banana = new Products('Banana Slicer', 'img/banana.jpg');
var boots = new Products('Toe-less Rain Boots', 'img/boots.jpg');
var chair = new Products('Chair', 'img/chair.jpg');
var cthulu = new Products('Cthulu', 'img/cthulhu.jpg');
var dragon = new Products('Dragon', 'img/dragon.jpg');
var pen = new Products('Pens', 'img/pen.jpg');
var scissors = new Products('Pizza Cutter', 'img/scissors.jpg');
var shark = new Products('Shark Sleeping Bag', 'img/shark.jpg');
var sweep = new Products('Baby Broom', 'img/sweep.png');
var unicorn = new Products('Unicorn', 'img/unicorn.jpg');
var usb = new Products('USB', 'img/usb.gif');
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
