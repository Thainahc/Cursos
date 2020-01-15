const usuarios = [
    {
        nome: 'Thaina',
        tecnologias: ['xHarbour', 'HTML', 'CSS', 'C#']
    },
    {
        nome: 'Pudim',
        tecnologias: ['C#', 'HTML', 'CSS', 'JavaScript']
    },
    {
        nome: 'Rafael',
        tecnologias: ['ReactNative', 'JavaScript']
    }
]

for (let usuario of usuarios) {
    let mensagem = `${usuario.nome} trabalha com ${usuario.tecnologias.join(", ")}.`

    if (checaSeUsuarioUsaCSS(usuario.tecnologias)) {
        mensagem += ` ${usuario.nome} trabalha com CSS.`
    }
    else {
        mensagem += ` ${usuario.nome} não trabalha com CSS.`
    }

    console.log(mensagem)
}

function checaSeUsuarioUsaCSS(tecnologias) {
    for (let tecnologia of tecnologias) {
        if (tecnologia == 'CSS') {
            return true
        }
    }
}