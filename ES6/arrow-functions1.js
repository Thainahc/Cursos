// Exemplo:
let funcaoSoma = (param1, param2) => param1 + param2;

// Exemplo com array:
let array = [1, 2, 3, 4, 5, 6];

// Maneira ruim
let array2 = array.map(function (value) {
    return value * 10;
})

// Maneira legal
let array3 = array.map(value => value * 10);

// Arrow function e caracterizada por =>
// Do lado esquerdo, temos os parametros 
// Do lado direito, temos o corpo da funcao 
// O retorno e atribuido diretamente, se nao forem utilizadas {}