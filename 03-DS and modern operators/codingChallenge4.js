'use strict';
///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const btn = document.querySelector('button');
btn.addEventListener('click',function(){
    const text = document.querySelector('textarea').value;
    const arr = text.split('\n');
    const newArr = [];
    for(const x of arr){
        newArr.push(x.trim());
    }
    // console.log(newArr);
    const finlArr = [];
    for(let i = 0; i < newArr.length; i++){
        const ele = newArr[i];
        // console.log(ele);
        const smallestArr = ele.split('_');
        // console.log(smallestArr);
        for(let j = 0; j < smallestArr.length; j++){
            const toLow = smallestArr[j].toLowerCase();
            const finl = toLow[0].toUpperCase()+toLow.slice(1);
            smallestArr[j] = finl;
        }
        smallestArr[0] = smallestArr[0].toLowerCase();
        finlArr.push(smallestArr.join(''));
    }

    for(let i = 0; i < finlArr.length; i++){
        finlArr[i] = finlArr[i].padEnd(20,' ');
        finlArr[i] += '✅'.repeat(i+1);
    }

    const result = finlArr.join('\n');

    console.log(result);
});