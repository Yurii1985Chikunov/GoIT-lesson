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

// 03.10.2025//

// const friends = [
//   { name: 'Ross', online: false },
//   { name: 'Joey', online: true },
//   { name: 'Chandler', online: false },
//   { name: 'Phoeby', online: true },
//   { name: 'Monica', online: true },
//   { name: 'Rachel', online: false },
// ];

// function findByName(allFriends, friendName) {
//     for (const friend of allFriends) {
//         if (friend.name.toLowerCase() === friendName.toLowerCase()) {
//             return friend;
//         }
//     }
//     return 'Not found';

// }
// console.log(findByName(friends, "raChel"));

// function getAllNames(arr) {
//   const names = [];
//   for (const item of arr) {
//     names.push(item.name);
//   }
//   return names;
// }
// console.log(getAllNames(friends));

// function getOnlineFriends(arr) {
//   const onlineFriends = [];
//   for (const friend of arr);
//   if (friends.online) {
//     onlineFriends.push(friends.name);
//   }
//   return onlineFriends;
// }
// console.log(getOnlineFriends(friends));

//

// const stones = [
//   { name: 'Смарагд', price: 1300, quantiti: 4 },
//   { name: 'Діамант', price: 2700, quantiti: 3 },
//   { name: 'Сапфир', price: 400, quantiti: 7 },
//   { name: 'Щебінь', price: 200, quantiti: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   let sum = 0;

//   for (const item of stones) {
//     if (item.name === stoneName) {
//       sum += item.price * item.quantiti;
//     }
//   }
//   return sum;
// }
// console.log(calcTotalPrice(stones, 'Сапфір'));

//

// const playlist = {
//   name: 'My playlist',
//   rating: 5,
//   changeName(newName) {
//     // console.log('this', this);
//     // playlist.name = newName;
//     this.name = newName;
//   },
// };
// playlist.changeName('New playlist');

// const sportPlaylist = {
//   name: 'Sport playlist',
//   rating: 4,
// };

// sportPlaylist.changeSportName = playlist.changeName;

// sportPlaylist.changeSportName('Angry playlist');

// playlist.changeName('lalala');

// console.log('sportPlaylist', sportPlaylist);
// console.log('playlist', playlist);

//

// const playlist = {
//   name: ' My playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2'],
//   changeName(newName) {
//     this.name = newName;
//     },
//     addTrack(newTrack) {
//         this.tracks.push(newTrack);
//     },
//     updateRating(newRating) {

//     }
// };

//

// function foo() {
//   console.log('this', this);
// }
// foo();

//

// ... rest operator > masive
// function sum(...args) {
//   console.log(args);
// }
// sum({ name: 'Alice' });
// sum(1, 2);
// sum(10, 20, 30);
// sum(100, 200, 300, 400);

// ... right of = "[] < spred operator"
// const numbers = [1000, ...[2, 3, 4], 5000, [6, 7, 8], 9000];
// console.log(numbers);

// const arr = [20, 2, 6, 12, 1, 31, 9];
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));

//

// const a = [1, 2, 3];
// const a = [{ x: 1 }, { y: 2 }];
// const b = [...a];

// console.log(a === b);
// a[0].x = 100;
// console.log('a', a);
// console.log('b', b);

//

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allWeekTemps = [...nextWeekTemps, ...currentTemps, ...lastWeekTemps];
// console.log(allWeekTemps);

//

// const objA = { x: 1, y: 2 };
// const objB = { x: 0, q: 3 };

// const objC = {
//   ...objA, //x:1,y:2
//   x: 10, // x:10,y:2
//   ...objB, //x:0,y:2,q:3
//   y: 20, // x:0,y:20,q:3
// };
// console.log(objC);

//

// const defaultSeting = {
//   theme: 'light',
//   showNotification: true,
//   hideSidebar: false,
// };

// const usertSeting = {
//   showNotification: false,
//   hideSidebar: true,
// };
// const finalSeting = {
//   ...defaultSeting,
//   ...usertSeting,
// };
// console.log(finalSeting);

//

// const Transction = {
//   DEPOSIT: 'deposit',
//   WITHDRAFT: 'withdraft',
// };

// const account = {
//   //
//   balanse: 0,
//   //
//   transaction: [],
//   //
//   createTransaction(amount, type) {
//     const obj = {
//       id: amount,
//       amount,
//       type,
//     };
//     return obj;
//   },
//   //
//   deposit(amount) {
//     this.balanse += amount;
//     const transaction = this.createTransaction(amount, Transction.DEPOSIT);
//   },
//   //
//   withdraft(amount) {
//     if (this.balanse < amount) {
//       console.log('Not money');
//     }
//     this.balanse -= amount;
//     const transation = this.createTransaction(amount, Transction.WITHDRAFT);
//     this.transaction.push(transaction);
//   },
//   //
//   getBalanse() {
//     return this.balanse;
//   },
//   //
//   getTransactionDetails(id) {
//     for (const item of this.transaction) {
//       if (item.id === id) {
//         return item;
//       }
//     }
//     return 'Hohoho';
//   },
//   //
//   getTransactionTotal(type) {
//     let total = 0;
//     for (const item of this.transaction) {
//       if (item.type === type) {
//         total += item.amount;
//       }
//     }
//     return total;
//   },
// };
// account.deposit(300);
// account.deposit(100);

// console.log(300);
// console.log(account);
