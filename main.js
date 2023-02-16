const name='Marta Szewczul' 
console.log(`Cześć! Nazywam się ${name} i witam Cię na mojej stronie!`);


const motto = document.querySelector('.motto--js');
console.log(motto)

motto.innerHTML = `Coco Jamboo i do przodu!`;

function greet(name, age) {
console.log (`Cześć! Nazywam się ${name} i mam ${age} lat`)
};

greet(name, 39)

const hamburger = document.querySelector('.hamburger--js');
hamburger.addEventListener('click', () => {
const nav = document.querySelector('.navigation--js');
nav.classList.toggle('navigation--open');
} )