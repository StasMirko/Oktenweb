// ********************************************************************************************************
//                                     Методи роботи з обєктами
//                                     Масив всіх ключів або масив всіх значень



// let I = {
//     name: "Stas",
//     age: 27,
//     flet: true,
//     car: 'Fabia',
//     brother: {
//         name: 'Orest',
//         age: 23,
//         fleat: false,
//     }
// }

// let keys1 = Object.keys(I);               масив всіх ключів
// console.log(keys1);

// let vl = Object.values(I);                масив всіх значень
// console.log(vl);

// let ent = Object.entries(I);              масив масивів в форматі  [ключ; значення]
// console.log(ent);

// *************************************************************************************************************

                                       // Цикл тиипу for of
                                       // перебирає всі елементи циклу від старту до кінця

// let forof = [1, I, 'stas', 2, false];


// for (const i of forof) {
//     console.log(i);
// }

// iter ==>>   for (const iElement of I) {              скорочене написання циклу for of

// }

// itar  ==>>  for (let i = 0; i < I.length; i++) {        скорочене написання циклу for
//     const iElement = I[i];

// }

// *************************************************************************************************************

                            // Цикл типу for in
                            //  Повертає індекси масиву
                            // Але найчастіше використовується для обєкту для перебору всіх ключів по черзі
                            //    єдина річ яка вміє ітерувати обєкти


// let forin = [1, I, 'stas', 2, false];

// itin ==>>    for (const iKey in I) {                 скорочене написання циклу for in
    
// }

// for (const forinKey in forin) {                       приклад для масиву
//     console.log(forinKey);
//
// }

// for (const iKey in I) {                               приклад для обєкту
//     console.log(iKey);
//
// }


// for (const iKey in I) {                               приклад щоб витягти значення ключів з обєкту
//     console.log(I[iKey]);
//
// }

// ***************************************************************************************************************

                                         // Референси і примітиви

                          // є два основних види даних це примітивні і силочні дані( референси)
                          //  примітивні складаються з чогось одного(стрінга, намбер, буліан...)
                          //     Силочні це обєкти і масиви
                          //       є таке поняття як мутація і його треба остерігатися

// let a = 'Hello';
// let b = a;
//
// a='World';
//                                   прості і силочні типи даних ведуть себе по різному при клонуванні
// console.log(b);
// console.log(a);

// let stas = I;
                       // в цьому ми якби не робимо клон, а робимо силку на stas(I), тому і така назва - силочний
// I.name = 'neStas';

// console.log(stas);
// console.log(I);

// ****************************************************************************************************************

                                                  // JSON

                    // робить повноцінні копії
                    // (англ. JavaScript Object Notation, укр. запис об'єктів JavaScript)
                    // це текстовий формат обміну даними між комп'ютерами
                    // JSON це образно кажучи велика стрічка ( тобто референс перетворюється в
                    // примітив і тому за допомогою JSONна пожна робити точні копії ).
                    //    JSON не бачить і видаляє тип даних undefaundid, а BigInt вибє помилку,
                    //    а NaN перетворює в null


// let s = JSON.stringify(I);
//                                                     з обєкта робить JSON
// console.log(s);

// let s2 = JSON.parse(s);
                                                    // з JSON перетворює в обєкт
// console.log(s2);



// let person = {
//     name: 'Stepan',
//     age: 30,
//     work: {
//         namework: 'Acino',
//         stag: '3 years',
//     }
// }
//                                                   // так робиться копія обєкту (або масиву) через JSON
// let clon = JSON.stringify(person);
//
// let clonJSformat = JSON.parse(clon);
//
// console.log(person);
// console.log(clon);
// console.log(clonJSformat);

// ***********************************************************************************************************

                                                 // DOM
                    // Об'єктна модель документа (англ. Document Object Model, DOM)
                    // пецифікація прикладного програмного інтерфейсу для роботи зі структурованими
                    // документами (як правило, документами XML).
                    // Визначається ця специфікація консорціумом W3C.
                    //
                    //     З точки зору об'єктно-орієнтованого програмування, DOM визначає класи,
                    // 'методи та атрибути цих методів для аналізу
                    // 'структури документів та роботи із представленям документів у вигляді дерева.
                    // 'Все це призначено для того, аби надати можливість комп'ютерній програмі
                    // доступу та динамічної модифікації структури, змісту та оформлення документа.


// let element = document.getElementById('divka');                      //робиться обєкт
// console.log(element);
//
// let elements2 = document.getElementsByClassName('xxx');             //робиться масив
// console.log(elements2);
//
// let elements3 = document.getElementsByTagName('i');               //робиться масив
// console.log(elements3);
//
//
// element.style.backgroundColor = 'grey';
//                                                     // так ми можемо міняти стилі в html документі через JS
// element.style.width = '250px';
//
// element.innerText = 'Вітаю на платформі  ' + I.name;       // міняємо текст або отримуємо той що був
//
// let newelement = document.createElement('div');   //  створюємо новий елемент
//
// newelement.style.backgroundColor = 'red';                 //  стилізуємо недавно створений елемент
// newelement.style.width = '100px';
// newelement.style.height = '100px';
//
// element.appendChild(newelement);                           // так вставляємо елемент в елемент
//
// // element.innerHTML = '<hr> <br> Hello';                  // ще один з способів вставляти текст
//
//
// for (const elements2Element of elements2) {                // щоб стилізувати класи або теги, які є масивом
//     console.log(elements2Element);
//     elements2Element.style.fontSize = '30px';
// }
//
// for (let i = 0; i < elements3.length; i+=2) {           // щоб стилізувати кожен другий клас або тег який є масивом
//     elements3[i].style.fontSize = '140px';
//
// }

// const stud = [
//     {name: 'Stas', age: 27},
//     {name: 'Orest', age: 23},
//     {name: 'Vitaliy', age: 26},
//     {name: 'Ihor', age: 47},
// ];

// for (let i = 0; i < stud.length; i++) {
//     const studElement = stud[i];
//     const studdiv = document.createElement('div');     // створили динамічні блоки в html документі через
//                                                                // JS за допомогою цикла
//     studdiv.style.backgroundColor = 'red';
//     studdiv.style.width = '200px';
//     studdiv.style.height = '200px';
//     studdiv.style.margin = '30px';
//     studdiv.innerText = 'Helloooooo   ' + studElement.name + '  I am  ' + studElement.age + '  year old';
//
//     document.body.appendChild(studdiv);
//
// }


// for (let i = 0; i < stud.length; i++) {
//     const studElement = stud[i];
//     const studdiv = document.createElement('div');
//
//     studdiv.classList.add('studentclass');                       // щоб додати клас цілий з Html або Css документу
//
//     studdiv.innerText = 'Helloooooo   ' + studElement.name + '  I am  ' + studElement.age + '  year old';
//
//     document.body.appendChild(studdiv);
//
// }

// ****************************************************************************************************************