//importing module
import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
console.log('Importing module');

// // console.log(shippingCost);

// addToCart('bread',5);
// console.log(price ,tq);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('chicken',5);

import add, { cart } from './shoppingCart.js';
add('chicken', 7);
add('bread', 17);
add('pizza', 27);
// console.log(price);
console.log(cart);

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

// const getLastPost = async function() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();
//     console.log(data);
//     return {
//         title: data.at(-1).title,
//         text: data.at(-1).body,
//     }
// }

// const lastPost = getLastPost();
// const res = await Promise.all([lastPost]);
// console.log(res);

// lastPost.then(res => console.log(res));

// const res = await lastPost;
// console.log(res);

/////////////MODULE PATTERN
/////////////////////////////
// const ShoppingCart2 = (function(){
//     const cart = [];
//     const shippingCost = 10;
//     const totalPrice = 237;
//     const totalQuantitiy = 23;

//     const addToCart = function(product, quantity){
//         cart.push({product,quantity});
//         console.log(`${quantity} ${product} added to cart!`);
//     }

//     const orderStock = function(product, quantity){
//         console.log(`${quantity} ${product} ordered from supplier!`);
//     }

//     return {
//         addToCart,
//         cart,
//         totalPrice,
//         totalQuantitiy,
//     }
// })();

// console.log(ShoppingCart2.totalPrice);
// console.log(ShoppingCart2);

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    {
      product: 'bread',
      quanity: 5,
    },
    {
      product: 'pizza',
      quanity: 3,
    },
  ],
  user: {
    loggenIn: true,
  },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggenIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

//experimental conversions
console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('success').then(res => console.log(res));
const add = (a, b) => a + b;

import 'core-js/stable';
