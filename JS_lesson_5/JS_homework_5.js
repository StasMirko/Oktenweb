// ==============================================****************************************************************** 1
//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// function Fun_tage (name_tage, descr_teg, mas_with_atr) {
// this.name_tage = name_tage || 'no';
// this.descr_teg = descr_teg || 'no';
// this.mas_with_atr = mas_with_atr || [];
//
// }
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
//
// let a = new Fun_tage('<a>','предназначен для создания ссылок ',['href', 'rel']);
// console.log(a);
//
// let div = new Fun_tage('<div>', 'предназначен для выделения фрагмента документа ',
//     ['align', 'title']);
// console.log(div);
//
// let h1 = new Fun_tage('<h1>','наиболее важный заголовок',['align', null]);
// console.log(h1);
//
// let span = new Fun_tage('<span>', 'определения строчных элементов',['универсальные',
//     'атрибуты'] );
// console.log(span);
//
// let input = new Fun_tage('<input>', 'разные элементы интерфейса и обеспечить ' +
//     'взаимодействие с пользователем', ['align', 'disabled']);
// console.log(input);
//
// let form = new  Fun_tage('<form>', 'устанавливает форму на веб-странице', ['action',
// 'name']);
// console.log(form);
//
// let option = new Fun_tage('<option>', 'определяет отдельные пункты списка',
//     ['label', 'selected']);
// console.log(option);
//
// let select = new Fun_tage('<select>', 'раскрывающегося списка',
//     ['multiple', 'required']);
// console.log(select);

// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================*******************************************************************
//
//
// ==============================================******************************************************************  2
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
//
// class Cl1 {
//     constructor(name_tag, descr_tag, arr_atr) {
//         this.name_tag = name_tag  || 'no';
//         this.descr_tag = descr_tag || 'no';
//         this.arr_atr = arr_atr || [];
//     }
// }
//
// let a1 = '<a>';
// let a2 = 'предназначен для создания ссылок';
// let a3 = [{name:'href', descr: 'силка'}, {name: 'rel', descr: 'toooooo'}];
//
// let a = new Cl1(a1, a2, a3);
// console.log(a);

// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================******************************************************************
//
//
//
// ==============================================***************************************************************
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
//     додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

class Car {
    constructor(model, producer, year, speed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.speed = speed;
        this.volume = volume;
    }

    drive(){
        console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    };

    info(){
        console.log(`Model: ${this.model}, producer: ${this.producer}, year: ${this.year}, 
        speed: ${this.speed}, volume: ${this.volume}`);
    };

    increaseMaxSpeed(newSpeed){
        this.speed = this.speed + newSpeed;
        console.log(this.speed);
    };

    changeYear(newValue){
        this.year = newValue;
        console.log(this.year);
    };

    addDriver(driver){
        Car.driver = driver
        console.log(Car);
    };
}


let bmw = new Car('5 series', 'german', 2001, 170, 3);

bmw.drive();
bmw.info();
bmw.increaseMaxSpeed(30);
bmw.changeYear(2020);
bmw.addDriver('Stas');





//
//
// class Car {
//     constructor(model, produser, year_prod, max_sp, v,) {
//         this.model = model;
//         this.produser = produser;
//         this.year_prod = year_prod;
//         this.max_sp = max_sp;
//         this.v = v;
//     }
//     drive(){
//         console.log('їдемо зі швидкістю  ' + this.max_sp + '  км/год' );
//     }
//     info(){
//         console.log(Car);
//     }
//     increaseMaxSpeed (newSpeed){
//         console.log(this.max_sp + newSpeed);
//     }
//     changeYear (newValue){
//         console.log(this.year_prod+newValue);
//     }
//     addDriver (driver){
//         Car.driv = driver;
//         return Car.driv;
//     }
//
// }
//
// let skoda = new Car('Fabia','Cheh',2015,130,1);
//
// console.log(skoda);
//
// skoda.drive();
// skoda.info();
// skoda.increaseMaxSpeed(20);
// skoda.changeYear(2);
// skoda.addDriver('Stas');
// console.log(skoda);


// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік
//     випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і доавляет його в поточний об'єкт car
// ==============================================

// function F1_car(model, produser, year_prod, max_sp, v) {
//     this.model = model;
//     this.produser = produser;
//     this.year_prod = year_prod;
//     this.max_sp = max_sp;
//     this.v = v;
//     this.drive = function () {
//         console.log(`Їдьмо зі швидкістю ${ this.max_sp } км/год!`);
//     }
//     this.info = function () {
//         console.log(this.model, this.produser, this.year_prod, this.max_sp, this.v);
//     }
//     this.increaseMaxSpeed = function (newSpead) {
// this.max_sp = this.max_sp + newSpead;
//     }
//     this.changeYear = function (newValue) {
// this.year_prod = newValue;
//     }
//     this.addDriver = function (driver) {                                                         //@@@@@@@@@
//     }
// }
//
// let bmw = new F1_car('5','bavaria',2001,200,3.5);
// console.log(bmw);
//
// bmw.drive();
//
// bmw.info();
//
// bmw.increaseMaxSpeed(30);
// console.log(bmw);
//
// bmw.changeYear(1999);
// console.log(bmw);
//
// bmw.addDriver('stas');
// console.log(bmw);

// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник,
//     рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
//
// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

// class Popel {
//     constructor(name, age, foot_size) {
//         this.name = name;
//         this.age = age;
//         this.foot_size = foot_size;
//     }
// }
//
// let katia = new Popel('Katerina', 22,36);
// let dana = new Popel('Dana',32,40);
// let sara = new Popel('Sara',21,38);
// let nata = new Popel('Natali', 37,38);
// let katia2 = new Popel("Katerina", 26,37);
// let nastia = new Popel("Nastia", 22,37);
// let alona = new Popel('Alona',19,37);
//
// let arr = [katia, dana, sara, nata, katia2, nastia, alona];

// class Prints {
//     constructor(name, age, foot_size_find) {
//         this.name = name;
//         this.age = age;
//         this.foot_size_find = foot_size_find;
//     }
// }
//
// let stas = new Prints('Stas',27,37);

// for (let popel of arr) {
//     if (popel.foot_size === stas.foot_size_find) {
//         console.log(`${stas.name} i ${popel.name} це пара!!!`);
//     }
// }



// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов,
// та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

// function Popel (name, age, foot_size) {
//         this.name = name;
//         this.age = age;
//         this.foot_size = foot_size;
// }
//
// let katia = new Popel('Katerina', 22,36);
// let dana = new Popel('Dana',32,40);
// let sara = new Popel('Sara',21,38);
// let nata = new Popel('Natali', 37,38);
// let katia2 = new Popel("Katerina", 26,37);
// let nastia = new Popel("Nastia", 22,37);
// let alona = new Popel('Alona',19,37);
//
// let arr = [katia, dana, sara, nata, katia2, nastia, alona];
//
// function Prints (name, age, foot_size_find) {
//         this.name = name;
//         this.age = age;
//         this.foot_size_find = foot_size_find;
//         this.find = function () {
//             for (let popel of arr) {
//                 if (popel.foot_size === this.foot_size_find) {
//                     console.log(`${this.name} i ${popel.name} це пара!!!`);
//                 }
//             }
//         }
// }
//
// let stas = new Prints('Stas',27,37);
//
// stas.find()

// ********************************************************************************************************************

// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної
//     потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності
//     двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його
// вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

// class Car {
//     constructor(model, power, owner, prise, year) {
//         this.model = model;
//         this.power = power;
//         this.owner = owner;
//         this.prise = prise;
//         this.year = year;
//     }
//     remont (new_owner) {
//         this.power = this.power + this.power * 0.1;
//         this.owner.name = new_owner;
//         this.prise = this.prise + this.prise * 0.05;
//     }
// }
//
// let car1 = new Car('X1',100, {name: 'Stas', age: 21, skill: 1}, 1000, 2001);
// let car2 = new Car('X2',200, {name: 'Vasia', age: 22, skill: 2}, 2000, 2002);
// let car3 = new Car('X3',300, {name: 'Orest', age: 23, skill: 3}, 3000, 2003);
// let car4 = new Car('X4',400, {name: 'Ihor', age: 24, skill: 4}, 4000, 2004);
// let car5 = new Car('X5',500, {name: 'Vitaliy', age: 25, skill: 5}, 5000, 2005);
// let car6 = new Car('X6',600, {name: 'Artem', age: 26, skill: 6}, 6000, 2006);
// let car7 = new Car('X7',700, {name: 'Serhiy', age: 27, skill: 7}, 7000, 2007);
// let car8 = new Car('X8',800, {name: 'Artur', age: 28, skill: 8}, 8000, 2008);
// let car9 = new Car('X9',900, {name: 'Petro', age: 29, skill: 9}, 9000, 2009);
// let car10 = new Car('X10',1000, {name: 'Oleh', age: 30, skill: 10}, 10000, 2010);
//
// let cars =[car1,car2,car3,car4,car5,car6,car7,car8,car9,car10];
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
//     if (car.owner.skill < 25 && car.owner.age > 25) {
//         console.log(`${car.owner.name} go to kursi!! `);
//         car.owner.skill = car.owner.skill + 1;
//     }
// }
//
// console.log(cars);

// *******************************************************************************************************************
