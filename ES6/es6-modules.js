export class Pessoa {
    constructor(nome, altura, sexo) {
        this.nome = nome;
        this._altura = altura;
        this.sexo = sexo;
    }

    // Exemplo 1
    getAltura() {
        return this.altura;
    }

    //Exemplo 2
    get altura() {
        return this._altura;
    }

    set altura(value) {
        this._altura = value;
    }
}

export const valor = "Teste";