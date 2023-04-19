'use strict';

function calcAge(birthYear){
    const age = 2023 - birthYear;
    
    function printAge(){
        let output = `${firstName}, You are ${age}, born in ${birthYear}`;
        console.log(output);
        if(birthYear >= 1981 && birthYear <= 1996){
            output = 'NEW OUTPUT';
            const firstName = 'Wrma';
            const str = `Ohh, and you are a millennial ${firstName}!`;
            console.log(str);
        }
        console.log(output);
    }
    // console.log(str);
    printAge();
    return age;
}

const firstName = 'Abhishek';
calcAge(1990);