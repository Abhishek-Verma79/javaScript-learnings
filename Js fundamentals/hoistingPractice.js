'use strict';

//variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'jonas';
let job = 'teacher';
const year = 1991;

//functions
console.log(addDecl(2,3));
// console.log(addExpr(2,3));
// console.log(addArrow(2,3));

function addDecl(a , b){
    return a + b;
}

const addExpr = function(a , b){
    return a + b;
}

var addArrow = (a , b) => a + b;

//Example bug that can happen 
if(!numProducts) deleteShoppingCart();
var numProducts = 10; // danger
function deleteShoppingCart(){
    console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);