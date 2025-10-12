// const x = 25; //string, true ,false

// function foo(value) {
//   console.log(value);
//   value();
// }

// const userData = function name(params) {
//   console.log('Call Value');
// };
// foo(userData);

//

// function myDay(food, instruction) {
//   console.log('Wake Up');
//   console.log('Breakfest');
//   console.log('Go to Shcool');
//   console.log('Come back');
//   instruction();
//   console.log('');
// }
// myDay();

//

// function test(value, callBack) {
//   callBack(value);
// }
// const x = 25;

// const y = function (number) {
//   console.log(number * 2);
// };
// test(x, y);

//

// function calk(a, b, callback) {
//   const res = callback(a, b);
//   console.log(res);
// }

// function sum(x1, x2) {
//   return x1 + x2;
// }
// calk(4, 5, sum);

//

// function each(array, callback) {
//   const res = [];
//   for (const el of array) {
//     const value = callback(el);
//     res.push(value);
//   }
//   return res;
// }

// each([1, 2, 34, 5, 2], function myFunction(el) {
//   return el * 2;
// });

//

// function myFunction(x) {
//   return x * 2;
// }
// myFunction(10);

// x => x * 2;
// myFunction(10);

// // function add(a, b, c) {
// //   return a + b + c;
// // }

//

// cancelIdleCallback(2,3,(x,y)=> x-y)

//

// (() => {})();

//

// const numbers = [5, 10, 15, 20, 25];
// let total = 0;

// function myCallback() {
//   console.log('Paint');
// }

// numbers.forEach(myCallback);

// myCallback(5,0)
// myCallback(10,1)
// myCallback(15,2)
// myCallback(20,3)
// myCallback(25,4)

//

// numbers.forEach(() => {});
// numbers.map(() => {});
// numbers.flatMap(() => {});
// numbers.filter(() => {});
// numbers.find(() => {});
// numbers.some(() => {});
// numbers.every(() => {});
// numbers.findIndex(() => {});
// numbers.findLastIndex(() => {});

//

// const numbers = [5, 10, 15, 20, 25];
// numbers.forEach((el, i) => {
//   console.log(el * i);
// });

//

// const arr = [{ name: 'Vasya', age: 52 }];
// arr.forEach(user => {
//   console.log(`"My name is ${arr.name}"`);
// });

//

// const arr = [1, 2, 3];
// function myCallBack(el) {
//   return `item=${el}`;
// }
// const res = arr.map(myCallBack);

// console.log(res);

// const products = [
//   { titel: 'Apples', price: 24 },
//   { titel: 'Apples2', price: 30 },
//   { titel: 'Apples3', price: 14 },
//   { titel: 'Apples4', price: 44 },
//   { titel: 'Apples5', price: 32 },
// ];
// const productsUpdate= products.map

//

// const products = [
//   { name: 'Apple', category: 'fruits', price: 1.2, stock: 50 },
//   { name: 'Banana', category: 'fruits', price: 0.8, stock: 100 },
//   { name: 'Carrot', category: 'vegetables', price: 0.5, stock: 200 },
//   { name: 'Broccoli', category: 'vegetables', price: 1.0, stock: 150 },
//   { name: 'Milk', category: 'dairy', price: 1.5, stock: 20 },
//   { name: 'Cheese', category: 'dairy', price: 2.5, stock: 5 },
//   { name: 'Chicken', category: 'meat', price: 5.0, stock: 30 },
//   { name: 'Beef', category: 'meat', price: 7.0, stock: 25 },
// ];

// function areAllDairyStockAboveTen(products) {
//   return products
//     .filter(product => product.category === 'dairy')
//     .every(product => product.stock > 10);
// }

// console.log(areAllDairyStockAboveTen(products));

//
