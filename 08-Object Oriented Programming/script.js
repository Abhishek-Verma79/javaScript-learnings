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

/*
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
*/

/*
///////////////////////////////////////////////////////
//Inheritance between classes: constructor functions

const Person = function(firstName,birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
};

const Student = function(firstName,birthYear,course){
    //this will point to newly created empty obj
    Person.call(this,firstName,birthYear);
    this.course = course;
}

//linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}!`);
}


const mike = new Student('Mike',2020,'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();
console.log(mike);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
console.dir(Student);
*/

///////////////////////////////////////////////////////
//INheritance between classes in ES6
/*
class PersonCl{
    // this constructor would automatically be called
    constructor(fullName,birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Methods will be added to .prototype property
    calcAge(){
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

class StudentCl extends PersonCl{
    constructor(fullName,birthYear,course){
        super(fullName,birthYear); // constructor func of super class
        this.course = course;
    }
    introduce(){
        console.log(`My name is ${this._fullName} and I study ${this.course}!`);
    }

    calcAge(){
        console.log(`I'm ${2037 - this.birthYear} year old, but as a student I feel more like ${2037 - this.birthYear + 10} :(`);
    };
}
// StudentCl.prototype = Object.create(PersonCl.prototype);
const martha = new StudentCl('Martha Jones', 1991, 'CSE');
martha.introduce();
// console.log(martha);
martha.calcAge();
*/

/*
/////////////////////////////////////////////////////
/////Inheritance between classes : Object.create();

const PersonProto = {
    calcAge(){
        console.log(2037 - this.birthYear);
    },
    init(firstName,birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};


const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName,birthYear,course){
    PersonProto.init.call(this,firstName,birthYear);
    this.course = course;
}

StudentProto.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}!`);
}

const Abhishek = Object.create(StudentProto);
Abhishek.init('Abhishek Verma',2003,'CSE');
Abhishek.introduce();
Abhishek.calcAge();

*/


// Practice with ES6 classes
//1. public fields
//2. private fields
//3. public methods
//4. private methods
// (there is also the static version)

class Account {

    //1. public field (instances)
    locale = navigator.language;

    //2. private field (instances)
    #movements = [];
    #pin;

    constructor(owner,currency,pin){
        this.owner = owner;
        this.currency = currency;
        //Protected property
        this.#pin = pin;
        // this._movements = [];
        // this.locale = navigator.language;
        console.log(`Thanks for opening the account ${owner}`);
    }

    //public interface / public methods
    getMovements(){
        return this.#movements;
    }
    deposite(val){
        this.#movements.push(val);
        return this;
    }

    withdraw(val){
        this.deposite(-val);
        return this;
    }

    
    reqLoan(val){
        if(this._approveLoan(val)){
            this.deposite(val);
            console.log(`Loan approved!`);
            return this;
        }
    }

    //4. private methods .. private methods are not realy implemented in js or g chrome
    _approveLoan(val){
        return true;
    }

}

const acc1 = new Account('Jonas','EUR',1111);
// acc1.movements.push(11);
acc1.deposite(250);
acc1.withdraw(140);
acc1.reqLoan(1000);
console.log(acc1.getMovements());
// console.log(acc1._approveLoan());
// console.log(acc1.#movements);
// console.log(acc1.#pin);
console.log(acc1);
// console.log(acc1.#approveLoan(1000));


// chaining methods
acc1.deposite(300).deposite(500).withdraw(35).reqLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
