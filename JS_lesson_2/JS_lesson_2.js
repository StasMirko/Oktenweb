// / **************************************************************************************************************1
// --створити масив та вивести його в консоль:
//     - з 5 числових значень

// let m1 = [10, 20, 30, 40, 50];
// console.log(m1);
// *****************************************************************************************************************2

// - з 5 стічкових значень

// let m2 = ['stas', 'orest', 'tana', 'ihor', 'vitaliy'];
// console.log(m2);

// *****************************************************************************************************************3

// - з 5 значень стрічкового, числового та булевого типу

// let m3 = ['stas', '27', 27, true, false];
// console.log(m3);

// ******************************************************************************************************************4

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let m4 = [];
// m4[0] = 1;
// m4[1] = 'stas';
// m4[2] = true;
//
// console.log(m4);

// ******************************************************************************************************************5

//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i<10; i++) {
//     document.write('<div style="height: 30px; background: green; margin: 4px">lorem</div>');
// }

// *******************************************************************************************************************6

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i<10; i++) {
//     document.write('<div style="height: 30px; background: green; margin: 4px">lorem'+i+'</div>');
// }

// ********************************************************************************************************************7

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
//
// while (i<20) {
//     i++
//     document.write('<h1>lorem</h1>');
// }

// ****************************************************************************************************************8

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
//
// while (i<20) {
//     i++
//     document.write('<h1>lorem'+i+'</h1>');
// }

// *******************************************************************************************************************9

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let m1 = [1,2,3,4,5,6,7,8,9,0];
//
// for (let i = 0; i<m1.length; i++) {
//     console.log(m1[i]);
// }

// const arr = [12,23,34,45,55556,67,78,89,90,100];
//
// for (let i = 0; i < arr.length; i+=2){
//     console.log(arr[i]);
// }

// ****************************************************************************************************************10

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
// let m1 = ['s1','s2','s3','s4','s5','s6','s7','s8','s9','s10'];
//
// for (let i = 0; i<m1.length; i++) {
//     console.log(m1[i]);
// }

// *************************************************************************************************************11

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let m1 = ['s1',67,'s3',98,'s5','s6',true,null,false,'s10'];
//
// for (let i = 0; i<m1.length; i++) {
//     console.log(m1[i]);
// }

// *************************************************************************************************************12

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи

// let m1 = ['s1',67,'s3',98,'s5','s6',true,null,false,'s10'];
// //



// for (let i = 0; i<m1.length; i++) {
//     if (typeof m1[i] === "boolean" ){          // можна також подібно шукати 'function', 'undefanded'...
//         console.log(m1[i])
//     }
// }


// ****************************************************************************************************************13

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи

// let m1 = ['s1',67,'s3',98,'s5','s6',true,null,false,'s10'];
//
// for (let i = 0; i<m1.length; i++) {
//     if (typeof m1[i] === "number" ){
//         console.log(m1[i])
//     }
// }


// *****************************************************************************************************************14



// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи

// let m1 = ['s1',67,'s3',98,'s5','s6',true,null,false,'s10'];
//
// for (let i = 0; i<m1.length; i++) {
//     if (typeof m1[i] === "string" ){
//         console.log(m1[i])
//     }
// }


// ****************************************************************************************************************15

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.


// let m1 = [];
//
// m1[0] = 'str1';
// m1[1] = 2;
// m1[2] = true;
// m1[3] = null;
// m1[4] = false;
// m1[5] = 'str2';
// m1[6] = 'str3';
// m1[7] = 8;
// m1[8] = 9;
// m1[9] = 10;
//
// console.log(m1);

// ******************************************************************************************************************16

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i=0; i<10; i++) {
//     console.log(i);
//     document.write(i);
// }

// **************************************************************************************************************17

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i=0; i<100; i++) {
//     console.log(i);
//     document.write(i);
// }

// ******************************************************************************************************************18

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write


// for (let i=0; i<100; i+=2) {
//     console.log(i);
//     document.write(i);
// }

// ****************************************************************************************************************19

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i=0; i<100; i++) {
//     if (!(i % 2)) {
//         console.log(i);
//         document.write(i);
//     }
// }

// *************************************************************************************************************20

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i=0; i<100; i++) {
//     if (i % 2) {
//         console.log(i);
//         document.write(i);
//     }
// }

// ***************************************************************************************************************21

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

for (let i = 0; i<3; i++){
    for (let j = 0; j<60; j++){
        console.log(i + 'hv' + j + 's');
    }
}


// *****************************************************************************************************************22

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
//
// for (let i = 0; i <3; i++){
//     for (let j = 0; j< 60; j++){
//         for (let k = 0; k<60; k++){
//             if (i<2 || (i===2 && j<20) || (i===2 && j === 20 && k === 0)){
//                 console.log(i + 'hod'+ j + 'hv' + k + 's')
//             }
//         }
//     }
// }














// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 60; j++) {
//         for (let k =0; k<60; k++) {
//             if (i<2) {
//                 console.log(i + 'год', j + 'хв', k + 'с')
//             } else if (j<20) {
//                 console.log(i + 'год', j + 'хв', k + 'с')
//
//             } else if (j===20 && k===0) {
//                 console.log(i + 'год', j + 'хв', k + 'с')
//             }
//         }
//     }
// }


// ****************************************************************************************************************23

// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.


// let m = [ 'a', 'b', 'c'];
//
// let m2 = '';
//
// for (let i=0; i<m.length; i++) {
//     m2 = m2 + m[i];
// }
// console.log(m2);

// ******************************************************************************************************************24

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let m1 = ['a', 'b', 'c'];
//
// let i = 0;
//
// let orec = '';
//
// while ( i < m1.length) {
//     orec = orec + m1[i];
//     i++
// }
//
// console.log(orec);


// ******************************************************************************************************************25

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let m = ['a', 'b', 'c'];

let pust = '';

for (let i of m) {
    pust = pust + i;
}

console.log(pust);
// ******************************************************************************************************************

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.

// let m = [ 'a', 'b', 'c'];
//
// let m2 = '';
//
// for (const mKey in m) {
//     m2 = m2 + m[mKey];
// }
//
// console.log(m2);

//******************************************************************************************************************
// =================
// =================
// =================
// =================
//*****************************************************************************************************************

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
//
// let m1 = ['a', 'b', 'c'];
//
// for (let i = 1; i < 4; i++) {
//     // m1.push(i)
//     m1[m1.length] = i
// }
//
// console.log(m1);
// console.log([...m1, 1, 2, 3]);            // spret operete


// *********************************************************************************************************


// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
//
// let numbers = [1, 2, 3, true, 'start'];

// numbers.reverse();
// console.log(numbers);

// let new_mas = [];
//
// for (let i = 0; i < numbers.length; i++) {
//     new_mas.unshift(numbers[i]);
// }

// console.log(new_mas);

// ***************************************************************************************************************

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// let m1 = [1, 2, 3] ;
//
// for (let i = 4; i < 7; i++) {
//     m1.push(i)
// }
//
// console.log(m1);

// **********************************************************************************************************

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// let m1 = [1, 2, 3] ;
//
// for (let i = 6; i > 3; i--) {
//     m1.unshift(i)
// }
//
// console.log(m1);

// ************************************************************************************************************


// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

// let gs = ['js', 'css', 'jq'];

// console.log(gs.shift());

// **************************************************************************************************************

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

// let m1 = ['js', 'css', 'jq'];

// console.log(m1.pop());

// ***********************************************************************************************


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].

// let m1 = [1, 2, 3, 4, 5];

// console.log(m1.slice(3));

// ******************************************************************************************************

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].

// let m1 = [1, 2, 3, 4, 5];

// console.log(m1.slice(0, 2));

// *************************************************************************************************************


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].

// let m1 = [1, 2, 3, 4, 5];
// m1.splice(1,3)
// console.log(m1);


// ****************************************************************************************************************

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього
// масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let m1 = [1, 2, 3, 4, 5];
//
// m1.splice(3,0,'a', 'b', 'c');
//
// console.log(m1);

// ***************************************************************************************************************

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з
// нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let m1 = [1, 2, 3, 4, 5];
//
// m1.splice(1,0,'a', 'b');
// m1.splice(6,0,'c');
// m1.splice(8,0,'e');
//
// console.log(m1);
//

// ************************************************************************************************************

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let m1 = [5,6,7,8,9,23,34,45,56,67,78,98];
//
// for (let i = 0; i < m1.length; i++) {
//     if (!(m1[i] % 2)){
//         console.log(m1[i]);
//     }
// }

// ***************************************************************************************************************

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

// let m1 = [5,6,7,8,9,23,34,45,56,67,78,98];
//
// let m2 = [];
//
// for (let i = 0; i < m1.length; i++) {
//     m2.push(m1[i]);
// }
//
// console.log(m2);



// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let m1 = [5,6,7,8,9,23,34,45,56,67,78,98];
//
// let m2 = [];
//
// for (let i = 0; i < m1.length; i++) {
//     m2[i] = m1[i];
// }
//
// console.log(m2);

// *******************************************************************************************************************

//
//
// ============
//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while

// let m1 = [2,17,13,6,22,31,45,66,100,-18];
//
// let i =0;
//
// while (i<m1.length) {
//     console.log(m1[i]);
//     i++
// }

// **************************************************************************************************************

//     2. перебрати його циклом for

// let m1 = [2,17,13,6,22,31,45,66,100,-18];

// for (let i = 0; i < m1.length; i++) {
//     console.log(m1[i]);
// }

// ***************************************************************************************************************

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let m1 = [2,17,13,6,22,31,45,66,100,-18];
//
// let i = 0;
//
// while (i<m1.length) {
//     if (i%2) {
//         console.log(m1[i]);
//     }
//     i++
// }

// ****************************************************************************************************************

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// let m1 = [2,17,13,6,22,31,45,66,100,-18];
//
// for (let i = 0; i < m1.length; i++) {
//    if (i%2) {
//        console.log(m1[i]);
//    }
// }

// ******************************************************************************************************************

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let m1 = [2,17,13,6,22,31,45,66,100,-18];
//
// let i = 0;
//
// while (i<m1.length) {
//     if (!(m1[i]%2)) {
//         console.log(m1[i]);
//     }
//     i++
// }

// ****************************************************************************************************************


// 6. перебрати циклом for та вивести  числа тільки парні  значення

// let m1 = [2,17,13,6,22,31,45,66,100,-18];
//
// for (let i = 0; i < m1.length; i++) {
//     if (!(m1[i]%2)) {
//         console.log(m1[i]);
//     }
// }

// ******************************************************************************************************************

// 7. замінити кожне число кратне 3 на слово "okten"

// let m1 = [2,17,13,6,22,31,45,66,100,-18];
//
// for (let i = 0; i < m1.length; i++) {
//     if (!(m1[i]%3)) {
//         m1[i] = 'okten';
//     }
// }
//
// console.log(m1);

// ********************************************************************************************************************


// 8. вивести масив в зворотньому порядку.

// let m1 = [2,17,13,6,22,31,45,66,100,-18];
//
// m1.reverse();
//
// console.log(m1);

// *****************************************************************************************************************

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// let m1 = [2,17,13,6,22,31,45,66,100,-18];
//
// for (let i = m1.length-1; i >=0; i--) {
//     if (!(m1[i]%2)) {
//         console.log(m1[i]);
//     }
// }

// let m1 = [2,17,13,6,22,31,45,66,100,-18];
//
// let i = m1.length-1;
//
// while (i>=0) {
//     if (!(m1[i]%2)) {
//         console.log(m1[i]);
//     }
//     i--
// }


// ******************************************************************************************************************

// 10
// створити пустий масив та :
//     - заповнити його 50 парними числами за допомоги циклу.

// let m1 = [];
//
// for (let i = 0; i < 100; i+=2) {
//     m1[i/2]= i;
// }
//
// console.log(m1);

// ******************************************************************************************************************

// - заповнити його 50 непарними числами за допомоги циклу.

// let m1 = [];
//
// for (let i = 1; i < 100; i+=2) {
//     m1[(i/2)-0.5]= i;
// }
//
// console.log(m1);

// ********************************************************************************************************************


// 1
// створити пустий масив та :
// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.

// let m1 = [];
//
// for (let i = 0; i < 30; i++) {
//     m1[i] = i+ Math.random();
// }
//
// console.log(m1);

// *******************************************************************************************************************

//     диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)

// let m1 = [];
//
// for (let i = 0; i < 30; i++) {
//     m1[i] = Math.floor((Math.random()*732-8)+8);
// }

// console.log(m1);

// ********************************************************************************************************************

// 2. вывести на консоль  каждый третий елемент

// for (let i = 0; i < 30; i+=3) {
//
//     console.log(m1[i]);
//
// }

// ******************************************************************************************************************

// 3. вывести на консоль  каждый третий елемент
// но при условии что его значение является парным.

// for (let i = 0; i < m1.length; i+=3) {
//     if (!(m1[i] % 2)) {
//
//         console.log(m1[i]);
//     }
// }

// *****************************************************************************************************************

// 4. вывести на консоль  каждый третий елемент
// но при условии что он имеет парное значение и
// записать их в другой массив.

// let w = [];
//
// for (let i = 0; i < m1.length; i+=3) {
//     if (!(m1[i] % 2)) {
//         w.push(m1[i]);
//     }
// }
// console.log(w);
//

// *******************************************************************************************************************

// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
//
// let m1 = [];
//
// for (let i = 0; i < 30; i++) {
//     m1[i] = Math.floor((Math.random()*732-8)+8);
// }
//
// console.log(m1)
//
// for (let i = 0; i < m1.length; i++) {
//     if (!(m1[i+1]%2)) {
//         console.log(m1[i])
//     }
// }

// ********************************************************************************************************************

// 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати
// середній чек.

// let mas = [100,250,50,168,120,345,188];

// let ser = 0;
//
// for (let i = 0; i < mas.length; i++) {
//     ser=ser + mas[i];
// }
//
// console.log(ser/mas.length);

// ***************************************************************************************************************

// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let m1 = [];
//
// for (let i = 0; i < 30; i++) {
//     m1[i] = Math.floor((Math.random()*732-8)+8);
// }
// console.log(m1)
//
// let m2 = [];
//
// for (let i = 0; i < m1.length; i++) {
// m2[i]=m1[i]*5
// }
//
// console.log(m2);

// *******************************************************************************************************************

// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.

// let mas1 = [1,32,'gdf', 97869, '454', true, false, NaN, undefined, null, 344, 'dhdh'];
//
// let mas2 = [];
//
// for (let i = 0; i < mas1.length; i++) {
//     if ( typeof (mas1[i]) === 'number') {
//         mas2.push(mas1[i]);
//     }
// }
//
// console.log(mas2);

// *******************************************************************************************************






