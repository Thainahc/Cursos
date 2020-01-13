const nome = 'Thainá'
const sexo = 'F'
const idade = 50
const contribuicao = 35
var contribuicao_minima

if (sexo == 'F') {
    contribuicao_minima = 30
}
else {
    contribuicao_minima = 35
}

if (contribuicao >= contribuicao_minima && idade + contribuicao >= 85) {
    console.log(`${nome}, você pode se aposentar!`)
}
else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
}
