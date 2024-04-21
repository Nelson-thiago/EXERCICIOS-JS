function area(largura,altura){
    const area = altura*largura
    if(area>20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
} 
area()