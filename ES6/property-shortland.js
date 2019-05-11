let first_name = "Thaina",
    last_name = "Helena",
    age = 21;

/* Antes
let obj = {
    first_name: first_name,
    last_name: last_name,
    method: function(param1, param2){

    }
};
*/

let obj = {
    first_name,
    last_name,
    age,
    method(param1, param2) { }
};

// Especificando o que quero pegar do obj
function funcao({ first_name, last_name }) {
    console.log(first_name, last_name);
}

funcao(obj);

