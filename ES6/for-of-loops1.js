let array = [1, 2, 3, 4, 5, 6];

// Maneira ruim
for (let i in array) {
    console.log(i, array[i]);
}

// Maneira legal para pegar o valor
for (let value of array) {  
    console.log(value)
};

// Maneira legal para pegar chave e valor
for(let [index, value] of array.entries()){
    console.log(index,value);
}

