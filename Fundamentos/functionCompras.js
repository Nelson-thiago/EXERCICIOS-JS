function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const commprarTv32 =  trabalho1 != trabalho2
    const mantersaudavel = !comprarSorvete
    return {comprarSorvete,comprarTv50,commprarTv32,mantersaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false,true))
console.log(compras(false, false))