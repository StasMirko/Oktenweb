//******************************************************************************************************************

                                                   // Call Back
                                    // функція яка параметром приймає іншу функцію
//
// function withCB(cb) {
// cb();
// }
//
// withCB(()=>{
//     console.log(20);
// })

// let money = 0;
//
// setTimeout(() => {
//     money = 999;
// },  1000 );
//
// console.log(money)
//
// function clearHouse(cb) {
//
//     setTimeout(() => {
//         money = 999;
//         cb()
//     },  1000 );
// }
//
// clearHouse(()=>{
//     console.log(money);
// })



// function orderTour(money, taskWhenReady) {
//     console.log('Дякую що звернулися до нас!')
//     console.log('Почекайте поки шукаються доступні тури!')
//
//
//     setTimeout(() => {
//         console.log('Тур знайдено!');
//
//         if (money<500) {
//             taskWhenReady('треба більше грошей(', null);
//             return
//         } else {
//             taskWhenReady(null ,'Ви политите в Занзібар!')
//         }
//
//     }, 2000);
// }
//
// orderTour(400,(error, tour)=>{
//
//     if (error){
//         console.log('Мала, треба їсти мівіну!')
//         console.log('В агенстві сказали, що ', error)
//         return
//     }
//     console.log(`Ураа летимо на море ${tour}!!!`)
// })



// ПОМИЛКУ ПРОПИСУЄМО ПЕРШОЮ, НАВАНТАЖЕННЯ (УСПІХ) ДРУГИМ

// orderTour(1000,(error, tour)=>{
//     if (error) {
//         console.log('УУУррааа, летимо в popu!!!');
//         return
//     } else if (tour === 'Ви политите в Занзібар!' ) {
//         console.log('Фууу, набрид вже цей занзібар!')
//         return;
//     }
//     console.log('УУУррааа, летимо в Домінікану!!!')
//
// })

// ********************************************************************************************************************

                                                   // CallBack Hel

                            // Вложеність (ялинка) їми уже не користуються( максимум одна вложеність )


// function orderTour(money, taskWhenReady) {
//     console.log('Дякую що звернулися до нас!')
//     console.log('Почекайте поки шукаються доступні тури!')
//
//
//     setTimeout(() => {
//         console.log('Тур знайдено!');
//
//         if (money<500) {
//             taskWhenReady('треба більше грошей(', null);
//             return
//         } else {
//             taskWhenReady(null ,'Ви политите в Занзібар!')
//         }
//
//     }, 2000);
// }
//
//
// function prepareToTour(cb) {
//
//     setTimeout(()=>{
//         console.log('Я зібрався!')
//         cb(null, 'полетіли!')
//     },1500);
//
// }
//
//
//
// orderTour(600,(error, tour)=>{
//
//     if (error){
//         console.log('Мала, треба їсти мівіну!')
//         console.log('В агенстві сказали, що ', error)
//         return
//     }
//     console.log(`Ураа летимо на море ${tour}!!!`)
//
//
//     prepareToTour((error, date)=>{
// if (error) {
//     console.log('Блін, нема купальника!')
// return
// }
//         console.log(date)
//     })
// })

// ******************************************************************************************************************

                                               // Promise

                                        // Promise це обєкт, який має три стани
// 1. Пендінг ( очікує, поки зробиться якась асинхрона штука )
// 2. Реджект ( фінальний стан, з нього не можливо повернутись ) - проміс завалився, помилка
// 3. Резолт  ( фінальний стан, з нього не можливо повернутись ) - проміс виконався успішно, успіх


// function orderTour(money) {                 // колбеку вже не потрібно
//
//     return new Promise((resolve, reject) => {
//         console.log('Дякую що звернулися до нас!')
//         console.log('Почекайте поки шукаються доступні тури!')
//
//
//         setTimeout(() => {
//             console.log('Тур знайдено!');
//
//             if (money<500) {
//                 reject('треба більше грошей(');                   // не успіх
//             }
//               resolve  ('Занзібар!')                                    // успіх
//
//
//         }, 2000);
//     })
//
//
// }
//
//
// function prepareToTour() {                                // уже не приймає ніякого св
// return new Promise((resolve) => {
//     setTimeout(()=>{
//         console.log('Я зібрався!')
//         resolve('полетіли!')
//     },1500);
//
// })
//
// }
//
// orderTour(400)
//
// .then((tour)=>{                                    // це успішне виконання промісу, працює тільки тоді якщо був успіх
//     console.log(`Ураа летимо на море ${tour}!!!`)
// return prepareToTour()
// })
//
// .then(value => {                             // те що я повернув( ретьорн ) попадає в наступний зен
//     console.log(value);
//     return 'це наступний зен'
// })
//
// .then(value => {                               // те що я повернув( ретьорн ) попадає в наступний зен знову
//     console.log(value)                         // таке повернення називається проміс чейн
// })                                             // все іде вниз вниз вниз по промісу по цепочці
//
//
// .catch(error => {                     // ЦЕ при неуспішному виконнанні, примає причину( різн ), яку ми назвемо ерор
//     console.log(error)                // кетч пишеться переважно в самому кінці
// })
//
// .finally(()=>{               // виконується завжди незалежно від результату, пишеться в самому кінці
//     console.log('Фінал!!!');
// })
//




// **********************************************************************************************************************

                                     // Promise.all

//спеціальний метод, який приймає масив промісів
// одночасно запускаються незалежні одні від одного проміси
// час виконааня дорівнює часу виконання найдовшого промісу

// function orderTour(money) {                 // колбеку вже не потрібно
//
//     return new Promise((resolve, reject) => {
//         console.log('Дякую що звернулися до нас!')
//         console.log('Почекайте поки шукаються доступні тури!')
//
//
//         setTimeout(() => {
//             console.log('Тур знайдено!');
//
//             if (money<500) {
//                 reject('треба більше грошей(');                   // не успіх
//             }
//             resolve  ('Занзібар!')                                    // успіх
//
//
//         }, 2000);
//     })
//
//
// }

//
// function prepareToTour() {                                // уже не приймає ніякого св
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             console.log('Я зібрався!')
//             resolve('полетіли!')
//         },1500);
//
//     })
//
// }
//
//
// function promis1() {
// return new Promise((resolve, reject) => {
//     resolve(17)
// })
// }
//
//
//
// function promis2() {
//     return new Promise((resolve, reject) => {
//         resolve('TEST')
//     })
// }
//
// Promise.all([promis1(),promis2()]).then(value => {
//     console.log(value)
// })
//
// // використовують рідко зараз, бо якщо валиця один проміс, то не працює так як треба, тому є альтернатива
// // allSettled завжди попадає в зен, ніколи в кетч, але вертається масив обєктів
// // зараз його на практиці часто використовують
//
// Promise.allSettled([promis1(), promis2()])
//     .then(value => {
//         console.log(value);
//     })

//*******************************************************************************************************************

                                                   // Promise.race

// Є багато варіантів асинхроних дій, а нам треба тільки та яка буде найшвидшою, а якщо однаковий час, то найпершою
// Також приймає масив промісів
// Використовується, якщо є декілька слабких серверів, або запасні сервери, для перерозділення нагрузки
// Про заправку Вітя розповідав

// Promise.race([promis1(), promis1()])
//     .then(value => {
//         console.log(value);
//     })

//******************************************************************************************************************

                                                // Async await

// Написання асинхроного коду в синхроному стилі


// function orderTour(money) {                 // колбеку вже не потрібно
//
//     return new Promise((resolve, reject) => {
//         console.log('Дякую що звернулися до нас!')
//         console.log('Почекайте поки шукаються доступні тури!')
//
//
//         setTimeout(() => {
//             console.log('Тур знайдено!');
//
//             if (money<500) {
//                 reject('треба більше грошей(');                   // не успіх
//             }
//             resolve  ('Занзібар!')                                    // успіх
//
//
//         }, 2000);
//     })
//
//
// }
//
//
// function prepareToTour() {                                // уже не приймає ніякого св
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             console.log('Я зібрався!')
//             resolve('полетіли!')
//         },1500);
//
//     })
//
// }
//
// function promis1() {
//     return new Promise((resolve, reject) => {
//         resolve(17)
//     })
// }
//
// function promis2() {
//     return new Promise((resolve, reject) => {
//         resolve('TEST')
//     })
// }
//
//
//
//
//
//
// //
// // async function asynk () {
// // const order = await orderTour(600);
// //     console.log(order, '1');
// // const preper = await prepareToTour();
// //     console.log(preper, '2');
// // const one = await promis1();
// //     console.log(one, '3');
// // const two = await promis2();
// //     console.log(two, '4');
// // }
// //
// // asynk();
//
// // при помилках огортаємо потенційно небезпечний код в таку конструкцію
//
//
// async function asynk () {
//     try {
//
//         const order = await orderTour(600);
//         console.log(order, '1');
//         const preper = await prepareToTour();
//         console.log(preper, '2');
//         const one = await promis1();
//         console.log(one, '3');
//         const two = await promis2();
//         console.log(two, '4');
//     } catch (e) {
//         console.log(e);
//     }
// }
//
// asynk();



function f1() {
    return new Promise(resolve => {

        setTimeout(() => {
            resolve('1');
        },3000);

    })
}

function f2() {
    return new Promise(resolve => {

        setTimeout(() => {
            resolve('2');
        },2000);

    })
}

function f3() {
    return new Promise(resolve => {

        setTimeout(() => {
            resolve('3');
        },1000);

    })
}


async function fAll() {
    try {
        const a1 = await f1();
        console.log(a1);
        const a2 = await f2();
        console.log(a2);
        const a3 = await f3();
        console.log(a3);
    } catch (e) {
        console.log(e);
    }

}

fAll();
