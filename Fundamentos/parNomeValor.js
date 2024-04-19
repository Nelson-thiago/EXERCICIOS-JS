//par nome/valor
const saudacao ='Opa' //contexto lexico 1

function exec(){
        const saudacao = 'falaaaa'//contexto lexico 2
        return saudacao
}

//objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'rua123',
        numero: 234
    }
}

console.log(saudacao)
console.log(exec())
