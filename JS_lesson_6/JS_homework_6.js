// *******************************************************************************************************************

// - создать массив с 20 числами.
//
// let numbers = [93,84,115,3,38,4,1,77,48,90,333,55];
//
// let arrSort = numbers.sort((a, b)=>{
//     return a-b;
// })
//
// console.log(arrSort);
// *******************************************************************************************************************

// -- при помощи метода sort и колбека  отсортировать массив.
//
// let num_sort = numbers.sort((a,b)=>{
//     return a-b
// });
//
// console.log(num_sort);

// ********************************************************************************************************************

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
//
// let nArr = numbers.sort((a,b)=>{
//     return b-a;
// })
//
// console.log(nArr);


// let num_sort = numbers.sort((a,b)=>{
//     return b-a
// });
//
// console.log(num_sort);

// ********************************************************************************************************************

// -- при помощи filter получить числа кратные 3

// let nFilt = numbers.filter(value => {
//     return !(value%3);
// })
//
// console.log(nFilt);


//
// let filter_3 = numbers.filter(value => {
//      return !(value%3)
// })
//
// console.log(filter_3);

// ********************************************************************************************************************

// -- при помощи filter получить числа кратные 10

//
// let filter_10 = numbers.filter(value => {
//     return !(value%10)
// })
//
// console.log(filter_10);

// *********************************************************************************************************************

// -- перебрать (проитерировать) массив при помощи foreach()
//
// let arr = numbers.forEach(value => {
//     console.log(value);
// })


//
// let forEach = numbers.forEach((value)=>{
//     console.log(value);
// });

// ********************************************************************************************************************

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let arr = numbers.map(value => {
//     return value*3;
// })
// console.log(arr);
//

//
// let map = numbers.map(value => {
//     return value*3
// });
//
// console.log(map);
// console.log(numbers);

// *******************************************************************************************************************

// - создать массив со словами на 15-20 элементов.

// let words = ['Vova', 'OLEG', 'Nastia', 'Marina', 'Alona', 'Alina', 'Viktor', "Roma", 'Stas', 'Orest', 'Ihor',
//     'Tetiana', 'Halina', 'Artur', 'Vitalik', 'Uriy', 'Serhiy'];

// ******************************************************************************************************************
// let arr = words.sort((a,b) => {
//     if (a>b){
//         return 1;
//     }
//     return -1;
// })
//
// console.log(arr);


// -- отсортировать его по алфавиту в восходящем порядке.
//
// let sort_words1 = words.sort((a,b)=>{
//     if (a>b) {
//         return 1;
//     }
//     return  -1;
// });
//
// console.log(sort_words1);

// -- отсортировать его по алфавиту  в нисходящем порядке.

//
// let sort_words1 = words.sort((a,b)=>{
//     if (a>b) {
//         return -1;
//     }
//     return  1;
// });
//
// console.log(sort_words1);

// *****************************************************************************************************************

// -- отфильтровать слова длиной менее 4х символов
//
// let arr = words.filter(value => {
//     return value.length <5
// })
//
// console.log(arr);

//
// let words_filter = words.filter(value => {
//     return  value.length<5
// });
//
// console.log(words_filter);

// *******************************************************************************************************************

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
//
// let words_map = words.map(value => {
//     return value + '!';
// });
//
// console.log(words_map);

// ******************************************************************************************************************

// Все робити через функції масивів (foreach, map ...тд)

// Дан масив :

    // let users = [
    // {name: 'vasya', age: 31, status: false},
    // {name: 'petya', age: 30, status: true},
    // {name: 'kolya', age: 29, status: true},
    // {name: 'olya', age: 28, status: false},
    // {name: 'max', age: 30, status: true},
    // {name: 'anya', age: 31, status: false},
    // {name: 'oleg', age: 28, status: false},
    // {name: 'andrey', age: 29, status: true},
    // {name: 'masha', age: 30, status: true},
    // {name: 'olya', age: 31, status: false},
    // {name: 'max', age: 31, status: true}
    // ];

    // ************************************************************************************************************

    // - відсортувати його за  віком (зростання , а потім окремо спадання)

// let year = users.sort((a,b) => {
//     return a.age - b.age;
// })
//
// console.log(year);

//
// let us_sort1 = users.sort((a,b,)=>{
//    return a.age - b.age;
// },);
//
// console.log(us_sort1);
//
// let us_sort2 = users.sort((a,b)=>{
//     return b.age-a.age;
// })
//
// console.log(us_sort2);

// *********************************************************************************************************************

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let name = users.sort((a,b) =>{
//     return a.name.length - b.name.length;
// })
// console.log(name);


// let us_sort2 = users.sort((a,b)=>{
//     return a.name.length - b.name.length;
// })
//
// console.log(us_sort2);

//
// let us_sort3 = users.sort((a,b)=>{
//     return b.name.length - a.name.length;
// })
//
// console.log(us_sort3);

// *******************************************************************************************************************

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому
// принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
//

// let usersJSON = JSON.parse(JSON.stringify(users))
//
// let usId = usersJSON.map(((value, index) => {
//     value.id = index + 1;
//     return value;
// }));
//
// console.log(usId);
// console.log(users);


// let user_js = JSON.parse(JSON.stringify(users))
//
// let id = user_js.map(value => {
//     return value.id = value.age - 10;
// })
//
// console.log(users);
// console.log(id);
// console.log(user_js);

// *******************************************************************************************************************

// - відсортувати його за індентифікатором
//
// let sort_id = users.sort((a,b)=>{
//     return a.id - b.id;
// });
//
// console.log(sort_id);

// *********************************************************************************************************************

// -- наисать функцию калькулятора с 2мя числами и колбеком

// function calculator(a, b, callback) {
//         return callback(a, b);
// }
//
// const call = calculator(5,10, (a, b) => {
//     return a + b;
// })
//
// console.log(call);


// function kalc(a, b, callback) {
//     return callback (a,b);
// }
//
// let res = kalc(10,20,function (a,b) {
// return  a+b;
// })
//
// console.log(res);

// -- наисать функцию калькулятора с 3мя числами и колбеком
//
// function kalc(a, b, c, callback) {
//     return callback (a,b,c);
// }
//
// let res = kalc(10,20, 2,function (a,b,c) {
//     return  a+b*c;
// })
//
// console.log(res);


// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//
// let cars = [
// {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
// {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
// {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
// {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
// {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
// {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
// {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
// {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
// {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
// {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
// {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
// {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
// {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];

// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів
//
// let cars_vol = cars.filter(value => {
//     return value.volume > 3;
// });
//
// console.log(cars_vol)

// - двигун = 2л

//
// let cars_vol = cars.filter(value => {
//     return value.volume === 3;
// });
//
// console.log(cars_vol)

// - виробник мерс

//
// let cars_hrod = cars.filter(value => {
//     return value.producer === 'mercedes';
// });
//
// console.log(cars_hrod)

// - двигун більше 3х літрів + виробник мерседес

//
// let cars_vol_prod = cars.filter(value => {
//     return (value.volume >= 3 && value.producer === 'mercedes');
// });
//
// console.log(cars_vol_prod)

// - двигун більше 3х літрів + виробник субару
// - сили більше ніж 300
// - сили більше ніж 300 + виробник субару
// - мотор серіі ej
//
// let ej = cars.filter((value => {
//     return value.engine.startsWith('ej')
// }))
//
// console.log(ej);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
// - двигун меньше 3х літрів + виробник мерседес
// - двигун більше 2л + сили більше 250
// - сили більше 250  + виробник бмв
//
//********************************************************************************************************************
//
// - взять слдующий массив
// let usersWithAddress = [
// {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
// {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
// {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
// {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
// {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
// {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
// {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
// {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
// {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
// {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
// {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
// ];
// -- отсортировать его по id пользователей
// -- отсортировать его по id пользователей в обратном опрядке
//
// let sort_id = usersWithAddress.sort((a,b)=>{
//     return b.id - a.id
// })
//
// console.log(sort_id);

// -- отсортировать его по возрасту пользователей
// -- отсортировать его по возрасту пользователей в обратном порядке
// -- отсортировать его по имени пользователей
// -- отсортировать его по имени пользователей в обратном порядке
//
// let sort_nam = usersWithAddress.sort((a,b)=>{
//     if (a.name>b.name){
//         return -1;
//     }
//     return 1;
// })
//
// console.log(sort_nam);

// -- отсортировать его по названию улицы  в алфавитном порядке
// -- отсортировать его по номеру дома по возрастанию

// let sort_namb = usersWithAddress.sort((a,b)=>{
//     return a.address.number-b.address.number;
// })
//
// console.log(sort_namb);
//


// -- отфильтровать (оставить) тех кто младше 30
// -- отфильтровать (оставить) тех у кого отрицательный статус
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
//
// let filtr_age_stat = usersWithAddress.filter(value => {
//     return value.status === false && value.age<30;
// })
//
// console.log(filtr_age_stat);

// -- отфильтровать (оставить) тех у кого номер дома четный
//
// let a = usersWithAddress.filter(value => {
//     return !(value.address.number%2)
// })
//
// console.log(a);

// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння
//     змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна
//     на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік
// більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

// class Car {
//     constructor(model, power, owner, price, year) {
//         this.model = model;
//         this.power = power;
//         this.owner = owner;
//         this.price = price;
//         this.year = year;
//     }
//     remont = function (driver) {
//         this.power = this.power + this.power * 0.1;
//         this.owner.name = driver;
//         this.prise = this.prise + this.prise * 0.05;
//
//     }
//
// }
//
// let car1 = new Car('audi', 100,{name: 'Oleh', age:21, experience: 3 }, 1000,2003);
// let car2 = new Car('audi', 100,{name: 'Oleh', age:21, experience: 3 }, 1000,2003);
// let car3 = new Car('audi', 100,{name: 'Oleh', age:21, experience: 3 }, 1000,2003);
// let car4 = new Car('audi', 100,{name: 'Oleh', age:21, experience: 3 }, 1000,2003);
// let car5 = new Car('audi', 100,{name: 'Oleh', age:21, experience: 3 }, 1000,2003);
// let car6 = new Car('audi', 100,{name: 'Oleh', age:21, experience: 3 }, 1000,2003);
// let car7 = new Car('audi', 100,{name: 'Oleh', age:21, experience: 3 }, 1000,2003);
//
//
//
// let cars =[car1,car2,car3,car4,car5,car6,car7,];
//
// console.log(cars)
//
//
// for (let i = 1; i < cars.length; i+=2) {
//     cars[i].remont()
//     cars[i].owner.name =`Name ${i}`
// }
//
// console.log(cars)
//
// for (const car of cars) {
//     if (car.owner.experience < 25 && car.owner.age > 25) {
//         console.log(`${car.owner.name} go to kursi!! `);
//         car.owner.experience = car.owner.experience + 1;
//     }
// }
//
// console.log(cars);

//*******************************************************************************************************************

// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший
// индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива
//     не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве,
//     выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
//
// let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
//
// function f1(array, el) {
//     let min = array.indexOf(el);
//     let max = array.lastIndexOf(el);
//     console.log(min, max);
// }
//
// f1(arr,1);

//****************************************************************************************************************
