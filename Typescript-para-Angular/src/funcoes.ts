/**
 *  Funcoes
 */

function addNumber(x: number,y:number): number {
    return x+y;
}

function addToHello(name: string): string {
    return `Hello ${name}`;
}

console.log(addToHello("Daniel"));

let soma: number = addNumber(5,9);
console.log(soma);

// ------------- funcoes Multi-Tipos -------------

function callToPhone(phone: number | string): Number | string {
    return phone;
}

console.log(callToPhone(999999+" - "+ 3333))

// ------------- funcoes Async -------------

async function getDataBase(id: number): Promise<string> {
    return "Daniel";
}

console.log(getDataBase(1))