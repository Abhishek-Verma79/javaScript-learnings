'use strict';

// primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName,oldLastName);

// reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
// marriedJessica.age = 50;
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);
// marriedJessica = {};   marriedJessica is a constant means we just can't change the memory address it is holding

// copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice','Bob'],
};
const jessicaCopy = Object.assign({},jessica2); // but object.assign only works on first level means it doesn't create a
// deep copy of the objects inside the jessica2 object
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary'); // will change the family of jesscia2 as well
jessicaCopy.family.push('John');

console.log(jessica2);
console.log(jessicaCopy);
