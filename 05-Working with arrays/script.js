"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
// displayMovements(account1.movements);

//calculate the global balance and print that
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

// computing username
const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

createUsername(accounts);

// display calculated summary
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter(
      (int, i, arr) =>
        // {
        // console.log(arr);
        // return int >= 1;
        int >= 1
      // }
    )
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest}€`;
};
// calcDisplaySummary(account1.movements);

const updateUI = function (acc) {
  //Display movements
  displayMovements(currAccount.movements);
  //Display balance
  calcDisplayBalance(currAccount);
  //Display summary
  calcDisplaySummary(currAccount);
};

//implementing login
//eventHandler
let currAccount;
btnLogin.addEventListener("click", function (e) {
  //prevent form from submitting automatically
  e.preventDefault();

  currAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  // console.log(currAccount);
  if (currAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = "100";
    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    //updating the UI
    updateUI(currAccount);
  }
});

// tranferring money from one acc to other
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  // console.log(amount,receiverAcc);
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currAccount.balance >= amount &&
    receiverAcc?.username !== currAccount.username
  ) {
    //doing the transfer here
    currAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currAccount.movements.some((mov) => mov >= amount * 0.1)) {
    //add movement
    currAccount.movements.push(amount);

    //update UI
    updateUI(currAccount);
  }
  inputLoanAmount.value = "";
});

//closing the account
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currAccount.username &&
    Number(inputClosePin.value) === currAccount.pin
  ) {
    const ind = accounts.findIndex(
      (acc) => acc.username === currAccount.username
    );
    accounts.splice(ind, 1);
    containerApp.style.opacity = "0";
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*

let arr = ['a','b','c','d','e'];

//slice method
console.log(arr.slice(2,3));
console.log(arr.slice(-2));



// SPLICE
// console.log(arr.splice(2));
console.log(arr.splice(1,2)); // from index 1 we want to delete 2 ele
console.log(arr);

// REVERSE
arr = ['a','b','c','d','e'];
const arr2 = ['d','c','b','a'];
console.log(arr2.reverse()); // mutates the original array
console.log(arr2);

//CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr,...arr2]);

// JOIN
console.log(typeof letters.join(' - '));


// at methods
const a = [23,11,64];
console.log(a[0]);
console.log(a.at(0));

//getting last array element
console.log(a[a.length-1]);
console.log(a.slice(-1)[0]);
console.log(a.at(-1));

*/

/*
//foreach loop
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// using for of loop
// for(const movement of movements){
  for(const [i,movement] of movements.entries()){
  if(movement > 0) console.log(`Movement ${i+1}: You deposited ${movement}`);
  else console.log(`Movement ${i+1}: You withdrew ${Math.abs(movement)}`);
}

console.log('---ForEach---');
// using foreach loop
movements.forEach(function(movement,index,arr){
  if(movement > 0) console.log(`Movement ${index+1}: You deposited ${movement}`);
  else console.log(`Movement ${index+1}: You withdrew ${Math.abs(movement)}`);
});

*/

/*
//foreach with maps and sets
//map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value,key,map){
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD','GBP','USD','EUR','EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value,_,set){
  console.log(`${value}: ${value}`); // key and values are same here
});
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*

// map methods
const euroToUsd = 1.1;

// const movsUsd = movements.map(function(mov){
//   return mov * euroToUsd; // original array won't be mutated
// });

// console.log(movsUsd);

//same thing with arrow func syntax
const movsUsdArrow = movements.map( mov => mov * euroToUsd);

console.log(movsUsdArrow);

const moveDescription = movements.map((mov,i) => `Movement ${i+1}: You ${mov > 0 ? 'deposited': 'withdrew'} ${Math.abs(mov)}`);

console.log(moveDescription);

*/

/*
//filter method
// console.log(movements);
const deposits = movements.filter(function(mov){
  return mov > 0;
});
// const deposits = movements.filter(mov => mov > 0); // arrow func for same task

console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

*/

/*
//reduce method
// acc is like a snowball
const balance = movements.reduce(function(acc, mov, i , arr){
  console.log(`Iteration ${i}: ${acc}`);
  return acc + mov;
}, 0);
// const balance = movements.reduce((acc,mov) => acc + mov,0);
console.log(balance);

//maximum value from the array
const maxVal = movements.reduce((acc,mov) => {
  if(acc > mov) return acc;
  else return mov;
},movements[0]);

console.log(maxVal);
*/

/*

// magic of method chaining
const euroToUsd = 1.1;
//PIPELINE
const totalDeposits = movements
  .filter((mov) => mov > 0)
  // .map((mov,i,arr) => {
  //   console.log(arr); // to check if prev method in the chain worked fine or is there any kind of error bcz of that method
  //   return mov * euroToUsd;
  // })
  .map((mov) => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDeposits);
*/

/*
// find method
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

//doing same thing with for of loop
// let account = {};
// for(const acc of accounts){
//   if(acc.owner === 'Jessica Davis'){
//     account = acc;
//     break;
//   }
// }
// console.log(account);
*/

/*
//some and every method
console.log(movements);
console.log(movements.includes(-130));

// condition
const anyDeposits =  movements.some(mov => mov > 0);
console.log(anyDeposits);


//every method
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

*/

/*
//flat and flatmap

const arr = [[1,2,3],[4,5,6],7,8];
console.log(arr.flat());
const arrDeep = [[[1,2,3],[4,5,6]],7,8];
console.log(arrDeep.flat(2));

// const accMovements = accounts.map(acc => acc.movements);
// const allMovements = accMovements.flat();
// const overalBalance = allMovements.reduce((acc,mov) => acc + mov,0);

const overalBalance = accounts.map(acc => acc.movements).flat().reduce((acc,mov) => acc + mov,0);
console.log(overalBalance);
*/

/*
// sorting
//strings
const owners = ['Abhishek','abhinav','Abhi','shek','jonas','jessica'];
console.log(owners.sort());
console.log(owners);

//nubmers
console.log(movements);
// console.log(movements.sort()); // will sort elements based on strings

//ascending
//return < 0 a,b (keep order)
//return > 0 b,a (switch order)
// movements.sort((a,b) => a > b ? 1 : -1);
movements.sort((a,b) => a - b);

console.log(movements);

//descending
// movements.sort((a,b) => a < b ? 1 : -1);
movements.sort((a,b) => b - a);
console.log(movements);

*/

/*
// some more methods
const arr = [1,2,3,45];

//empty arrays + fill method
const x = new Array(7);
x.fill(1,3,5);
x.fill(1);
console.log(x);

arr.fill(23,2,5);

//Array.from
const y = Array.from({length: 7}, () => 1);
console.log(y);
const z = Array.from({length: 10}, (_, i) => i + 1);
console.log(z);
const diceRoll = Array.from({length: 100}, () => Math.trunc(Math.random() * 100) + 1);
console.log(diceRoll);

// //label balance from the UI, get the data directly from UI
// labelBalance.addEventListener('click',function(){
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€',''))
//     );
//     console.log(movementsUI);
//     const movementsUI2 = [...document.querySelectorAll('.movements__value')];
//     console.log(movementsUI2);
// });

*/

// array methods practice

//find number of deposits that are greater that 1000
const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov >= 1000).length;

const numDepWithReduce = accounts
  .flatMap((acc) => acc.movements)
  .reduce((cnt, mov) => (mov >= 1000 ? cnt + 1 : cnt), 0);
console.log(numDeposits1000, numDepWithReduce);

//2
const { deposits, withdrawals } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
      sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

//3rd exercise convert any string into title Case
const convertTitleCase = function (title) {
  const exceptions = ["a", "an", "the", "but", "or", "on", "in", "with",'and'];
  const firstToUp = function(word){
    return word[0].toUpperCase() + word.slice(1)
  };
  const titleCase = title.toLowerCase().split(" ").map(word => exceptions.includes(word) ? word : firstToUp(word)).join(' ');
  return firstToUp(titleCase);
};

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another title with with an EXAMPLE"));
