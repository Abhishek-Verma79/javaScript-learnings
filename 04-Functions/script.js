'use strict';

/*
const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 199*numPassengers){
    // ES5
    //numPassengers = numPassengers || 1;
    // price = price || 199;
    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123',2,800);
createBooking('LH123',5);
createBooking('LH123',undefined,1000);
*/


/*
// Passing arguments working: by value and by reference
const flight = 'LH234';
const jonas = {
    name: 'jonas sch',
    passport: 2343432432,
};

console.log(jonas);
const checkIn = function(flightNum,passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr. Jonas Sch';
    if(passenger.passport === 2343432432){
        console.log('Check In!');
    }else{
        console.log('Wrong passport!');
    }
}

checkIn(flight,Object.assign({},jonas));
console.log(flight);
console.log(jonas);

const newPassport = function(person){
    person.passport = Math.trunc(Math.random * 10000000);
};

newPassport(jonas);
checkIn(flight,jonas);
*/


/*

// functions accepting callback functions
const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
};

// console.log(oneWord('javascript is best lang in the world!'));

const upperFirstWord = function(str){
    const [first,...other] = str.split(' ');
    return [first.toUpperCase(),...other].join(' ');
}

//Higher order function
const transformer = function(str, fn){
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}

transformer('Javascript is the best',upperFirstWord);
transformer('Javascript is the best',oneWord);

// js uses callbacks all the time
const high5 = function(){
    console.log('👋');
}
document.body.addEventListener('click',high5);

['jonas','Martha','Adam'].forEach(high5);

*/



/*
// Function returing functions

// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }

// arrow function 
const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steve');

greet('Hello')('Abhishek');
*/


/*

//Call and Apply and bind method

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    booking: [],

    book(flightNum, name){ // we can also keep it outside the object
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.booking.push({flight: `${this.iataCode}${flightNum}`, name})
    },
};

lufthansa.book(239,'Jonas');
lufthansa.book(635,'Abhi');
console.log(lufthansa);

const euroWings = {
    airline: 'euroWings',
    iataCode: 'EW',
    booking: [],
} 

const book = lufthansa.book;


// euroWings.book(23,'Sarah Williams');

//Doesn't work
// book(23,'Sarah williams');

book.call(euroWings,32,'Sarah Williams');
console.log(euroWings);

book.call(lufthansa,39,'Marry Williams');
console.log(lufthansa);

// Ans we can make as many airline objects now ans use the same book function for all lines

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    booking: [],
}

book.call(swiss,88,'Rose Dowson');
console.log(swiss);

// Apply methods
const flightData = [33,'Jorge'];
book.apply(swiss,flightData);
book.call(swiss,...flightData);



// Bind method
const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(233,'Abhishek');

const bookEW23 = book.bind(euroWings,23);
bookEW23('ajay');
bookEW23('Martha');

// with eventListeners
lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this);
    this.planes++;
    console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa));

//partial application (partial application means we can preset some paramters)
const addTax = (rate, value) => value + value*rate;
console.log(addTax(.1,200));

const addVAT = addTax.bind(null,0.23);
//addVAT = value => value + value * .23;
console.log(addVAT(100));



const addTaxRate = function(rate){
    return function(value){
        return value + value * rate;
    }
}

const addTax2 = addTaxRate(.23);
console.log(addTax2(100));
console.log(addTax2(200));

*/

/*

// Immediately invoked function expressions

const runOnce = function(){
    console.log('this will never run again!');
}
runOnce();
// runOnce();


//IIFE
(function(){
    console.log('this will never run again!');
    const isPrivate = 23;
})();

// console.log(isPrivate); // can't access it here

(() => console.log('this is arrow function (IIFE)!'))();

{
    const isPrivate = 2333;
    var notPrivate = 444; // var is not block scoped
}

// console.log(isPrivate);
console.log(notPrivate);

*/

//closures

const secureBooking = function(){
    let passengerCount = 0;
    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers!`);
    }
}

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);



//example 1
let f;

const g = function(){
    const a = 23;
    f = function(){
        console.log(a*2);
    }
}

const h = function(){
    const b = 777;
    f = function(){
        console.log(b + 3);
    }
}

g();
f();
console.dir(f);

// re-assigning function f
h();
f();

console.dir(f);



// example 2
const boardPassengers = function(n, wait){
    const perGroup = n / 3;

    setTimeout(function(){
        console.log(`We are boarding now all ${n} passengers!`);
        console.log(`There are 3 groups and each with ${perGroup} passengers!`);
    },wait*1000);


    console.log(`Will start boarding in ${wait} seconds!`);
}

const perGroup = 1000;
boardPassengers(180,3);