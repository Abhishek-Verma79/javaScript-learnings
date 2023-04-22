'use strict';

// Data needed for a later exercise
// const flights =
  // '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon','tue','wed','thu','fri','sat','sun'];


const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //ES6 enhanced object literals

  openingHours, // name should be same as the outside object's name

  order(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },

  orderDelivery({starterIndex = 1,mainIndex=0,address,time='20:00'}){
    console.log(`Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2 , ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}!`);
  },
  
  orderPizza: function(mainIngredient,...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  
};

//Working with strings
const airline = 'Tap Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

console.log(airline.slice(4));
console.log(airline.slice(4,7));

console.log(airline.slice(0,airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1,-1));


const checkMiddleSeat = function(seat){
  // B and E are middle seats
  const s = seat.slice(-1);
  if(s === 'B' || s === 'E'){
    console.log('You got the middle seat!😬');
  }else{
    console.log('You got lucky!🎉');
  }
}
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Abhishek'));
console.log(typeof new String('Abhishek'));
console.log(typeof new String('Abhishek').slice(1));

console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

//Fix capitalization in name
const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase()+passengerLower.slice(1);
console.log(passengerCorrect);

//comparing email
const email = 'hello@jonas.io';
const loginEmail = '  Hello@JonAs.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

//or

const normalizeEmail = loginEmail.toLowerCase().trim();
console.log(normalizeEmail);
console.log(email === normalizeEmail);

//replacing
const priceGB = '288.97£';
const priceUS = priceGB.replace('£','$').replace(',','.');
console.log(priceUS);

const announcement = 'All passenger come to boarding door 23. Boarding door 23!';
// console.log(announcement.replaceAll('door','gate'));
//or using regular expressions
console.log(announcement.replace(/door/g, 'gate'));


//boolean methods
const plane2 = 'A320neo';
console.log(plane2.includes('320'));
console.log(plane2.includes('320new'));
console.log(plane2.startsWith('A3'));

if(plane2.startsWith('A320') && plane2.endsWith('neo')){
  console.log('part of the new airbus family!');
}

//practice exercise
const checkBaggage = function(items){
  const baggage = items.toLowerCase();
  if(baggage.includes('knife') || baggage.includes('gun')){
    console.log('We can\'t board you with this baggage');
  }else{
    console.log('You can board now. Happy journey!');
  }
};

checkBaggage('I have a laptop, some food and a pocket Knife');
checkBaggage('socks and camera');
checkBaggage('Got some snacks and a gun for protection');



//split
console.log('a+very+nice+string'.split('+'));
console.log('Abhishek Verma'.split(' '));

const [firstName,lastName] = 'Abhishek Verma'.split(' ');
console.log(firstName,lastName);


//join
const fullName = ['Mr.',firstName,lastName.toUpperCase()].join(' ');
console.log(fullName);


const capitalizeName = function(name){
  const names = name.split(' ');
  const namesUpper = [];
  for(const n of names){
    // namesUpper.push(n[0].toUpperCase()+n.slice(1));
    namesUpper.push(n.replace(n[0],n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
}

capitalizeName('jessica ann smith david');
capitalizeName('abhishek verma');


//padding 
const message = 'Go to gate 23';
console.log(message.padEnd(25,'+').padStart(30,'-'));
console.log('Abhishek'.padStart(25,'+').padEnd(30,'-'));


const maskCard = function(number){
  // const str = String(number);
  const str = number + '';
  let strLen = str.length;
  const newStr = str.slice(-4);
  console.log(newStr.padStart(strLen,'*'));

};

maskCard(34734837438);
maskCard(374374383718111);

//repeat
const message2 = 'Bad Weather... All Departues Delayed!';
console.log(message2.repeat(5));

const planesInLine = function(n){
  console.log(`There are ${n} planes in line1 ${'✈️'.repeat(n)}`);
};

planesInLine(5);
planesInLine(2);
planesInLine(12);



/*

//Maps ds
const rest = new Map();
rest.set('name','classico attiano');
rest.set(1,'Firenze, Italy');
console.log(rest.set(2,'Lisbon, portugal'));
rest.set('categories',['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open',11)
.set('close',23)
.set(true,'We are open :D')
.set(false,'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
const openOrClosed = rest.get(time > rest.get('open') && time < rest.get('close'));
console.log(openOrClosed);

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
console.log(rest.size);

const arr = [1,2];
rest.set(arr,'test');
rest.set(document.querySelector('h1'),'heading');
console.log(rest.get(arr));
console.log(rest);

const question = new Map([
  ['question','What is the best programming lang in the world?'],
  [1,'C'],
  [2,'Java'],
  [3,'JavaScript'],
  ['correct',3],
  [true,'correct🎉'],
  [false,'Try again!'],
]);

console.log(question);

//convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
// console.log(hoursMap.get('fri'));

// maps are also iterable
//quiz app
console.log(question.get('question'));
for(const [key,value] of question){
  if(typeof key === 'number'){
    console.log(`Answer ${key}: ${value}`);
  }
}


// const ans = Number(prompt('Your answer?'));
const ans = 3;
console.log(ans);
console.log(question.get(question.get('correct') === ans));
// if(ans === question.get('correct')){
//   console.log(question.get(true));
// }else{
//   console.log(question.get(false));
// }

//convert map to array
console.log(...question);
console.log(question.entries());
console.log(...question.keys());
console.log(...question.values());

*/




/*
// SET ds
const ordersSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'risotto',
  'pasta',
  'pizza',
]);
console.log(ordersSet);

console.log(new Set('abhishek'));

console.log(ordersSet.size);

console.log(ordersSet.has('pizza'));
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread'); 
ordersSet.add('Garlic Bread'); // only one garlic bread will be added
// ordersSet.clear();
// console.log(ordersSet[2]); // it'll give undefined
ordersSet.delete('risotto');
console.log(ordersSet);

for(const order of ordersSet) console.log(order);

//Example
const staff = ['Waiter','chef','Waiter', 'Manager', 'chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['Waiter','chef','Waiter', 'Manager', 'chef', 'Waiter']).size);
console.log(new Set('Abhishek').size);

*/



/*

//Looping objects
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `;

for(const day of properties){
  // console.log(day);
  openStr += `${day}, `;
}
console.log(openStr);

// for property values
const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

for(const [key,{open:o,close:c}] of entries){
  console.log(`On ${key} we open at ${o} and close at ${c}`);
}
*/



/*
//Optional chaining
if(restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// if(restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

//With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ['mon','tue','wed','thu','fri','sat','sun'];
for(const day of days){
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);

}
console.log(restaurant.order?.(0,1) ?? 'Method doesn\'t exist');
console.log(restaurant.orderRissato?.(0,1) ?? 'Method doesn\'t exist');

//optional chaining also work in arrays
const users = [{
  name: 'jonas',
  email: 'abc@gmail.com',
}];
// const users = []; // User Array is Empty will be the ouput;
console.log(users[0]?.name ?? 'User Array is Empty!');
*/



/*
//For of loop
const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
for(const item of menu) console.log(item); // for of loop
for(const [i,el] of menu.entries()){
  // console.log(`${item[0]+1}: ${item[1]}`);
  console.log(`${i+1}: ${el}`);
}
*/


/*
//Logical assignment operator
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La piazza',
  owner: 'Giovanni Rossi',
};
// OR Assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish Assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

*/




/*
//short circuiting
console.log('-----OR-----');
console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(null || undefined);
console.log(undefined || 0 || null || 12 || 'Hello');

// restaurant.numGuests = 0;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// const guest2 = restaurant.numGuests || 10;
// console.log(guest1 , guest2); // here is a problem in the above logic

// it's solution
restaurant.numGuests = 0;

const guest1 = restaurant.numGuests || 10;
const guest2 = restaurant.numGuests ?? 10; // it only caches the nullish values : null or undefined NOT INCLUDE(0 or '');
console.log(guest1 , guest2);

console.log('-----AND-----');
console.log(0 && 'jonas');
console.log(7 && 'jonas');
console.log('jonas'&& 0);
console.log('jonas' && 23 && null && 'hello');
//practical example
if(restaurant.orderPizza){
  restaurant.orderPizza('mushrooms','spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach');
*/



/*
//Destructuring
// Spread operator / because on the right side of =
const arr = [1,2,...[5,6]];

// Rest operator / because on the left side of =
const [a,b,...others] = [4,5,6,8,9,10];
console.log(others);


// spraed and rest together
const [pizza, , Risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza,Risotto,otherFood); // rest parameter can be used only once and always at the end of the array

//objects
const {sat,...weekdays} = restaurant.openingHours;
console.log(weekdays);

// Functions
const add = function(...numbers){
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  console.log(sum);
}
add(2,3);
add(2,3,5);
add(1,2,3,4,5,6,7,8,9,10);

const x = [2,3,5];
add(...x);

// with our own restaurent object
restaurant.orderPizza('mushrooms','onions','olives','spinach');
restaurant.orderPizza('mushrooms');

*/




/*

restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del sol 21',
    mainIndex: 2,
    starterIndex: 2,

});
restaurant.orderDelivery({
    address: 'Via del sol 21',

});

//Spread operator(...)
//old style
const arr = [7,8,9];
const badNewArray = [1,2,arr[0],arr[1],arr[2]];
console.log(badNewArray);

//new way
const newArr = [1,2,...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
console.log(restaurant.mainMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];
mainMenuCopy.push('newDish');
console.log(mainMenuCopy);
console.log(restaurant.mainMenu);

// join 2 arrays
const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
console.log(menu);

//Iterables: arrays, strings, maps, sets but not objects
const str = 'jonas';
const letters = [...str,' ','S.'];
console.log(letters);

//calling function that accept multiple arguments and we can use spread operator here
// const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Let\'s make pasta! Ingredient 2?'), prompt('Let\'s make pasta! Ingredient 3?')];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

//in Objects
const newRestaurant = {foundedIn: 1998, ...restaurant,founder: 'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'newName';
console.log(restaurantCopy.name, restaurant.name);

*/



/*
//Object destructuring

//new objects names should be same as inside the obj
const {name,openingHours,categories} = restaurant;
console.log(name,openingHours,categories);

//if we want to change the new objs names
const {name:restaurantName,openingHours:hours,categories:tags} = restaurant;
console.log(restaurantName,hours,tags);

//setting defualt values if properties doesn't exist in the main object
const {menu = [] , starterMenu: starters = []} = restaurant;
console.log(menu,starters);

//mutating variables
let a = 111;
let b = 999;
const obj = {a:23 , b: 7 , c:14};
//want to change the values of 'a' and 'b'
({a,b} = obj);
console.log(a,b);

//nested objects
const {fri:{open:o, close:c}} = openingHours;
console.log(o,c);
*/





/*
// Array destructuring
let [main, ,secondary] = restaurant.categories;
console.log(main,secondary);

//Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary);

[main,secondary] = [secondary,main];
console.log(main,secondary);

const [starter,mainCourse] = restaurant.order(2,0);
console.log(starter,mainCourse);

//nested destructuring
const nested = [2,4,[5,6]];
// const [i, , j] = nested;
// console.log(i,j);

const [i, , [j,k]] = nested;
console.log(i,j,k);

//default values
const [p = 1,q = 1,r = 1] = [8,9]; 
console.log(p,q,r);
*/