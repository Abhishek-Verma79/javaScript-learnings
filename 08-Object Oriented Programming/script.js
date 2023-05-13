'use strict';


const Person = function(firstName,birthYear){
    //instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    //Never do this
    // this.calcAge = function(){
    //     console.log(2037 - this.birthYear);
    // }
};

const Abhishek = new Person('abhishek',1991);
//what happens actually bts
//1. New {} is created
//2. function is called and this points to that newly created empty obj
//3. {} linked to prototype
//4. function automatically return {};

const Matilda = new Person('Matilda',1997);
const jack = new Person('jack',2003);

console.log(Abhishek,Matilda,jack);
console.log(Abhishek instanceof Person);

//Prototypes

console.log(Person.prototype);
Person.prototype.calAge = function(){
    console.log(2037 - this.birthYear);
};
Abhishek.calAge();
Matilda.calAge();

console.log(Abhishek.__proto__);
console.log(Abhishek.__proto__ === Person.prototype);


console.log(Person.prototype.isPrototypeOf(Abhishek));
console.log(Person.prototype.isPrototypeOf(Matilda));
console.log(Person.prototype.isPrototypeOf(Person));


Person.prototype.species = 'Homo Sapiens';
console.log(Abhishek.species,Matilda.species);

console.log(Abhishek.hasOwnProperty('firstName'));
console.log(Abhishek.hasOwnProperty('species'));
console.log(Abhishek.__proto__);


console.log(Abhishek.__proto__.__proto__);
console.dir(Person.prototype.constructor);


const arr = [1,3,4,5,3,3,2,1];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

//You can do this but avoid it
Array.prototype.unique = function(){
    return [...new Set(this)];
}

console.log(arr.unique());

const h1 = document.querySelector('h1'); // check it's protos you can easily see a long prototype chain here