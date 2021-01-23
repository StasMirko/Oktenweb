//*****************************************************************************************************

                                         // Closures.Async.Fetch

//*****************************************************************************************************

                                                   // Fetch

// Спеціальний метод який дозволяє робити запити на сторонні ресурси
// На хороших сайтах є АПІ і з ними можна робити інтеграцію ( прогноз погоди, курс валют...)
// плагін на гарний джейсон джейсон вю
//
// fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')    //повертається проміс
//     .then(value => {
//         console.log(value);
//         return value.json()            // повертаємо джейсон обєкт в наступний зен
//     })
//     .then(kurs => {
//         console.log(kurs)
//     })

//*******************************************************************************************************************

                                              // Call Apply Bind

// carryining - привязка  контексту зіз

// let karina = {
//     name: 'Karina',
//     age: 14,
//     position: 'Jun',
//     payment: 999999
// }
//
// let dimas = {
//     name: 'Dima',
//     wife: false,
//     payment: 2000,
//     car: false
// }
//
// function changePayment(newPayment, newPosition) {
// this.payment = newPayment;
// this.position = newPosition
//     console.log(this);
// }
//
// changePayment.apply(karina, [4000, 'Sinior']);                 // вакликаються одноразово, можна декілька разів
// changePayment.call(karina, 3000, 'midl');                 // різниця між ними в написанні тільки
//
// let bind = changePayment.bind(karina, 300, 'director');          // bind запамятає, що є привязка до каріни
//
// console.log(bind);
// console.log(bind);                            // скільки разів викликаємо, стільки разів буде мінятися зп

//******************************************************************************************************************

                                               // Closures

// function user(){
//
//     let _login = 'admin';                             // приватні змінні називають з _
//     let _password = '12345';
//
//     function log_user(login, password) {
// if (login===_login && password===_password){
//     console.log('Welkom')
// } else {
//     console.log('Mistakes!')
// }
//     }
//     return {
//         log_user                  // повертаю обєкт в якого ключ і велю дорівнюють log_user, можна і масив і просто
//     }                             // якщо ключ і велю однакові томожна писати не два слова, а одне
// }
//
// let dima = user();
//
// dima.log_user('dimas','54321');     // так до нього можна звернутись як до обєкта
//
// let admin = user();
//
// admin.log_user('admin','12345');
//
//
// //Каунтер на замикання (часто на співбесідах просять написати на листку) :
//
// function counter() {
//
//     let z = 0;
//
//     function plusOne() {
//         z++
//         console.log(z);
//     }
//
//     return {
//         plusOne
//     }
//
// }
//
// let f = counter();
//
// f.plusOne();
// f.plusOne();
// f.plusOne();
// f.plusOne();
// f.plusOne();


// *******************************************************************************************************************

                                                // Map Set

// Наш звичайний обєкт приймає ключем тільки стрінгу
// Мап це такий обєкт який приймає ключем і велю все що завгодно ( навіть інший обєкт )

let mapa = new Map();

let vitalik = {name: 'Vitalik'};

mapa.set(vitalik, ['Test', 1, 3])

console.log(mapa);

let newVar = mapa.get(vitalik);

mapa.has(vitalik); //чи є присутній такий ключ

mapa.delete(vitalik) //видалити такий ключ

console.log(newVar);
console.log(mapa)
// за допомогою мапа можна з масиву обєктів знайти лише унікальний обєкт



// Сет це аналог масива який зберігає унікальні значення (забирає до масиву тільки по одному унікальному значенню)

let seeett = new Set();

seeett.add(2);
seeett.add(2);
seeett.add(2);
seeett.add(3);
seeett.add(2);
seeett.add(2);

console.log(seeett);


//******************************************************************************************************************




































