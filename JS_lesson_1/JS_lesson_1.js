// - присвоить каждому из следующих значений свою переменную:
//     'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false
// Вывести каждую при помощи console.log , alert, document.write

// let slovo1 = 'Hello';
// let slovo2 = 'owu';
// let slovo3 = 'com';
// let slovo4 = 'ua';
// let number1 = 1;
// let number2 = 10;
// let number3 = -999;
// let number4 = 123;
// let number5 = 3.14;
// let number6 = 2.7;
// let number7 = 16;
// let tak = true;
// let ni = false;

// // alert(slovo1);
//

// number1 = 2;
//
// console.log(number1+ number2+ slovo2);
//
// // document.write(slovo2)
//
//
// - переопределить каждую переменную из задания 1 дав им произвольные значения
// Вывести каждую при помощи console.log , alert, document.write
//
//
// - Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
//
// const a1 = 1;
// const a2 = 'abc';
//
// - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО.
//     Для фамилии имени и отчества создать разные переменные.
//     Вывести каждую при помощи console.log , alert, document.write
//
//
// - Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
//
//
// - Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
//
//
// - при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
//// let number1 = +prompt('number1')
// // let namber2 = +prompt('number2')
// // let namber3 = +prompt('number3')
// // console.log(number1,number2,number3)
// // // щоб перевести з стрічки в числове перед промтом ставимо +
//
// - при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt.
//     Сложить их между собой записав результат в переменную result и вывести в консоль браузера
// let number1 = parseInt(prompt('число 1'))
// let number2 = parseInt(prompt('число 2'))
// let number3 = parseInt(prompt('число 3'))
//
// let result = number1+number2+number3
//
// console.log(result)
// // parseInt робить із дробних чисел цілі
//
// let a = 3.3;
// let d = '3.5';
// console.log(d);
// console.log(parseInt(a));
// console.log(parseInt(d));
//
//
// - при помощи prompt()  получить 3 числа с плавающей точекой.
//     при помощи parseFloat привести их к соответсвующему типу.
//     Сложить их между собой записав результат в переменную result и вывести в консоль браузера
// let number1 = parseFloat(prompt('число 1'))
// let number2 = parseFloat(prompt('число 2'))
// let number3 = parseFloat(prompt('число 3'))
//
// let result = number1+number2+number3
//
// console.log(result)
//
// // майже те саме, що +
//
// console.log(parseInt('AF', 16));
// це те що пояснював Юра, всі типи відліку це 16рійна
//
//
// - при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round
// Сложить их между собой записав результат в переменную  и вывести в консоль браузера
// let number1 = Math.round(prompt('число 1'))
// let number2 = Math.round(prompt('число 2'))
// let number3 = Math.round(prompt('число 3'))
//
// console.log(number1+number2+number3)
//
// // Округлює
//
//
// - при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу.
//     Первое число - это число которое будут возводить в степень.
//     Второе число - это число которое является степенью.
//     При помощи Math.pow возвести первое число в степень второго числа.
// let number1 = parseInt(prompt('число 1'))
// let number2 = parseInt(prompt('число 2'))
//
// console.log(Math.pow(number1, number2))
//
// // степінь - math.pov



// При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в
// консоль let a = 100; let b = '100'; let c = true; let d = undefined;

// let a = 100;
// let b = '100';
// let c = true;
// let d = undefined;
//
// let arr = [];
// let q = [0];
// let w = {};
// let e = {a: 0};
// let f = function () {
// }
// let nen = NaN;
//
// console.log(!! arr);
// console.log(!! q);
// console.log(!! w);
// console.log(!! e);
// console.log(!! f);
// console.log(!! nen);

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
//
//
// Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//     В одинаковых выражениях в задании не использовать два одинаковых оператора.
//     Каждое выражение вложить в свою переменную
// 5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true


// console.log(5<6,5>6,5>=6,5==6)


// Дополнительно:
//     - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
// console.log(132 > 100 && 45 < 12 );
// console.log(34 > 33 && 23 < 90 );
// console.log(99 > 100 && 45 > 12 );
// console.log(132 > 100 || 45 < 12 );
// console.log(111 > 11 || 45 < 111 );
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));
// console.log(!!'-1');
// console.log(!!-1);
// console.log(!!'0');
// console.log(!!'null');
// console.log(!!'undefined');
// console.log(!!(3/'owu'));
// console.log((111 > 11 || 45 < 111) ||  !!'0');
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));

// 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
// При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.

// let str = 'привет'
// let num = 123
// let flag = true
// let txt = 'true'
//
// console.log(typeof str)
// console.log(typeof num)
// console.log(typeof flag)
// console.log(typeof txt)

// 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.)
// найдите значения выражений:
//     5 + 3,
//     5 - 3,
//     5 * 3,
//     5 / 3,
//     5 % 3
// поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.

// let a1 = 5+3;
// let a2 = 5-3;
// let a3 = 5*3;
// let a4 = 5/3;
// let a5 = 5%3;
//
// console.log(a1, a2, a3, a4, a5);

// 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'

// let a6 = 5%3;
// let a7 = 3%5;
// let a8 = 5+'3';
// let a9 = '5'-3;
// let a10 = 75+'kg';
//
// console.log(a6, a7, a8, a9, a10);
//
//
// *4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
// шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.


// let hight = 23;
// let width = 10;
// let s = hight*width;
//
// console.log(s);

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.

// let hightC = 10;
// let dC = 4;
// let v = hightC*dC/2*dC/2*3.14;
//
// console.log(v);
//
// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или
// оператор возведения в степень ** ).

// let n = 3;
// let m = 4;
// let k = Math.pow(n, 2) + Math.pow(m, 2);

// let k = n**2 + m**2;
//
// console.log(k);

// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить
// спомощью document.write, alert и console.log

// let str = 'Hello world'
//
// document.write(str);
// alert(str);
// console.log(str);

// *8. Вывести в окно браузера при помощи метода alert() следующие данные:
//     Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

// let name = 'Mirko Stas Ihorovich\n27\nfoto';
//
// alert(name);


// *9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write

// let str1 = 'Kto ';
// let str2 = 'ti ';
// let str3 = 'takoy?';
// let concatenation = str1 + str2 + str3;
//
// document.write(concatenation);

// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
// console.log(str + a);
// console.log(str - a);
// console.log(str * "2");
// console.log(str / 2);

// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
// console.log(parseInt("3.14"))
// console.log( parseInt("-7.875"))
// console.log(parseInt("435"))
// console.log(parseInt("Вася"))

// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные,
// которые будут использоваться далее, повторите код ниже
// let str = prompt("Enter something", "ho-ho")
// console.log(str);

// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел,
// а вывод результата при помощи метода alert

// let number1 = +prompt('number1', '1234');
// let number2 = +prompt('number2', '1234');
// let suma = number1+number2;
// alert(suma);

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст,
//     а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

// let name1 = prompt('name?');
// let name2 = prompt('name2?');
// let age = prompt('age?');
// let message = 'Доброго вечора, '+name1+' '+name2+', мої поздоровлення, що Вам '+age;
// alert(message);

// =====================
// ======ДОП============
// =====================
//
//
//
//
// *1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

// let a1 = +prompt('number 1?');
// let a2 = +prompt('number 2?');
// let a3 = +prompt('number 3?');
//
//
// if (a1>=a2>=a3){
//     console.log(a3, a2, a1)
// } else if (a1>=a3>=a2){
//     console.log(a2,a3,a1)
// } else if (a2>=a1>=a3){
//     console.log(a3,a1,a2)
// } else if (a2>=a3>=a1){
//     console.log(a1,a3,a2)
// } else if (a3>=a1>=a2){
//     console.log(a2,a1,a3)
// } else (console.log(a1,a2,a3))

// var myarray=[25, 8, 7, 41]              це скачав з інтернета
// myarray.sort(function(a,b){
//     return a — b

// 2.
// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

// let color = prompt('Якого кольору світлофор?\n( введи колір українською і з маленької букви)');
//
// switch (color) {
//     case 'зелений' :
//         alert('Іди!');
//         break;
//     case 'жовтий' :
//         alert('Почекай!');
//         break;
//     case 'червоний' :
//         alert('Стій!');
//         break;
//     default :
//         alert('Роби що хочеш!');
// }


// 3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

// let color = prompt('Якого кольору світлофор?\n( введи колір українською і з маленької букви)');
//
// let isRoadClear = confirm('На дорозі є автівки?');

// switch (color + isRoadClear) {
//     case 'зелений' +  false :
//         alert('Іди!');
//         break;
//     case 'зелений' + true:
//         alert('Почекай поки порушники проїдуть!');
//         break;
//     case 'жовтий' + true:
//         alert('Почекай!');
//         break;
//     case 'жовтий' + false:
//         alert('Все одно Почекай!');
//         break;
//     case 'червоний' + true:
//         alert('Стій!');
//         break;
//     case 'червоний' + false:
//         alert('Стій! все одно!');
//         break;
//     default :
//         alert('Роби що хочеш!');
// }



