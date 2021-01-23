// ****************************************************************************************************************

// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку

// let dog1 = {
//     name: 'Aki',
//     poroda: 'Akita',
//     age: 6,
//     color: 'orange',
//     live_from: 'Solomiivka',
// }

// - людину

// let Stas = {
//     name: 'Stas',
//     age: 27,
//     work: false,
//     relitivth: {
//         brothers: 'Orest',
//         mothers: 'Tetiana',
//         fathers: 'Ihor',
//     }
// }


// - автомобіль

// let car1 = {
//     model: 'bmw',
//     series: '5',
//     color: 'black',
//     year: 2001,
//     max_spead: 210,
// }

// console.log(dog1, Stas, car1);

// - квартиру
// - книгу
// **********************************************************************************************************

// -- Створити масив та вивести його в консоль:
//     - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

// let mas1 = [Stas, car1, dog1];
//
// console.log(mas1);

//*************************************************************************************************************


// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна
// бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
//
// let Stas2 = {
//     name: 'Stas',
//     age: 27,
//     work: false,
//     relitivth: {
//         brothers: 'Orest',
//         mothers: 'Tetiana',
//         fathers: 'Ihor',
//     },
//     countries: ['Avstria', 'Poland', 'Swiss', 'Italy'],
// }
//
// console.log(Stas2);

//*******************************************************************************************************************


// Дан массив:


// let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
//

    // - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне

// - статус Андрія

// console.log(users[7].status);

// - статус Максима
// - ім'я передостаннього об'єкту

// let a = users[users.length-2].name
// console.log(a);

// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта

// console.log(users[4].age + users[4].name);

// - вік + сатус Анни

// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!


//**************************************************************************************************************


// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// ****************************************************************************************************************

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або
// document.getElementsByTagName :

// - отримує текст з параграфа з id "content"

// let dom1 = document.getElementById('content');
// console.log(dom1);

// *****************************************************************************************************

// - отримує текст з блоку з id "rules"

// let dom2 = document.getElementById('rules');
// console.log(dom2);

// *******************************************************************************************************


// - замініть текст параграфа з id 'content' на будь-який інший

// let dom1 = document.getElementById('content');

// dom1.innerText = 'ЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯ змііііінннннииииииииввввввввввввввв тттттттттттууууууеееееееекккккккссссссстт';


// **************************************************************************

// - замініть текст параграфа з id 'rules' на будь-який інший

// let h = document.getElementById('rules');

// h.innerText = 'rffffffmmmomomolmtvktmvtmvmrtkvrtnvtvnktkintmi'

// ********************************************************************************

// - змініть кожному елементу колір фону на червоний

// let h = document.getElementById('rules');
// h.style.backgroundColor = 'red';

// ***********************************************************************

// - змініть кожному елементу колір тексту на синій

// h.style.color = 'blue';

// *************************************************************************************

// - отримати весь список класів елемента з id=rules і вивести їх в console.log                            @@@@@@@@

// let cls = document.getElementById('rules');
// console.log(cls);

// ************************************************************************************************

// - отримати всі елементи з класом fc_rules

// let cls = document.getElementsByClassName('fc_rules');
// console.log(cls);

// **********************************************************************************************

// - поміняти колір тексту у всіх елементів fc_rules на червоний

// let cls = document.getElementsByClassName('fc_rules');
//
// for (const cl of cls) {
//     console.log(cl);
//      cl.style.backgroundColor = 'red';
//      cl.style.color = 'blue';
// }

// ************************************************************************************************

// ====================
// ====================
// ====================

// =================
// =====class=======
// =================

// ***************************************************************************************************

// Взяти файл template_2.html та працювати в ньому

// - Напишіть код, який :

// -- змінює колір тексту елемнту з ід main_header на будь-який інший

// let gh = document.getElementById('main_header');
// gh.style.color = 'green';

// ********************************************************************************************************

// -- робить шириниу елементу ul 400 пікселів

// let ul1 = document.getElementsByTagName('ul');
//
// for (const ul1Element of ul1) {
//     ul1Element.style.width = '400px';
//     ul1Element.style.backgroundColor = 'yellow';
// }

// **********************************************************************************************************

// -- робить шириниу всіх елементів з класом linkList шириною 50%

// let kl = document.getElementsByClassName('linkList');
//
// for (const klElement of kl) {
//     klElement.style.width = '50%';
//     klElement.style.backgroundColor = 'orange';
// }

// **********************************************************************************************

// -- отримує текст який зберігається в елементі з класом listElement2                                      @@@@@@@

// let txt = document.getElementsByClassName('listElement2');
// console.log(...txt);

// **********************************************************************************************

// -- отримує всі елементи li та змінює ім колір фону на сірий

// let lii = document.getElementsByTagName('li');
//
// for (const liiElement of lii) {
//     liiElement.style.backgroundColor = 'gray';
// }

// ******************************************************************************************************

// -- отримує всі елементи 'a' та додає їм клас anchor

// let aaa = document.getElementsByTagName('a');
//
// for (const aaaElement of aaa) {
//     aaaElement.classList.add('anchor');
// }

// ***********************************************************************************************************

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту
// на 40 пікселів

// let aaa = document.getElementsByTagName('a');                                      //@@@@
// for (const aaaElement of aaa) {
//     if (aaaElement == 'link3') {
//         aaaElement.style.fontSize = '140px';
//     }
// }

// *********************************************************************************************************

// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a



// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// -- отримати елементи p та змінити їм paddin на довільне значення
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення

// *****************************************************************************************************************

// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name
// должно присутствовать только 1 раз в одном объекте )
// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний
// объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] ,
//     wife: { name: 'cherry' } };
// - При помощи for in вывести все ключи всех объектов из задания 1 и 2

// ******************************************************************************************************

// let Stas = {
//     name: 'Stas',
//     age: 27,
//     work: false,
//     relitivth: {
//         brothers: 'Orest',
//         mothers: 'Tetiana',
//         fathers: 'Ihor',
//     }
// }
//
// for (const stasKey in Stas) {
//     console.log(stasKey);
// }


// let car1 = {
//     model: 'bmw',
//     series: '5',
//     color: 'black',
//     year: 2001,
//     max_spead: 210,
// }

// ****************************************************************************************************************

// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// let dog1 = {
//     name: 'Aki',
//     poroda: 'Akita',
//     age: 6,
//     color: 'orange',
//     live_from: 'Solomiivka',
// }
//
// let jkg = Object.keys(dog1);
// console.log(...jkg);

// *********************************************************************************************************


// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет.
// (Значаения полей могу быть выдуманными)
//
// let caarss = [
//     {model: 'X1', year: '2001', moshch: 1, color: '#100000', driver: {sex: 'femel', age: 22, name: 'Angela'}},
//     {model: 'X2', year: '2002', moshch: 2,color: '#200000', driver: {sex: 'man', age: 21, name: 'Vitia'}},
//     {model: 'X3', year: '2003', moshch: 3, color: '#300000', driver: {sex: 'femel', age: 23, name: 'Ira'}},
//     {model: 'X4', year: '2004', moshch: 4, color: '#400000', driver: {sex: 'man', age: 24, name: 'Petro'}},
//     {model: 'X5', year: '2005', moshch: 5, color: '#500000', driver: {sex: 'femel', age: 25, name: 'Alina'}},
//     {model: 'X6', year: '2006', moshch: 6, color: '#600000', driver: {sex: 'man', age: 26, name: 'Roma'}},
//     {model: 'X7', year: '2007', moshch: 7, color: '#700000', driver: {sex: 'femel', age: 27, name: 'Vita'}},
//     {model: 'X8', year: '2008', moshch: 8, color: '#800000', driver: {sex: 'man', age: 28, name: 'Andron'}},
//     {model: 'X19', year: '20019', moshch: 19, color: '#900000', driver: {sex: 'femel', age: 29, name: 'Oksana'}},
//     {model: 'X10', year: '20010', moshch: 10, color: '#999000', driver: {sex: 'man', age: 20, name: 'Leonid'}},
// ]

// *************************************************************************************************************

// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион.
// (Значаения полей могу быть выдуманными)
// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
//     Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

// ****************************************************************************************************************

// - проитерировать каждый массив из задания 5,6,7 при помощи while.

// let i = 0;
//
// while (i<caarss.length) {
//     console.log(caarss[i])
//     i++
// }

// ******************************************************************************************************************

// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

//******************************************************************************************************************
//
//- взять объекты из задания 1 и превратить каждый в json.
// //
// let car1 = {
//     model: 'bmw',
//     series: '5',
//     color: 'black',
//     year: 2001,
//     max_spead: 210,
// }
//
// let car1_jsn = JSON.stringify(car1);
// //
// console.log(car1_jsn);

// ********************************************************************************************************************

// - взять json из задания 11 и превратить их обратно в объекты.

// let car1_jsn_obj = JSON.parse(car1_jsn);

// console.log(car1_jsn_obj);

// **********************************************************************************************************************

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
//
// for (const caarss1 of caarss) {
//     console.log(caarss1);
//     let a = JSON.stringify(caarss1);
//     console.log(a);
//     console.log('*********************************');
// }

// **********************************************************************************************************

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// *************************************************************************************************************

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// let mass_copy =[];

// for (const caarss1 of caarss) {
    // console.log(caarss1);
    // let a = JSON.stringify(caarss1);
    // console.log(a);
    // console.log('*********************************');
    // let copy1 = JSON.parse(a);
    // mass_copy.push(copy1);
// }
// console.log(caarss);
// console.log(mass_copy);

// ********************************************************************************************************


// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills
// которое является массивом. Проитерировать массив пользователей и в каждом пользователе
// проитерировать его массив skills
//
// let users = [
//     {name:'Vitia', age:24, skills: ['JS', 'java', 'Piton']},
//     {name:'Serhiy', age:33, skills: ['JS1', 'java1', 'Piton1', 'C++']},
//     {name:'Orest', age:23, skills: ['JS', 'Fotoshop', 'Gym']},
//     ];
//
// for (const user of users) {
//     console.log(user);
//     for (const sk of user.skills) {
//         console.log(sk);
//     }
//     console.log('**************************************');
// }

// ****************************************************************************************************************

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое
// является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.
//     Скопировать все skills всех пользователей в отедльный массив

// let skl = [];
//
// let users = [
//     {name:'Vitia', age:24, skills: ['JS', 'java', 'Piton']},
//     {name:'Serhiy', age:33, skills: ['JS1', 'java1', 'Piton1', 'C++']},
//     {name:'Orest', age:23, skills: ['JS2', 'Fotoshop', 'Gym']},
//     ];
//
// for (const user of users) {
//     console.log(user);
//     for (const sk of user.skills) {
//         console.log(sk);
//         let copy = skl.push(sk);
//     }
//     console.log('**************************************');
// }
//
// console.log(skl);

// ***************************************************************************************************************

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
//
// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
//
// for (const user of users) {
//     console.log(user)
//     for (const userSkills of user.skills) {
//         console.log(userSkills);
//     }
//     console.log('********************************************************************')
// }

// ***********************************************************************************************************

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
//
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

// let addrs =[];
//
// for (const user of users) {
//     addrs.push(user.address);
// }
//
// console.log(addrs);

// *******************************************************************************************************************

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Всі данні в одному блоці.

// for (const user of users) {
//     console.log(user);
//     let user_jsn = JSON.stringify(user);
//     let htmlDivElement = document.createElement('div');
//     htmlDivElement.innerText =`${user_jsn}`;
//     document.body.appendChild(htmlDivElement);
// }

// ********************************************************************************************************************

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//     розділивши всі властивості по своїм блокам (div>div*4)
//
// for (const user of users) {
//     let div = document.createElement('div');
//     div.style.backgroundColor = '#9a9ed7';
//     div.style.margin ='10px';
//     let div1 = document.createElement('div');
//     let div2 = document.createElement('div');
//     let div3 = document.createElement('div');
//     let div4 = document.createElement('div');
//     div1.innerText = `${user.name}`;
//     div2.innerText = `${user.age}`;
//     div3.innerText = `${user.status}`;
//     div4.innerText = `${user.address.city} ${user.address.country} ${user.address.street} ${user.address.houseNumber}`;
//     div.appendChild(div1);
//     div.appendChild(div2);
//     div.appendChild(div3);
//     div.appendChild(div4);
//     document.body.appendChild(div);
// }

// *******************************************************************************************************************

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//     розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком,
//     з блоками для кожної властивості

// ******************************************************************************************************************

// - Дано 2 масиви з рівною кількістю об'єктів.
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Частковий приклад реультату:
//     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address:
//             {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
// Масиви:
//
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false},
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'},
// ];
//
// let usersWichCities =[];
//
//
// for (let i = 0; i < usersWithId.length; i++) {
//     for (let j = 0; j < citiesWithId.length; j++) {
//         if (usersWithId[i].id === citiesWithId[j].user_id) {
//             usersWichCities.push(usersWithId[i]);
//             usersWichCities[i].address = citiesWithId[j];
//         }
//     }
// }
//
// console.log(usersWichCities);

// ******************************************************************************************************************

// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів
// по id , class та тегу
// - змінити цей текст використовуючи селектори id, class,  tag
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені.
//     n та m отримати з prompt
//
// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні
// доступи та дії
// - знайти всі елементі, які мають class
// - знайти всі параграфи ,та змінити текст на hello oktenweb!
//     - знайти всі div та змінити ім колір на червоний

// ============*******************************************************************************************************
// ====class===
//     ============
//******************************************************************************************************************
// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту
// яка вказана в параграфі.
//     створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде
// змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// let ul = document.createElement('ul');
//
// let cont = document.getElementById('content');
//
// cont.appendChild(ul);
//
// let h2 = document.getElementsByTagName('h2');
//
// for (const h2Element of h2) {
//     let innerText = h2Element.innerText;
//     let li = document.createElement('li');
//     let li_in_tx = li.innerText = innerText;
//     ul.appendChild(li);
// }

// *******************************************************************************************************************

//
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в
// окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
//
// for (const rule of rules) {
// let div = document.createElement('div');
// div.style.backgroundColor = '#f58787'
// let div_title = document.createElement('div');
// let div_body = document.createElement('div');
// document.body.appendChild(div);
// div.appendChild(div_title);
// div.appendChild(div_body);
// let txt1 = rule.title;
// div_title.innerText = txt1;
// let txt2 = rule.body;
// div_body.innerText = txt2;
// }

//*******************************************************************************************************************

// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users.
//     За допомогою document.createElement вивести їх в браузер.
//     Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts.
//     За допомогою document.createElement вивести їх в браузер.
//     Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує)
// в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments.
//     За допомогою document.createElement вивести їх в браузер.
//     Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує)
// в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts.
//     Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments.
//     Объеденить соответсвующий post с соответсвующими comment и вывести в браузер.
//     Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту