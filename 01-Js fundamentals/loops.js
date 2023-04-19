'use strict';
// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repition ${rep} 🏋️`);
// }

const jonasArray = [
    'Jonas',
    'Smith',
    2037 - 1991,
    'teacher',
    ['Micheal','Peter','Steve'],
    true,
]

// const types = new Array();


// for(let i = 0; i < jonasArray.length; i++){
//     console.log(jonasArray[i],typeof jonasArray[i]);
//     types[i] = typeof jonasArray[i];
// }
// console.log(types);


// console.log('---MOVING FROM BACK TO FRONT---');
// for(let i = jonasArray.length - 1 ; i >= 0 ; i--){
//     console.log(jonasArray[i]);
// }

//RANDOM NUMBER GENERATED

// let dice = Math.trunc(Math.random() * 6)+1;
// while(dice !== 6){
// console.log(`You rolled a ${dice}`);
// dice = Math.trunc(Math.random() * 6)+1;
// if(dice === 6) console.log('Loop is about to end!');
// }


// CODING CHALLENGE
// const bills = [22,295,176,440,37,105,10,1100,86,52];
// const tips = [];
// const total = [];
// const calcTip = function(bill){
//     return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
// }
// for(let i = 0; i < bills.length; i++){
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     total.push(bills[i] + tip );
// }
// console.log(tips);
// console.log(total);

// const calcAverage = function(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }

// console.log(calcAverage(total));
// console.log(`Average of tip -> ${calcAverage(tips)}`);
// console.log(calcAverage([2,3,7]));

//CHALLENGE 2

const maxTemps = [17,21,23];
const maxTemps2 = [12,5,-4,0,4];
const printForecast = function(temps){
    let finalForecast = "...";
    for(let i = 0; i <temps.length; i++){
        finalForecast += `${temps[i]}℃ in ${i+1} days ... `;
    }
    return finalForecast;
}

console.log(printForecast(maxTemps2));


