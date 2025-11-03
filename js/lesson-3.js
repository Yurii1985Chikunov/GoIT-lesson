// function checkStorage(storage, item) {
//   var lowerItem = item.toLowerCase();

//   for (var i = 0; i < storage.length; i++) {
//     if (storage[i].toLowerCase() === lowerItem) {
//       return lowerItem + ' is available to order!';
//     }
//   }

//   return 'Sorry! We are out of stock!';
// }

// console.log(checkStorage(['apple', 'plum', 'pear'], 'pEAr'));

//

// function getCommonElements(array1, array2) {
//   const arr3 = [];
//   for (let i = 0; i < array1.length; i++) {
//     const element = array1[i];
//     if (array2.includes(element)) {
//       arr3.push(element);
//     }
//   }
//   return arr3;
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

//

// const planets = ['Earth', 'Mars', 'Venus'];

// for (const planet of planets) {
//   console.log(planet);
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const item of order) {
//     total += item;
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// sum(2, 5);

//

// function multiply() {
//   let total = 1;

//   for (const arg of arguments) {
//     total *= arg;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

//

// function multiply() {
//     let total = 1;

//     for (const arg of arguments) {
//       total *= arg;
//     }

//     return total;
//   }

//   console.log(multiply(1, 2, 3)); //  6
//   console.log(multiply(1, 2, 3, 4)); //  24
//   console.log(multiply(1, 2, 3, 4, 5)); //  120

//

// function foo() {
//   // У змінній args буде повноцінний масив з усіх аргументів
//   const args = Array.from(arguments);
//   return args.join('-');
// }

// console.log(foo(1, 2, 3)); // Поверне "1-2-3"

//

// function createReversedArray() {
//   const arr = Array.from(arguments);
//   return arr.toReversed();
// }

// console.log(createReversedArray(12, 85, 37, 4));

//

function calculateTax(amount, taxRate = 0.2) {
  let tax = amount * taxRate;
  //   for (const arg of arguments) {
  //     total *= arg;
  //   }
  return tax;
}

console.log(calculateTax(100));
