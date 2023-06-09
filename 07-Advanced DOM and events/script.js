'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

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
//page Navigation feature event delegation
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
});


//tabbed component feature



tabsContainer.addEventListener('click',function(e){
  const clicked = e.target.closest('.operations__tab');

  //Guard clause
  if(!clicked) return;


  //Aremove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));


  //Activate tab
  clicked.classList.add('operations__tab--active');


  //Activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});


//Menu fade animation
const handleHover = function(e){
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el != link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}

nav.addEventListener('mouseover',handleHover.bind(.5));
nav.addEventListener('mouseout',handleHover.bind(1));


//Sticky navigation//////////////////////////////////////
// const intialCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll',function(){
//   console.log(window.scrollY);
//   if(window.scrollY > intialCoords.top){
//     nav.classList.add('sticky');
//   }else{
//     nav.classList.remove('sticky');
//   }
// })


//Sticky navigation : interseciton observer API

// const obsCallback = function(entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   })
// };

// const obsOptions = {
//   root:null, // entire viewport
//   threshold: [0,.2],

// };

// const observer = new IntersectionObserver(obsCallback,obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function(entries){
  const [entry] = entries;

  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(stickyNav,{
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);


//Reveal sections
const allSections = document.querySelectorAll('.section');
const revealSec = function(entries,observer){
  const [entry] = entries;
  // console.log(entry.target);
  if(!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};


const sectionObserver = new IntersectionObserver(revealSec,{
  root: null,
  threshold: .15,
});

allSections.forEach(function(section) {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});


//lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function(entries,observer){
  const [entry] = entries;
  
  if(!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load',function(){
    entry.target.classList.remove('lazy-img');

  });
  observer.unobserve(entry.target);

}

const imgObserver = new IntersectionObserver(loadImg,{
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));


//Slider

const slider = function(){
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

let currSlide = 0;
const maxSlide = slides.length;


//functions
const createDots = function(){
  slides.forEach(function(_,i){
    dotContainer.insertAdjacentHTML('beforeend',
    `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};



const activateDot = function(slide){
  document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));

  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
};



const goToSlide = function(slide){
  slides.forEach((s,i) =>  s.style.transform = `translateX(${100*(i-slide)}%)`);
}


//next Slide;
const nextSlide = function(){
  if(currSlide === maxSlide-1) currSlide = 0;
  else currSlide++;

  goToSlide(currSlide);
  activateDot(currSlide);
}

// go to left;
const prevSlide = function(){
  if(currSlide === 0) currSlide = maxSlide - 1;
  else currSlide--;
  goToSlide(currSlide);
  activateDot(currSlide);
}

function init(){
  goToSlide(0);
  createDots();
  activateDot(0);
}
init();

//Event handlers
btnRight.addEventListener('click',nextSlide);
btnLeft.addEventListener('click',prevSlide);

document.addEventListener('keydown',function(e){
  if(e.key === 'ArrowLeft') prevSlide();
  e.key === 'ArrowRight' && nextSlide();
});

dotContainer.addEventListener('click',function(e){
  if(e.target.classList.contains('dots__dot')){
    const {slide} = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
})
};
slider();




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
//

/*
//Dom traversing
const h1 = document.querySelector('h1');


//Going downwards: child of h1
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'green';

//Goind upwards : parent nodes
console.log(h1.parentNode);
console.log(h1.parentElement);
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function(el){
  if(el != h1){
    el.style.transform = 'scale(.5)';
  }
})
*/

//lifecycle of events
// document.addEventListener('DOMContentLoaded',function(e){
//   console.log('HTML parsed and DOM tree built!',e);
// });

// window.addEventListener('load',function(e){
//   console.log('Page fully loaded!',e);
// });

// window.addEventListener('beforeunload',function(e){
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });