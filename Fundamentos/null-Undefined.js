let valor //declarado mas nao inicializado
console.log(valor)

valor = null //ausencia de valor
console.log(valor)
//console.log(valor.toString()) //erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco)
//delete produto.preco //deletar o atributo preço
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)
