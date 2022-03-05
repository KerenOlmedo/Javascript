// function sequencial(caracter) {
//     const ordenado = caracter.sort(function(a, b){
//         return a - b
//     })
//     return `Lista original: ${caracter} lista em sequencia: ${ordenado}`
// }

// console.log(sequencial([10, 50, 100, 20]))

function sequencial() {
    const listaOriginal = document.getElementById("listaAleatoria").value
    const listaOrdenada = listaOriginal.sort(function(a, b){
       return a - b})
    document.getElementById("listaOriginal").innerHTML = listaOriginal
    document.getElementById("ListaOrdenada").innerHTML = listaOrdenada
    console.log(listaOriginal, listaOrdenada)
}