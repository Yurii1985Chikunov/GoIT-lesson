//

// const user = {
//   username: Yurii,
//   age: 25,
//   city: 'Dnipro',
//   country: 'Ukraine',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };
//

// const user = {
//   firstname: 'Vasya',
//   lastname: 'Petrov',
//   age: 25,
// };
// const { age } = user;

// console.log(age);

//

// const rgb = [1, 2, 3, 4, 5];

// const [, , r, g, b, ala = 9] = rgb;
// console.log(r, g, b, ala);

//

// const rgb = [1, 2, 3, 4, 5];

// const [r, ...newArr] = rgb;
// console.log(r, newArr);

//

// const book = {
//   id: '1314562',
//   titel: 'My book',
//   author: 'Vasya',
//   price: 200,
//   pages: 300,
//   year: 2025,
//   genre: 'Fanasy',
// };

//!==============================================

// function getLength(array) {
//   const sumbol = array.join('');
//   return sumbol.length;
// }

// console.log(getLength(['Mango', 'hurries', 'to', 'the', 'train']));

//

// function calculateEngravingPrice(message, pricePerWord) {
//   const words = message.split(' '); // розділяємо рядок на масив слів
//   const totalPrice = words.length * pricePerWord; // множимо кількість слів на ціну
//   return totalPrice;
// }

// function calculateEngravingPrice(message, pricePerWord) {
//   const words = message.split(' ');
//   const totalPrice = words.length * pricePerWord;
//   return totalPrice;
// }

// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));

// function getSlice(array, value) {
//   const index = array.indexOf(value);
//   if (index === -1) {
//     return [];
//   }
//   return array.slice(0, index + 1);
// }

// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Poly'));

//
