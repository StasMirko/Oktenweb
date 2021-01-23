// ******************************************************************************************************************

                                         // ArrayMethod.Prototype

// *******************************************************************************************************************

                                               // SORT

let number = [4,3,8,45,90,25,1,56,2,3,8,13];

// console.log(number.sort());                                       // Посортує по алфавіту


// let s = number.sort((a,b) => {                                // Посортує в порядку зростання
//     return a-b;
// } )
//
// console.log(s)

// let s2 = number.sort((a,b)=>{
//     return b-a;                                                   // Посортує в порядку спадання
// })
//
// console.log(s2);

let str = ['Jena', 'Leonid', 'Anna', 'Aliona', 'Olia'];

// let str_sort = str.sort((a,b)=>{
//     if (a>b) {                                                   // Слова по алфавіту сортуються
//         return 1
//     }
//     return -1;
// })
//
// console.log(str_sort);

// let str_sort = str.sort((a,b)=>{
//     if (a>b) {                                                   // Слова по алфавіту сортуються з кінця
//         return -1
//     }
//     return 1;
// })
//
// console.log(str_sort);





let arr = [
    {name: 'Olia', age: 34},
    {name: 'Yulia', age: 32},
    {name: 'Jenia', age: 37},
    {name: 'Roma', age: 25},
    {name: 'Ilona', age: 27},
    {name: 'Stas', age: 27},
    {name: 'Dima', age: 31},
    {name: 'Lina', age: 29},
];

// let arr_sort = arr.sort((a,b)=>{                                             // Посортується по віку
//     return a.age-b.age;
// })

// console.log(arr_sort);

// let arr_sort_alf = arr.sort((a,b)=>{
//     if (a.name>b.name) {                                                  // Посортує по алфавіту
//         return 1;
//     }
//     return -1;
// }) ;

// console.log(arr_sort_alf);

// *********************************************************************************************************************

                                               // FILTER

   // value - поточний елемент ітерації

   // index - поточний індекс ітерації

   // array - масив на поточному кроці

// let numb_filtr = number.filter((value)=>{
//     return value>40;                                      //Поверне значення більші за 50
// });
//
// console.log(numb_filtr);

//Це все те ж саме але має спрощений запис

// let numb_filtr = number.filter(value => value > 40);              //Поверне значення більші за 50

// console.log(numb_filtr);

// let arr_filtr = arr.filter(user => user.age>30 );                    // Виводить юзерів з віком більше за 30
// console.log(arr_filtr);

// let arr_filtr = arr.filter(user => user.name.length>4 );          // Виводить юзерів в яких імена більше 4 букв
// console.log(arr_filtr);

// *******************************************************************************************************************

                                               // FOREACH

                       // Проходить елементи з першого по останній(схожий на for of)
                       // нічого не повертає, просто виконується
                       // використовується для ітерації просто щоб перебрати масив

// num_par = number.forEach((value, index) => {
//     if (index%2) {                                                   // виводимо в консоль непарні індекси
//         return;                                          // return пропускає одну ітерацію в forEach
//     }
//     console.log(value, index);
// });

// ******************************************************************************************************************

                                             // MAP

                                 // служить для зміни елементів масиву
                                 // бере з масиву елемент видозмінює його і повертає масив з видозміненими елементами
                                 // якщо масив обєктів, то він буде мутований

// let map =  arr.map((value, index) => {
//      value.age = value.age * index;
//      return value;
// });
//
// console.log(map);

                                 // скільки елементів зайшлов map стільки він очікує на виході
                                 // не можна робити наприклад іф непарні парні, він запише їх  undefined

// ******************************************************************************************************************

                                                  // FIND

                                    // Поверне перший елемент який підходить по умові, якщо треба всі то викор filter

// let str_find = str.find(value => {
//         return value.startsWith('A')
// })
//
// console.log(str_find);

// let arr_find = arr.find(value => value.name.includes('o'));
//
// console.log(arr_find);

// let arr_find = arr.findIndex(value => value.name.includes('o'));

                                                                // Шукає індекс( якщо нічого не знаходить повертає -1)
// console.log(arr_find);

// ********************************************************************************************************************

                                               // REVERSE
                                               // перевертає ( при цьому мутує)
// let  rev = number.reverse();
// console.log(rev);

// *******************************************************************************************************************

                                               // SOME/EVERY

// let some = number.some(value => value>30)         // перевіряє чи хоча б один елемент масиву підходить під параметр


// let every = number.every(value => value>30)       // перевіряє чи всі елементи масиву підходять під параметр

// console.log(some);                                 // вивиде true
// console.log(every);                                // вивиде false

// ******************************************************************************************************************

                                                     // FLAT
                                                     // вирівнює по вложеності масив

// let  array = [1,2,[3,4,[5,6,[7,8,[9,10,[11]]]]]];

// let flat = array.flat(20);                      // глибина вложеності

// console.log(flat);

// ******************************************************************************************************************

                                                    // REDUCE

// reduce - бігає з ліва на право
// reduseR - бігає з права на ліво
// тут є таке поняття як акамулятор
// акамулятором буде кожен раз те, що було в ретьорні

// let reduce1 = number.reduce((acc,value)=>{
//     console.log(acc)
//     console.log(value)
//     console.log('*************')
// })


// let reduce2 = number.reduce((acc,value)=>{
//     console.log(acc)
//     console.log(value)
//     console.log('*************')
//
//     return acc + value;
//
// })
//
// console.log(reduce2)                                          // отримуємо суму всіх елементів


// такий спосіб для роботи з масивом обєктів:

// let inish_value = arr.reduce((acc,value) => {
//     return acc + value.age
// }, 0  )                                                          // initialValue число з якого починається акамулятор


// console.log(inish_value);

// *********************************************************************************************************************

// Добавимо тим, хто старший за 27 авто методами мап + фiльтр:

// let old_us = arr.filter(user => user.age > 27);

// let old_us_car = old_us.map((value)=>{
//     value.car = true;
//     return value;
// })

// console.log(old_us_car);

// *******************************************************************************************************************

// Знову добавимо тим хто старший за 27 авто, але одним методом редюс:
// Краще обирати цей метод

// let old_us_car = arr.reduce((acc,value) => {
//    if (value.age>27) {
//        acc.push(value);
//        value.car = true;
//    }
//    return acc;
// },[])
//
// console.log(old_us_car);

// *******************************************************************************************************************

                                                   // SPLICE
// видалити, вставити або просто добавити

// let splice = number.splice(2,4);     // починаючи з другого вирізаємо 4
//
// console.log(splice);                                // покаже те що вирізали
//
// console.log(number);                                // покаже те що залишилось


// let splice = number.splice(2,4, 3,3,3);          // починаючи з другого вирізаємо 4 і на їх місце вставляємо
//
// console.log(splice);
//
// console.log(number);


// let splice = number.splice(-2,0, 3,3,3);// починаючи з другого з кінця вирізаємо 4 і на їх місце вставляємо
//
// console.log(splice);
//
// console.log(number);

// *******************************************************************************************************************

                                                // PROTOTYPE

function Animal(name,color) {
this.name = name;
this.color = color;
this.run = function () {
    console.log('run')
}
}

Animal.prototype.run = function () {                    // в прототипі пишеться поведінка
    console.log('run')
}

function Hamster(name, color, house) {
this.name = name;
this.color = color;
this.house = house;
}

let an = new Animal('dog','orange');

    console.log(an)


// Hamster.prototype.__proto__= Animal.prototype
Hamster.prototype = Object.create(Animal.prototype);


    function Hamster2(name) {
this.name = name;
    }

    Hamster2.prototype.stomach =[];

    Hamster2.prototype.findFood = function (eat) {
this.stomach.push(eat);
    }

let boni = new Hamster2('Boni');
    let roni = new Hamster2('Roni');

    boni.findFood('Yablooko');
    boni.findFood('Groosha');

console.log(boni.stomach);
console.log(roni.stomach);    //Будуть однакові

//  Якщо ми пишемо щось в прототипі то воно буде одне для всіх
// Це робиться для економії памяті











































