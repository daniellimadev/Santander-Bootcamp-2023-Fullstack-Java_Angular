/**
 * Generics
 */

function concatArray<t>(...item: t[]): t[] {
    return new Array().concat(...item);
}

const numArray = concatArray<number[]>([1,2,3], [4]);
const strArray = concatArray<string[]>(["Daniel", "goku"], ["vegeta"])

console.log(numArray);
console.log(strArray);