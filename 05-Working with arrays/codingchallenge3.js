"use strict";
/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/
//challenge 2
// const calcAverageHumanAge = function(ages){
//     const dogToHuman = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
//     // console.log(dogToHuman);
//     const excludeLess = dogToHuman.filter( age => age >= 18);
//     // console.log(excludeLess.length);
//     const avgAge =  excludeLess.reduce((acc,age) => acc + age , 0) / excludeLess.length;
//     // console.log(avgAge);
//     return avgAge;
// }

const calcAverageHumanAge = (ages) =>
  ages
    .map((age) => age <= 2 ? 2 * age : 16 + age * 4)
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const juliaData = [5, 2, 4, 1, 15, 8, 3];
const kateData = [16, 6, 10, 5, 6, 1, 4];

console.log(calcAverageHumanAge(juliaData));
console.log(calcAverageHumanAge(kateData));
