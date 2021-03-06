// *************************************************************************************************
//
//                                          Типи даних в JS:

// 1. Стрічка:
// let str = 'Do you understand me?';

// 2. Номер(числовий):
// let number = -100;

// 3. Буліан:
// let w = false;

// 4. Андефайндед:
// let und = undefined;

// 5. Нал:
// let nul = null;

// 6. Об'єкт:
// let obj = {};

// 7. Символ:
// let symb = Symbol('s');

// 8. BigInt (з'явився недавно), дає можливість представляти числа які більші за 2 в 54 степені мінус 1:
// let bi = BigInt(8269728936709236777826);
// ***********************************************************************************************************

//                     Різниця між Let i Const: const не можна переприсвоювати і міняти:

// let a = 2;
// a = 3

// const pi = 3.14;
// pi = 5     так не вийде вибє помилку
// ***********************************************************************************************************

//                                               Обєкт.
//
//    Обєкт це такий тип інформації який може описати більш розгорнуту і обємну інформацію:

let me = {
    name: 'Stas',
    age: 27,
    travels: {
        afrika: 'Egipt',
        asia: 'Turkey',
        europa: {
            acino:{
                ac1: 'Austria',
                ac2: 'Munich',
            },
            studtravel: {
                st1: 'Itali and Swiss',
                st2: 'Poland and Slovachina',
            }
        }
    }
}

// console.log(me);   обєкт виводиться тільки в консолі, в документ врайт не вийде ввести, а от вложені елементи можна

// document.write(me.travels.europa.studtravel.st1);
// console.log(me.travels, me.age);  через кому можна виводити декілька речей

// me.age = 28;// так можна переприсвоїти елементи в обєкті(вложені можна навіть в const);

// me.job = 'Acino'; так можна добавити елементи в обєкт (вложені можна навіть в const);

// delete me.travels.afrika;    так можна видаляти щось з обєкту (вложені можна навіть в const);

// console.log(me);

// *****************************************************************************************************************

//                                             Масив.
//
//                                Зберігає в собі безліч різних даних.




let group = ['Snas', 'Orest', 'Roma', 'Vitalik', 27, 23, true, me, {objekt: 4}, ['massiv',[2,4], 23]];

// console.log(group[7]);                        щоб вивести елемент вводимо в квадратних дужках його порядковий
                                                 // номер(відлік розпочинається з нуля).

// console.log(group[7].travels.europa.acino.ac1); щоб вивксти вкладений елемент з обєкту

// console.log(group[9][1][0]);    щоб вивести масив в масиві в масиві

// group[12] = 'dodavanna v masiv';
// console.log(group[12]);                  щоб добавити лемент в масив


// group.push('dodati v kinec', 'можна і через кому');        щоб додати елемент в кінець масиву.

// group.unshift('pochatok masivy');                          щоб додати на початок масиву елемент.

// group.pop();                                               щоб видалити останній елемент з масиву.

// group.shift();                                             щоб видалити перший елемент з масиву.

// let mass = group.pop();                                    щоб вивести стертий елемент.
// console.log(mass);

// let st = group.shift();                                    щоб вивести стертий елемент.
// console.log(st);

// let deleteduser = group.pop();
// alert(deleteduser+ 'is delete');
// deleteduser.push(group.pop());
// console.log(group);                                        цікавий варіант щоб одразу видалити і вивести елемент

// **********************************************************************************************************


                                                     // ЦИКЛ

for (let i = 0; i<=9; i = i+1) {
    console.log(group[i]);
    console.log(i);
}

// for (let i = 0; i<group.length; i++) {                       i++  те саме що i = i+1
//     console.log(group[i]);
// }



// let i = 0;                               такий варіант використовуємо якщо змінна оголошена раніше
//
// while (i<group.length) {
//     console.log(group[i]);
//     i+=2                                                     i+=2 те саме що i = i+2
//
// }

// ******************************************************************************************************


Math.floor(Math.random()*(max-min)+min);   // формула для генерування рандомного числа від до
