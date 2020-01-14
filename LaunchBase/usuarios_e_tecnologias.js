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

for (let index = 0; index < usuarios.length; index++) {

    let usuarioNome = usuarios[index].nome
    let usuarioTecnologias = usuarios[index].tecnologias
    let mensagem = `${usuarioNome} trabalha com ${usuarioTecnologias.join(", ")}`

    console.log(mensagem)

    if (checaSeUsuarioUsaCSS(usuarioTecnologias)) {
        console.log(`${usuarioNome} usa CSS.`)
    }
    else {
        console.log(`${usuarioNome} não usa CSS.`)
    }
}

function checaSeUsuarioUsaCSS(usuarioTecnologias) {
    let usuarioUsaCSS = false;

    for (let index = 0; index < usuarioTecnologias.length; index++) {
        if (usuarioTecnologias[index] == 'CSS') {
            usuarioUsaCSS = true
        }
    }

    return usuarioUsaCSS
}