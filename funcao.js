function somar(num1, num2) {
    console.log(num1 + num2)
}

// somar(50, 60)
// somar(20.5, 20.5)

function areaDoQuadrado(lado){
    console.log(lado * lado)
}

//areaDoQuadrado(10)

function areaDoCirculo(raio){
    const pi = Math.PI
    const quadradoDoRaio = raio * raio 
    const total = pi * quadradoDoRaio
    console.log(`A área do circulo com raio ${raio} é igual à: ${total.toFixed(2)}`)
}

//areaDoCirculo(20)

function parOuImpar(numero){
    if(numero % 2 == 0){
        console.log(`O número ${numero} é par.`)
    }else{
        console.log(`O número ${numero} é ímpar.`)
    }
}

//parOuImpar (5641)

function multiplicacaoLista(lista, multiplicador){
    const novaLista = []
    for (let i = 0; i < lista.length; i++){
        const mult = lista[i] * multiplicador
        novaLista.push(mult)
    }
    return novaLista
}

const array = multiplicacaoLista([0, 2, 4, 6, 8, 10],30)
console.log(array)