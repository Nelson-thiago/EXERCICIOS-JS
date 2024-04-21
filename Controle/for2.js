const notas = [6.8, 8.9, 1, 2.4, 7.7, 6, 3]

for(let i in notas){
    console.log(i, notas[i])
}
const pessoa = {
    nome: 'anna',
    sobrenome: 'silva',
    idade: 29,
    peso: 30
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}