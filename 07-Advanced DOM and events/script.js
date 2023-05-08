'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');


///////////////////////////////////////
// Modal window



const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click',openModal));


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



// Scroll smooth feature

btnScrollTo.addEventListener('click',function(e){
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('Current scroll (X/Y) ', window.pageXOffset,window.pageYOffset);

  // console.log('Height and width of the viewport ', document.documentElement.clientHeight, document.documentElement.clientWidth);

  //scrolling to section
  // window.scrollTo(s1coords.left+window.pageXOffset,s1coords.top+window.pageYOffset)

  //for smoothness
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //modern way of scrolling to section

  section1.scrollIntoView({behavior:"smooth"});
});

///////////////////////////////////////////////
//page Navigation feature
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click',function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     const sec = document.querySelector(id);
//     sec.scrollIntoView({behavior:'smooth'});
//   })
// })

//1. add event listener to common parent element
//2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click',function(e){
  // console.log(e.target);
  e.preventDefault();

  //matching strategy
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    const sec = document.querySelector(id);
    sec.scrollIntoView({behavior:'smooth'});
  }
})


///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//LECTURES

/*

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const allSections = document.querySelectorAll('.section');
console.log(allSections);

//creating and inserting elements
//.insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies to improve functionality and analytics';
message.innerHTML = 'We use cookies to improve functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>';

const header = document.querySelector('.header');
// header.prepend(message);
header.append(message);
//if want at multiple places
// header.append(message.cloneNode(true));

//sibling of header now
// header.before(message); 
// header.after(message);

document.querySelector('.btn--close-cookie').addEventListener('click',() => {
  // message.remove();
  //old way
  message.parentElement.removeChild(message);
})


//styles
message.style.backgroundColor="#37383d";
message.style.width = "120%";

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height , 10) + 30 + 'px';

// set properties of root variables of css
// document.documentElement.style.setProperty('--color-primary','orangered');


//attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

//set attributes
logo.alt = 'Beautiful minimalist logo';


//non standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company','bankist');


console.log(logo.src); // gives absolute path
console.log(logo.getAttribute('src')); // gives relative path


const link = document.querySelector('.nav__link--btn');
console.log(link.href); // gives absolute path
console.log(link.getAttribute('href')); // gives relative path as specified in index.html

//dataSet attributes or data attributes
console.log(logo.dataset.versionNumber);

//classes
logo.classList.add('c','j');
logo.classList.remove('c','j');
logo.classList.toggle('c');
logo.classList.contains('c');

//Don't use it'll override all other classes and allow us only to put one class
logo.className = 'Abhishek';
*/

/*

//types of events and event handlers
const h1 = document.querySelector('h1');
const alertH1 = function(e){
    alert('You are reading the heading :D');
    // h1.removeEventListener('mouseenter',alertH1);
  };
h1.addEventListener('mouseenter',alertH1);

setTimeout(() => {
  h1.removeEventListener('mouseenter',alertH1);
}, 3000);

// h1.onmouseenter = function(e){
//   alert('You are reading the heading :D');
// }
*/

/*
//Event propagation in practice
const randomInt = (min , max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
// console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click',function(e){
  this.style.backgroundColor = randomColor();
  console.log('LINK',e.target,e.currentTarget);
  console.log(e.currentTarget === this);
  //stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click',function(e){
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER',e.target,e.currentTarget);
});

document.querySelector('.nav').addEventListener('click',function(e){
  this.style.backgroundColor = randomColor();
  console.log('NAVBAR',e.target,e.currentTarget);
});
*/


//Event delegation : implementing page navigation

