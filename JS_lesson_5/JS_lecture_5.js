// *****************************************************************************************************************

                                                 // ТЕМА №5
                                                 // Functions Constructor && Class
// *****************************************************************************************************************

                                                // Functions Constructor

function F1(color, power, model) {              // функції конструктори називають з великої букви
this.carcolor = color;
this.carpower = power;
this.carmodel = model;
this.owner = 'Salon';
this.carride = function () {
    console.log('goooooooooo ' + this.carcolor + '  car')
}
}

let bmw = new F1('black',30000,'5');
console.log(bmw);

let mers = new F1('red',40000,'S63 AMG');
console.log(mers);

console.log(mers.carmodel);                                   // можна звертатись як до обєкта через крапочку

bmw.carride();

bmw.carcolor = 'green';                                      // так щось міняємо або додаємо
bmw.tuning = true;




// *******************************************************************************************************************

                                                   // CLASS
//
                              // (під капотом функція конструктор(синтаксичний цукор))

class House  {
constructor(isPrivate, squere, rooms) {
    this.isPrivate = isPrivate;
    this.squere = squere;
    this.rooms = rooms;
    this.bildprogress = 0;
}
build(persent){
this.bildprogress<100 ?                               //назва метода який описується
this.bildprogress+=persent:
    console.log('gotovo!')
}
}


let Ametist = new House(true,46,1);
console.log(Ametist);

Ametist.build(50);
console.log(Ametist);

Ametist.build(5);
console.log(Ametist);

Ametist.build(15);
console.log(Ametist);

Ametist.build(30);
console.log(Ametist);

Ametist.build(50);
console.log(Ametist);


// ****************************************************************************************************************

// Об'єктно-орієнтоване програмування  ' +
// 'Матеріал з Вікіпедії
//
// одна з парадигм програмування, яка розглядає програму як множину «об'єктів», що взаємодіють між собою

// ****************************************************************************************************************

                                        // Extend ( наслідування )

class Human {
    constructor(wight, height, color, name = 'No name') {
        this.wight = wight;
        this.height = height;
        this.color = color;
        this.name = name                                                            // alt + insert
    }
    greeting() {
        console.log(this.name + '  tell Hello to you   ');
    }
}



class Developer extends Human {
    constructor(wight, height, color, name, skill) {
        super(wight, height, color, name);                      // автоматично прописує зіз батька
        this.skill = skill;
    }
    coding(){
        console.log('I know  ' + this.skill + '  and you not');
    }
    greeting() {
        console.log('Ce Jeeeest');
    }
}

let stud1 = new Human(90,160,'white', 'victor');

let devel1 = new Developer(100, 170,'red','stas','JS');

stud1.greeting();
console.log(stud1);

devel1.coding()
devel1.greeting();
console.log(devel1);

// ****************************************************************************************************************

                                              // Object.assign (ще один спосіб робити копії)
                                              //дозволяє два і більше обєкти зєднувати між собою
                                              // якщо ключі однакові то залишається останній
                                              // копіює тільки по першому рівні вложеності
                                              // треба писати з пустим початковим обєктом {}

let car = {
    name: 'skoda',
    model: 'fabia',
    prise: 6000,
}

let car2 = {
    name2: 'pejo',
    model2: '301',
    prise2: 7000,
}

// let car_car2 = Object.assign(car, car2,);
// let car_car2 = Object.assign(car, car2,{name: 'Ivan'});

// console.log(car_car2);

// console.log(car);                                                        // зміниться

// console.log(car2);                                                       // не зміниться


// щоб два обєкти не змінились першим елементом треба додати пустий обєкт

let car_car2 = Object.assign({}, car, car2,{name: 'Ivan'});

console.log(car_car2)

console.log(car);

console.log(car2);

// тепер копіюємо

let copy_car = Object.assign({}, car);

copy_car.name = 'RENO';

console.log(copy_car);

console.log(car);