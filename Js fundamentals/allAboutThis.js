'use strict';
/*
console.log(this);

const calcAge = function(birthYear){
    console.log(2037 - birthYear);
    console.log(this);
}
calcAge(1991);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
}
calcAgeArrow(1980);

const jonas = {
    year : 1991,
    calcAge : function (){
        console.log(this);
        console.log(2037 - this.year);
    }
}
jonas.calcAge();


const matilda = {
    year : 2017,
    
}
matilda.calcAge = jonas.calcAge; // method borrowing

matilda.calcAge();
const f = jonas.calcAge;
f();
*/

// regular functions vs arrow function when to use or when to not
// var firstName = 'matilda';
const jonas = {
    firstName : 'jonas',
    year : 1991,
    calcAge : function(){
        console.log(this);
        console.log(2037 - this.year);
        // SOLution 1 
        // const self = this; //self or that 
        // const isMillennial = function(){
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);          
        //     // console.log(this.year >= 1981 && this.year <= 1996);          

        // };

        // SOLution 2; it's an arrow function so it'll take this from it's lexical scope 
        const isMillennial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);         

        };

        isMillennial(); // simple function call so this's value will be undefined in the function
    },
    

    greet : () => console.log(`Hey ${this.firstName}`), // it's parent scope is global scope
};

jonas.greet();
jonas.calcAge();

// don't use arrow functions inside any object with this keyword

// arguments keyword
const addExpr = function(a , b){
    console.log(arguments);
    return a + b;
};
addExpr(2,5);
addExpr(2,5,8,10,1);
var addArrow = (a , b) =>{
    console.log(arguments);
    return a + b;
};

addArrow(2,5);



