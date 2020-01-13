const usuarios = [
    {
        nome: 'Salvio',
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: 'Marcio',
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: 'Lucia',
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
]

for (let index = 0; index < usuarios.length; index++) {
    let usuarioNome = usuarios[index].nome
    let usuarioReceitas = usuarios[index].receitas
    let usuarioDespesas = usuarios[index].despesas
    let usuarioSaldo = calculaSaldo(usuarioReceitas, usuarioDespesas)

    if (usuarioSaldo == 0) {
        console.log(`${usuarioNome} possui saldo de ${usuarioSaldo}`)
    }
    else if (usuarioSaldo > 0) {
        console.log(`${usuarioNome} possui saldo POSITIVO de ${usuarioSaldo}`)
    }
    else if (usuarioSaldo < 0) {
        console.log(`${usuarioNome} possui saldo NEGATIVO de ${usuarioSaldo}`)
    }
}

function calculaSaldo(receitas, despesas) {
    let totalReceitas = somaNumeros(receitas)
    let totalDespesas = somaNumeros(despesas)
    let saldo = totalReceitas - totalDespesas

    return saldo
}

function somaNumeros(numeros) {
    let soma = 0

    for (let index = 0; index < numeros.length; index++) {
        soma += numeros[index]
    }

    return soma
}