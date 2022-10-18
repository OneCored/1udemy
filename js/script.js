"use strict";

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 'Введите');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


// if () {
//     console.log('Ok!');
// } else {
//     console.log('Ne ok!!!');
// }


// if (num < 49) {
//     console.log('net');
// } else if (num < 100) {
//     console.log('mnogo');
// } else {
//     console.log('da');
// }

// (num === 50) ? console.log('DADA') : console.log('NETNET');

// const num = '50';

// switch (num) {
//     case 49:
//         console.log('Neverno');
//         break;
//     case '100':
//         console.log('Neverno');
//         break;
//     case '50':
//         console.log('VERNO');
//         break;
//     default:
//         console.log('SORYAN');
//         break;
// };

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// const hamburger = 5;
// const fries = null;

// if (hamburger && fries) {
//     console.log('Ya sit!');
// };

// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log((hamburger === 3 && cola && fries));

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(1 && 'dfklgjmdklfmgklfd');

// if (hamburger === 3 && cola && fries) {
//     console.log('Vse siti!');
// } else {
//     console.log('Mi uhodim!');
// }


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// console.log((hamburger === 3 && cola === 2 || fries === 3 && nuggets));

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('Vse dovolni!');
// } else {
//     console.log('Mi uhodim!');
// };

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }




// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);


// let num = 50;

// // while (num <= 55) {
// //     console.log(num);
// //     num++;
// // }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 10; i++){
//     if (i === 6) {
//         break;
//     }
//     console.log(i);
// }



// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// };
// for (let j = 20; j > 9; j--) {
//     if (j === 13) break;
//     console.log(j);
//     }

// let result = '';
// const length = 7;
// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }

//     result += '\n';
// }
// console.log(result);

// metka: for (let i = 0; i < 3; i++) {
//         console.log(`First level: ${i}`);
//         for (let j = 0; j < 3; j++) {
//             console.log(`Second level: ${j}`);
//             for (let k = 0; k < 5; k++) {
//                 if (k === 2) break metka;
//                 console.log(`Third level: ${k}`);
//             }
//         }
//     };
//     for (let k = 2; k <= 10; k++) {
//         if (k % 2 == 0) continue;
//         console.log(k);
//     }

//     for (let i = 5; i <=10; i++) {
//         console.log(i);
//     }

//     function fifthTask() {
//         const arrayOfNumbers = [];
    
//         // Пишем решение вот тут
//         for (arrayOfNumbers.[0] = 5; )
        
//         // Не трогаем
//         return arrayOfNumbers;
//     }



//     function firstTask() {
//         // Пишем решение вот тут
//         for (let i = 5; i <= 10; i++) {console.log(i)}
        
//     }
    
//     // Место для второй задачи
//     function secondTask() {
//         // Пишем решение вот тут
//         first: for (let i = 20; i > 10; i--) {
//         if (i === 13) break first;
//         console.log(i);
//     }
        
//     }
    
//     // Место для третьей задачи
//     function thirdTask() {
//         // Пишем решение вот тут
//         second: for (let i = 2; i <= 10; i++) {
//         if (i % 2 !== 0) continue second;
//         console.log(i);
//     }
        
//     }
    
    
//     // Место для четвертой задачи
    
//     // Цикл, который нужно переписать:
    
//     // for (let i = 2; i <= 16; i++) {
//     //     if (i % 2 === 0) {
//     //         continue;
//     //     } else {
//     //         console.log(i);
//     //     }
//     // }
    
//     function fourthTask() {
//         // Пишем решение вот тут
//         let i = 2;
//     third: while (i <= 16) {
//         if (i % 2 === 0) {
//             i++;
//             continue third;
//         } else {
//             console.log(i);
//             i++;
//         }
//     }
        
//     }
    
//     // Место для пятой задачи
    
//     function fifthTask() {
//         const arrayOfNumbers = [];
    
//         // Пишем решение вот тут
//         let arrNumbers = [];
//     for (let i = 5; i <= 10; i++){
//         arrNumbers.push(i);
//     }
//     console.log(arrNumbers);
        
//         // Не трогаем
//         return arrayOfNumbers;
//     }


//     function fourthTask() {
//     // Пишем решение вот тут
//     let l = 1;
//     while (l <= 15) {
//         if (l % 2 !== 0) {
//             l++;
//             continue;
//         } else {
//             l++;
//             console.log(l)
//         }
//     }
    
// }
// function fifthTask() {
//     const arrayOfNumbers = [];

//     // Пишем решение вот тут
//     for (let m = 5; m <= 10; m++) {
//         arrayOfNumbers.push(m);
//     }
//     console.log(arrayOfNumbers);
//     // Не трогаем
//     return arrayOfNumbers;
    
// }


// // Место для первой задачи
// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }
    
//     // Не трогаем
//     console.log(result);
//     return result;
// }

// // Место для второй задачи
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) == 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof(data[i]) == 'string') {
//             data[i] = `${data[i]} - done`
//         }
//     }
//     console.log(data);
    
//     // Не трогаем
//     return data;
// }

// // Место для третьей задачи
// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i]
//     }

//     console.log(result);
//     // Не трогаем
//     return result;
// }



// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)


/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 'Введите');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
    
//     if (a != null && b != null && a !='' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('Error');
//         i--;
//     }  
// }
// if (personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
// } else if (personalMovieDB.count >= 30) {
//     console.log('Вы киноман');
// } else {
//     console.log('Произошла ошибка');
// }

// console.log(personalMovieDB);
// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage('Hello world!!!');
// console.log(num);

// function calc (a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);


// const logger = function() {
//     console.log('Hello');
// };

// logger();



// const calc = (a, b) => a + b;


// console.log(calc(4, 5));
// const amount = 500;
// const usdCurr = 28;
// const eurCurr = 32;
// const discount = 0.9;


// function convert(amount, curr) {
//     return curr * amount;
// }
// function promotion(result) {
//     console.log(result * discount);
// }

// const res = convert(amount, usdCurr);
// promotion(res);


// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) return;
//     }
//     console.log('Done');
// }
// test();

// function doNothing() {}
// console.log(doNothing() === undefined);


// // Место для первой задачи
// function sayHello(name) {
//     return console.log(`Привет, ${name}`); 
// }
// sayHello('Антон');
// // Место для второй задачи
// function returnNeighboringNumbers(fullChislo) {
//     one = fullChislo - 1;
//     three = fullChislo + 1;
//     return console.log([one, fullChislo, three]);
// }
// returnNeighboringNumbers(5);
// // Место для третьей задачи
// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//             // Тут без черточек в конце
//         } else {
//             str += `${num * i}---`;
//             // Это тоже самое, что и
//             // str = str + num * i + "---"
//         }
//     }

// const arr = [1, 2, 3, 5, 4];

// for (let index = 0; index <= arr.length; index++) {
//     console.log(index);
//     console.log(arr[index]);
// }

// const obj = {
//     name: 'max',
//     surname: 'deviatilov',
//     hui: 'pizda',
//     surnamee: 'deviatilovv',
// };

// const obj2 = {
//     max: 'name',
//     deviatilov: 'surname',
//     pizda: 'hui',
//     deviatilovv: 'surnamee'
// };

//написать цикл, в котором итоговым значением каждой итерации будет obj2[value], где value = obj[key]






//     return str;
// }

// getMathResult(10, 5);


// const str = 'teSt';

// console.log(str.toLowerCase());
// const strLower = str.toLowerCase();
// console.log(strLower);

// const fruit = "Some efruit";

// console.log(fruit.indexOf("q"));


// const logg = "Hello world";
// const logg2 = "123456789";
// console.log(logg2.slice(1, 8));
// console.log(logg.substr(6, 5));


// const num = 12.2;

// console.log(Math.round(num));

// const test = "1212.22px 15px";
// console.log(parseInt(test));
// console.log(parseFloat(test));

// Место для первой задачи
// function calculateVolumeAndArea(heigh) {
//     if (heigh !== '' && heigh !== null && Number.isInteger(heigh) && heigh > 0) {
//         console.log(`Объем куба: ${heigh * heigh * heigh}, площадь всей поверхности: ${(heigh * heigh) * 6}`);
//     } else {
//         console.log('При вычислении произошла ошибка');
//     }
// }
// calculateVolumeAndArea(5);
// calculateVolumeAndArea(15);
// calculateVolumeAndArea(15.5);
// calculateVolumeAndArea('15');
// calculateVolumeAndArea(-15);
// // Место для второй задачи
// function getCoupeNumber(mesto) {
//     if (heigh !== '' && heigh !== null && Number.isInteger(heigh) && heigh > 0) {
        
//     } else if (mesto < 0 || mesto >36) {
//         console.log('Таких мест в вагоне не существует');
//     } else {
//         console.log('Ошибка. Проверьте правильность введенного номера места');
//     }
// }



// // Место для первой задачи
// function getTimeFromMinutes() {

// }

// // Место для второй задачи
// function findMaxNumber() {

// }


// function first() {
//     // Do something
//     setTimeout(function(){
//         console.log(1);
//     }, 1500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу ${lang}`);
//     callback();
// }

// function done() {
//     console.log(`Я прошел этот урок`);
// }

// learnJS('JS', done);




// delete options.name;

// console.log(options['colors']['bg']);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let item in options[key]) {
//             console.log(`Svoistvo ${item}, imeet znachenie ${options[key][item]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Svoistvo ${key}, imeet znachenie ${options[key]}`);
//         counter++;
//     }
    
// }

// console.log(counter);


// console.log(Object.keys(options));
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
        stiker: {
            bgg: 'blue'
        }
    },
    makeTest: function() {
        console.log('TEST');
    } 
};
options.makeTest();

const {border, bg} = options.colors;
const {bgg} = options.colors.stiker;
console.log(bgg);

// const lengthOptions = Object.keys(options['colors']['stiker']).length;

// console.log(lengthOptions);