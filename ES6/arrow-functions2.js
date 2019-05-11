let array = [1, 2, 3, 4, 5, 6];

let array2 = array.map((value, index) => value * 10);

// Caso haja mais de um parametro,
// e necessario fazer da maneira acima

let array3 = array.map(value => {
    // Codigo no meio
    return value * 10
});

// Caso haja mais de uma linha de codigo na funcao,
// e necessario fazer da maneira acima

let array4 = array.map(value => value > 10 ? 0 : 2);

// Se value > 0, retorna 0, senao 2

