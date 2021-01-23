// ****************************************************************************************************************

                                            // Тема 4:  ФУНКЦІЇ

// *****************************************************************************************************************

                                            // Методи роботи зі стрічками

let str = 'Hello WORLD';

let index_of = str.indexOf('llo');               // показує на якій позиції лежить перший такий символ
console.log(index_of);

let last_index_of = str.lastIndexOf('l');        // показує на якій позиції лежить останній такий символ

console.log(str.charAt(7));                      // показує який символ лежить на цій позиції

let cnkt = str.concat('  JS');                   // добавляє до стрінги значення

console.log(cnkt);

let rpls = str.replace('Hello', 'Bay');   // перший параметр що вирізаємо,
                                                               // другий параметр що вставляємо
console.log(rpls);

let sls = str.slice(2,5);
console.log(sls);                                               //вирізає частину стрічки з по


let mas1 = ['nastia', 'alyona', 'vika', 'katia'];

let s = mas1.join(' -/- ');                              // щоб зєднати елементи масиву ( по дефолту через кому)

console.log(s);

let s2 = str.split(' ');                         //розділяє по символу стрінгу на масив
                                                         // ( по дефолту буде масив букв і символів)
console.log(s2);

const ml1 = 'StasMq@gmail.com';
const ml2 = 'stasmq@gmail.com';
const ml3 = '   stasmq@gmail.com     ';

console.log(ml1===ml2);                               // false

console.log(ml1.toLowerCase());                       // вирівнює регістр до маленьких букв

console.log(ml1===ml2);                               // false

console.log(ml1.toLowerCase()===ml2.toLowerCase());   // true

console.log(ml2.toUpperCase());                       // вирівнює регістр до великих букв

let b = ml1.includes('@');                            // чи містить стрінга цей елемент
console.log(b);                                       // буде видавати true


let c = ml3.trim();                                   // видаляє пробіли з початку і з кінця стрінги
console.log(c);

ml1.toLowerCase().trim()                              // так треба описувати емейли, щоб все добре працювало

// *****************************************************************************************************************

                                              // ФУНКЦІЇ

function f1( because, because2, because3 ) {
    console.log('Learn IT always  ' + because + ' lern English always ' + because2 + ' Gym often ' + because3);

}

f1('because it really helps you!','because it halps you on IT','because it cull');
f1('because you want to bay big money!','super','halse');
f1('because you want to live how you dream!','good','big');




function f2(name = 'невідомо', age = 'невідомо') {           // так задаються дефолтні значення
    console.log('Мене звати  ' + name + '.  Мені  ' + age + '  років');
}

f2('Stas','27');
f2('Vova',);
f2('', '30');
f2();

// *******************************************************************************************************************

                                        // EXPRESSION + DECLARATION


dclr();                                     // можу викликати функцію до того як її запустив
                                            // це називається хойстинг
function dclr() {

}


let expr = function () {                     // не можу викликати функцію до того як її запустив

}

let expr2 = (name, age) => {                             // спрощений запис функції що вище
    console.log('My name is ' + name + '  I am  ' + age);// такий запис називається Arrow Function ( стрілочні функції)

}

expr2('Stas', 27);
expr2('orest', 23);

// ****************************************************************************************************************


                                                 // ARGUMENTS
                   //у кожній декларейшн функції по дефолту уже є змінна декларейшн
                   // Arguments це псевдомасив !!! масообєкт який поводить себе як масив.
                   // Аргументс має тільки декларейшн

function f3() {
    console.log(arguments);

}

f3('you', 'i', 24, true);                       // виводиться масив значень
f3(2,4);


// *******************************************************************************************************************

                                                // RETURN
                                                // Повертання (витягує з функції або з іншого замкнутого середовища)
                                                //

function f4(number1 = 0, number2 = 0) {
    console.log('number1 + number2 = ');
    return number1 + number2;                     // повертати можна тільки щось одне, через кому не можна
    console.log('це не виведеться в консоль');    // в ретьорна є один нюанс він повністю зупиняє виконання функції!!!
}


let suma1_2 = f4(10,20);
console.log(suma1_2);





function f5(number3, number4) {
    console.log(number3/number4);

}

f5(suma1_2,2);

// ******************************************************************************************************************

                                          // ARROW FUNCTION
                                          // У неї нема аргументів, простіше пишеться, не має хойстінгу

let f6 = (number5, number6) => {
     return number5 + number6;
}
 let suma_5_6 = f6(35,45);

console.log(suma_5_6);

// !!!  І ЦЕ ВСЕ МОЖНА ПЕРЕПИСАТИ НАБАГАТО ПРОСТІШЕ І БУДЕ ОЗНАЧАТИ ТЕ САМЕ

let f7 = (number7, number8) => number7 + number8;

let suma_7_8 = f7(35,45);

console.log(suma_7_8);


// АБО якщо функція приймає один параметер

let f8 = (number9) => {
    return number9 + 1000;
}
let suma9 = f8(67);
console.log(suma9);

// !!!  І ЦЕ ВСЕ МОЖНА ПЕРЕПИСАТИ НАБАГАТО ПРОСТІШЕ

let f9 = number10 => number10 + 1000;                               // тут є в середині  return

let suma10 = f9(67);
console.log(suma10);


// ****************************************************************************************************************

                                       // Lexical Environment
                                       // допомагає забезпечити приватність, ховає змінні

// {}  це називається блок виконання

{
    let x = 1;                                // x y не можуть вийти за область видимості. вони є замкнутими
    const y = 3;                              // в середині  Lexical Environment {}
}

// console.log(x, y);                            // нічого не вивидеться бо його не існує

// ***************************************************************************************************************

function isAdul(age) {
if (age>=18) {
    return 'Welcome'
}
return 'Go home'
}

console.log(isAdul(18));                // так можна обійтися без else, чим їх менше, тим краще

// *************************************************************************************************************

                                       // ТЕРНАРНИЙ ОПЕРАТОР

function isAdult2(age) {
    if (age>=18) {
        console.log('Welkome bro!');
    } else {
        console.log('Go homeee bro!!!');
    }
}

isAdult2(16);
isAdult2(22);

// !!!  І ЦЕ ВСЕ МОЖНА ПЕРЕПИСАТИ НАБАГАТО ПРОСТІШЕ

function isAdult3(age) {
age >= 18 ? console.log('Welkome BOSS!'): console.log(
    'Gooo homeee neBOSS!'
)
}

isAdult3(12);
isAdult3(120);

//якщо два елементи

function isAdult4(age, admin) {
    (age >= 18 && admin === 'stas') ? console.log('Welkome stas!'): console.log(
        'Gooo homeee neStas!'
    )
}

isAdult4(25,'boss')
isAdult4(27,'stas')



//так переприсвоюються змінні

let agee = 7;
let massage = agee >= 18 ? 'Goooooooooooood' : 'baaaaaaaaaaaaaad';

console.log(massage);


// **************************************************************************************************************