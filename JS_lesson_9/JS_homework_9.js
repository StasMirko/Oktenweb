//********************************************************************************************************************

// Треба реалізувати свій розпорядок дня.
//     Колбеками, промісами та асинк авейт.
//
//     В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
//     Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
//
//     Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
//     Якщо ж все ок, то ви маєте прожити свій звичайний день.
//     Кожна подія має бути з рандомною (не по зростанню) затримкою.

                                             // Call Back

// console.log('*****************************');
// console.log('    Мій розпорядок дня');
// console.log('*****************************');
//
// function routine(item_name, result, action) {
//
//     console.log('-----------------------------')
//     console.log(item_name)
//     console.log('-----------------------------')
//
//     setTimeout( () => {
//
//         if (result === false) {
//             action('Ти не виконав цей  пункт! Це поразка!', null);
//             return
//         } else {
//             action(null, 'Завдання успішно виконано, приступай до наступного!')
//         }
//
//     }, Math.random()*10000)
//
//
// }
//
// routine('Прокинутись в 8 00',true,(err, done) => {
//
//     if (err) {
//         console.log(err);
//         console.log('Коментар: Блін, знову проспав!')
//         return
//     }
//     console.log(done)
//     console.log('Коментар: Хто рано встає, тому цілий день хочеться спати)');
//
//     routine('Вивчити ІТ і англійську',false,(err, done) => {
//
//         if (err) {
//             console.log(err);
//             console.log('Коментар: так ти будеш бомжом!')
//             return
//         }
//         console.log(done)
//         console.log('Коментар: скоро будеш мідлом)');
//
//         routine('Сходити в спортзал',true,(err, done) => {
//
//             if (err) {
//                 console.log(err);
//                 console.log('Коментар: Скоро будеш жирним дрищом!')
//                 return
//             }
//             console.log(done)
//             console.log('Коментар: Ого ти машина)');
//
//         });
//
//     });
//
// });

// routine('Вивчити ІТ і англійську',false,(err, done) => {
//
//     if (err) {
//         console.log(err);
//         console.log('Коментар: так ти будеш бомжом!')
//         return
//     }
//     console.log(done)
//     console.log('Коментар: скоро будеш мідлом)');
//
// });

// routine('Сходити в спортзал',false,(err, done) => {
//
//     if (err) {
//         console.log(err);
//         console.log('Коментар: Скоро будеш жирним дрищом!')
//         return
//     }
//     console.log(done)
//     console.log('Коментар: Ого ти машина)');
//
// });



                                                    // Promise



// function routine1(item_name, result) {
//
//     return new Promise((resolve, reject) => {
//
//     console.log('-----------------------------')
//     console.log(item_name)
//     console.log('-----------------------------')
//
//     setTimeout( () => {
//
//         if (result === false) {
//             reject('Ти не виконав цей  пункт! Це поразка!');
//
//         } resolve('Завдання успішно виконано, приступай до наступного!')
//
//
//     }, Math.random()*5000)
//
//     })
//
// }
//
// routine1('Прокинутись в 8 00',true)
//
// .then((value)=>{
//     console.log(value);
//     console.log('Коментар: Хто рано встає, тому цілий день хочеться спати)');
//
//     return routine1('Вивчити ІТ і англійську', true);
//
// })
//
//
// .then((it) => {
//     console.log(it);
//     console.log('Коментар: скоро будеш мідлом)');
//
//     return routine1('Сходити в спортзал', true)
//
// })
//
//
// .then((gym) => {
//     console.log(gym);
//     console.log('Коментар: Ого ти машина)');
//
// })
//
// .catch(reason => {
//     console.log(reason);
//     console.log('Коментар: як можна себе до такого довести!')
//
// })
//
// .finally(() => {
//     console.log('День завершився!')
// })


                                                 // Async Await

// function routine(item_name, result) {
//
//     return new Promise((resolve, reject) => {
//
//         console.log('-----------------------------')
//         console.log(item_name)
//         console.log('-----------------------------')
//
//         setTimeout(() => {
//
//             if (result === false) {
//
//                 reject('Ти не виконав цей пункт, це поразка!!!');
//
//             } resolve ('Завдання успішно виконане!!!')
//
//         }, Math.random() * 5000);
//
//     })
//
// }
//
//
// async function routine_async() {
//
//     try {
//
//
//         const morning = await routine('Прокинутись в 8 00', true);
//         console.log(morning);
//         const it = await routine('Вивчити ІТ і англійську', true);
//         console.log(it);
//         const gym = await routine('Сходити в спортзал', false);
//         console.log(gym);
//     } catch (err) {
//         console.log(err);
//     }
//
// }
//
// routine_async();

// ******************************************************************************************************************

// Реалізувати друкарську машинку.
//     У вас є текст "Hello World".
//     Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.
//     Приклад: "Hello"
// Затримки:
//     H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)

// function typewriter(letter) {
//
//     return new Promise(resolve => {
//
//
//         setTimeout(() => {
//
//             resolve(letter);
//             document.write(letter);
//
//         }, Math.random() * 1000)
//
//     })
// }
//
// async function hello_World() {
//
//     const h = await typewriter('H')
//     const e = await typewriter('e')
//     const l = await typewriter('l')
//     const l2 = await typewriter('l')
//     const o = await typewriter('o')
//     const z = await typewriter(' ')
//     const w = await typewriter('W')
//     const o2 = await typewriter('o')
//     const r = await typewriter('r')
//     const l3 = await typewriter('l')
//     const d = await typewriter('d')
//     const d1 = await typewriter('!')
//     const d2 = await typewriter('!')
//     const d3 = await typewriter('!')
//     const d4 = await typewriter(')')
//
// }
//
// hello_World();

// *************************************************************************************************************

// доп таска:
//    
//     отсортировать с помощью setTimeout() массив  чисел 
//     [4,1,3,2,5] -> [1,2,3,4,5] 
// (массив может быть любой длины)
// условие: нельзя пользоваться методами массивов

// let arr = [4,1,3,2,6,8,5,10,7,9];
// let new_arr = [];
//
// for (let i = 0; i < arr.length; i++) {
//
//     setTimeout(() => {
//         new_arr.push(arr[i]);
//     }, arr[i]);
// }
//
// console.log(new_arr);

//***********************************************************************************************************
// в цьому випадку неуспішне виконання одного з пункту не зупиняє подальшого процесу

function orderItem(item, result) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (!result){
                resolve(`You did not fulfill the item: ${item} `);
            } resolve(`The item ${item} is completed successfully`)

        }, Math.random() * 5000);
    })
}

async function routine() {
    try {
        const p1 = await orderItem('Wake up at 9', false);
        console.log(p1);
        const p2 = await orderItem('Learn IT', true);
        console.log(p2);
        const p3 = await orderItem('Learn English', true);
        console.log(p3);

    } catch (e) {
        console.log(e);
    }
}

routine();


























