function funcao(param1, param2, ...otherParams) {
    console.log(otherParams);
}

funcao(1, 2, 3, 4, 5, 6);

let array1 = [10, 20, 30];
let array2 = [40, 50, 60, ...array1];

console.log(array2);

let string = "Thaina Helena"

let stringArray = [...string];

console.log(stringArray);