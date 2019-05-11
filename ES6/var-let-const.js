'use strict'

/*
    Hierarquia
    1 - const
    2 - let
    3 - var
*/   


var a // A variavel pode ser declarada globalmente, e seu valor pode ser alterado

function test() {
    var a = 'valor'

    if (1 < 2) {
        var a = 'outro valor';
    }

    // Caso entre no if, a = outro valor
}

function test2() {
    if (1 < 2) {
        var a = 'valor';
    }

    a == 'valor'

    // a existe fora do escopo
}

//-----------------------------------------------------------------------------------------

let b // A variavel existe somente no escopo

function test3() {
    let a = 'valor' // Uma variavel

    console.log(a)

    if (1 < 2) {
        let a = 'outro valor' // Outra variavel
    }
}

//-----------------------------------------------------------------------------------------

const c // A variavel nao pode ser reatribuida

function teste4() {
    const b = 'valor'
}