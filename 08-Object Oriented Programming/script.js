'use strict';

/*
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

//static method
Person.hey = function(){
    console.log('Hey there👋');
};
Person.hey();
// Abhishek.hey();
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


// ES6 classes

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl{
    // this constructor would automatically be called
    constructor(fullName,birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Methods will be added to .prototype property
    calAge(){
        console.log(2037 - this.birthYear);
    }

    greet(){
        console.log(`hello ${this.firstName}`);
    }

    get age(){
        return 2037 - this.birthYear;
    }

    // set a property that already exists
    set fullName(name){
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }

    //static method
    static hey(){
        console.log('Hey there👋');
    }
}

PersonCl.hey();

// const jessica = new PersonCl('jessica',1991);
// console.log(jessica);
// jessica.calAge();
// console.log(jessica.__proto__);
// jessica.greet();
// console.log(jessica.age);

const jd = new PersonCl('jessica davis', 1991);
console.log(PersonCl.prototype);
console.log(jd.age);
console.log(jd.hasOwnProperty('_fullName'));
const props = Object.getOwnPropertyNames(Object.getPrototypeOf(jd));
console.log(props);
console.log(Object.getOwnPropertyNames(jd));

//important things to note about classes
//1. Classes are not hoisted
//2. Classes are first class citizens, A func can accept classes ar arguments or return classes
//3. Classes are executed in strict mode


// Getter and setter
// in normal object
const account = {
    owner: 'Jonas',
    movements: [200,300,10,30],

    get latest(){
        return this.movements.slice(-1).pop();
    },

    set latest(mov){
        this.movements.push(mov);
    },
};
console.log(account);
console.log(account.latest);
account.latest = 315;
console.log(account.movements);

*/

//Object.create

const PersonProto = {
    calcAge(){
        return 2037 - this.birthYear;
    },
    init(firstName,birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear; 
    }
};

const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2003;
console.log(steven.calcAge());
console.log(steven);
console.log(PersonProto);

//verrify things
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah',2002);
console.log(sarah.calcAge());
console.log(sarah.firstName);