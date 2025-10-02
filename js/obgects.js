//const playlist = {
//name: 'My playlist',
// rating: 5,
//isFavorite: true,
// tracks: ['track-1', 'track-2'],
//};
//const arr = ['tototo', 'lalala', 'hello'];
//console.log(playlist); 99% used
//const key = prompt('name key');
//console.log(playlist[key]); //когда не знаем что там будет
//console.log(playlist.lalala); //udefined

///

//playlist.name = 'New playlist'; // перепрописывание
//playlist['rating'] = 4;
//playlist.username = 'Alice';
//console.log(playlist);

////

//const obj = {
//username: 'Alice',
//skills: {
//html: true,
//css: true,
//js: false,
//},
//};
//const obj1 = obj.skills;
//console.log(obj.skills.js);

////

//function foo() {
//console.log('hello'); ///ТАК НЕ ДЕЛАТЬ!!!!!!!!!!!!!!!!!!!
//}
//foo.lalalal = 'tututut';
//console.dir(foo);

/////

//const a = { x: 1, y: 2 }; //посилання на обект 123
//const b = a; //посилання на обект 123//console.log(a === b); //true
//const b = { x: 1, y: 2 };//console.log(a === b); / / false;
//a.x = 100;
//console.log('a', a);
//console.log('b', b);

//////

// const username = 'Alice';
// const age = 20;
// const user = {
//   username,
//   age,
// };
// console.log(user);

///////

// function foo(name, lalala) {
//   return {
//     name,
//     lalala,
//     city: 'Dnipro',
//   };
// }
// console.log(foo('Alice', 20));

///////

// const inputName = 'color'; //значення [ключ] в обьект
// const obj = {
//   [inputName]: 'red',
// };
// console.log(obj);

////

// const feedback = {
//   good: 5,
//   neutral: 3,
//   bad: 10,
// };
// let total = 0;
// for (const key in feedback) {
//   console.log(feedback[key]);
//   total + -feedback[key];
// }
// console.log(total);

// const keys = Object.keys(feedback);
// for (const key of keys) {
//   //console.log(feedback[key]);
//   total += feedback[key];
// }

// for (let i = 0; i < keys.length; i++) {
//   if (i === 1) {
//     console.log(keys[i]);
//   }
// }
// console.log(total);

//

// const feedback = {
//   good: 5,
//   neutral: 3,
//   bad: 10,
// };
// const values = Object.values(feedback);
// for (const num of values) {
//   //onsole.log(num);
//   total += values[num];
// }
// console.log(total);

//

// const user = {
//   name: 'Alice',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// const user2 = {
//   name: 'Petro',
//   age: 30,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiding';
// user.premium = false;

// const userKeys = Object.keys(user);
// for (const key of userKeys) {
//   console.log(`$[key]:${user[key]}`);
// }
//console.log(key);
//console.log(user);

// function foo(obj) {
//     obj.mood = 'happy';
//     obj.hobby = 'skydiving';
//     obj.premium = false;

//     const userKeys = Object.keys(obj);

//     for (const key of userKeys[obj])
// }

//

// const salaries = {
//   alice: 130,
//   petya: 100,
//   yura: 160,
// };
// function summa(obj) {
//   let sum = 0;
//   const values = Object.values(obj);
//   for (const value of values) {
//     sum += value;
//   }
//   return sum;
// }
// console.log(summa(salaries));

//

// const password = 'true';
// const myKey = password; // 'true'
// //console.log(myKey);

// const obj = {
//   [myKey]: false,
// };
// console.log(obj);
