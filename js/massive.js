//**
// Массиви
//
// - створеня массиву
// - доступ до елементів
// - перевизначеня знасення елемента
// - довжина массиву
// - індекс останнього масиву
// - перевизначення  */

//const x = [1, 3, 4, 45];
//console.log(x[4]);
//x[2] = 'Hello';
//x[50] = 'Hello world!';
//console.log(x);

//const arr = [2, 3, 4, 5, 6, 7, 8, 9, 8, 12, 13, 14, 15, 6, 33, 44, 55, 66];
//console.log(arr.length);

//const arr = [1, 3, 5, 1];
//const len = arr.lenght;
//console.log(len);
//console.log(arr[len - 1]);

//**
//  */

//const arr = [12, 0, 5, 3, 7];
//console.log(arr[3]);

//const x = [
//[1, 2, 3],
//[4, 5, 6],
//];
//console.log(x[0][0]);

//** методи масву
//
// - join
// - split рядок
// - slice
// - splise
// - concat
// - indexOf
// - pysh/pop
//*/

//const str = 'HTML, CSS, JawaScript, React';
//const arr = str.split('');
//console.log(arr.length);

//const arr = [1, 2, 3, 44, 54];
//arr.splice = (2, 3, 'Hello', 'World');
//console.log(arr);

//const arr1 = [1, 2, 3, 4];
//const arr2 = [5, 6, 7, 8];

//const res = arr1.concat
// const res = [].concat (arr1)

//**
// Итерация по масиву
//
// ітерация по масиву циклом for
//  метод includes
//  цикли  for...of
//  різниуя у використані for та for...of */

//const arr = [1, 2, 3];
//for (let i = 0; i < arr.length; i++) {
//arr[i] *= 2;
//}
//console.log(arr);

//const values = '25 10';
//const number = values.split(' ');
//const height = +number[0];
//const widht = +number[1];
//const area = height * widht;
//console.log(area);

//function toggleModalVisibility(isVisible) {
//if (!isVisible === false) {
//return 'false';
//} else {
//return 'true';
//}
//}
//console.log(toggleModalVisibility(true));
//console.log(toggleModalVisibility(false));

//function checkForName(fullName, firstName) {
//fullName === fullName.toLowerCase();
//firstName === firstName.toLowerCase();

//return fullName.includes(firstName);
//}

//console.log(checkForName('Jason Neis', 'Jason'));
//console.log(checkForName('Jason Neis', 'Jacob'));
//console.log(checkForName('Jason Neis', 'Jacob'));
//console.log(checkForName('Jason Neis', 'Jacob'));
//console.log(checkForName('Jason Neis', 'Jacob'));

//function checkFileExtension(fileName, ext) {
//if (fileName.endsWith(ext)) {
//return 'File extension matches';
//} else {
//return 'File extension does not match';
//}
//}
//console.log(checkFileExtension('index.html', '.js'));

//function getFileName(file) {
//const dotIndex = file.indexOf('.');
//if (dotIndex === -1) {
//return file;
//}
//return file.slice(0, dotIndex);
//}
//console.log(getFileName('index.css'));
//console.log(getFileName('app'));

//function createFileName(name, ext) {
//return `${name.trim()}.${ext}`;
//}

//console.log(createFileName(' order ', 'txt'));

//function getLastElementMeta(array) {
//const lastElementIndex = array.length - 1;
//const lastName = array[lastElementIndex];
//return [lastElementIndex, lastName];
//}
//console.log(getLastElementMeta(['apple', 'peach', 'pear', 'banana']));

//function getExtremeElements(array) {
//const firstElement = array[0];
//const lastElement = array[array.length - 1];
//return [firstElement, lastElement];
//}
//console.log(getExtremeElements([1, 2, 3, 4, 5]));
//console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));
