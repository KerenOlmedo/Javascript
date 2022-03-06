// function sequencial(caracter) {
//     const ordenado = caracter.sort(function(a, b){
//         return a - b
//     })
//     return `Lista original: ${caracter} lista em sequencia: ${ordenado}`
// }

// console.log(sequencial([10, 50, 100, 20]))

function sequencial() {
    const listaOriginal = document.getElementById("listaAleatoria").value
    const lista = listaOriginal.split(",")
    const listaOrdenada = lista.sort((a, b) => a - b)
    document.getElementById("listaOriginal").innerHTML = listaOriginal
    document.getElementById("listaOrdenada").innerHTML = listaOrdenada
}