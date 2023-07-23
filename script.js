let cardImage = document.querySelector(".one_bg");
let current = 0;
let images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
];

setInterval(() => {
  cardImage.src = `/src/${images[current]}`;
  if (current < images.length - 1) {
    current++;
  } else {
    current = 0;
  }
  console.log(current);
}, 2000);
