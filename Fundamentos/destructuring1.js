//recurso intruduzido es2015
const pessoa = {
    nome: "anna",
    idade: 5,
    endereco: {
        logradouro: "rua 123",
        numero: 1008
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome:n, idade:i } =  pessoa
console.log(n,i)

const {sobren, humor = true} = pessoa
console.log(sobren, humor)

const{ endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)
