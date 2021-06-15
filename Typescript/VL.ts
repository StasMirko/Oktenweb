const str: string = 'Hello typescript! '

// tsc VL.ts прописуємо в консолі

// any задаємо якщо не знаємо який буде тип

let arr: string[] = ['q', 'w', 'e'];
let namArr: Array<number> = [1, 2, 3, 4]

function f1(name: string, age: number): void {             // void значить що функція нічого не повертає
    console.log(`Hello, ${name}, I know that you is ${age}!`)

}

f1('stas',27);

function f2(a: number, b: number | string): number {  // так можна задавати декілька типів
    if (typeof b === 'string') b=+b
    return (a + b);
}

f2(3,5)
