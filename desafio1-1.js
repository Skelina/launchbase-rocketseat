// Cálculo de IMC

const nome = 'Joana';
const peso = 90;
const altura = 1.64;

const imc = peso / (altura*altura);

let message = '';


if (imc >= 30) {
    message = `${nome} você está acima do peso.`
} else {
    message = `${nome} você não está acima do peso.`
}

console.log(message)


// Cálculo de aposentadoria

// const nome = 'Silvana'
// const sexo = 'F'
// const idade = 48
// const contribuicao = 23

// const calculoContribuicao = idade + contribuicao

// // essas variáveis irão retornar true ou false
// const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
// const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85

// if ( homemPodeAposentar || mulherPodeAposentar) {
//     console.log(`${nome}, você pode se aposentar!`)
// } else {
//     console.log(`${nome}, você não pode se aposentar!`)
// }