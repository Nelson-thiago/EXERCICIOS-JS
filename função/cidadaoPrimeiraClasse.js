//função em JS é First_Class Object (Ctitizens)

//Higher-order function
function fun1() { }

//Armazenar em uma variável
const fun2 = function(){ }

//Armazenar em um array
const array = [function(a,b) {return a+b}, fun1, fun2]
console.log(array[0](2, 3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return 'opa'}
console.log(obj.falar())

//Passar funçao como parametro
function run(fun){
    fun()
}
run(function(){console.log('executando...')})

//uma funcçao pode retornar um parametro
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(1,3)(4)

const cincoMais = soma(2,3)
cincoMais(4)