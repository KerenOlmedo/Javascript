function sequencial(caracter) {
    const ordenado = caracter.sort(function(a, b){
        return a - b
    })
    return `Lista original: ${caracter} lista em sequencia: ${ordenado}`
}

console.log(sequencial([10, 50, 100, 20]))
