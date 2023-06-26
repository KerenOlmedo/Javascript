const lista1 = [10, 20, 30, 40, 50, "e", "t", true, 80, "Luis"]
const lista2 = [[1], "a", "b", "c"]
const lista3 = [[],{"nome":"Lecimara", "sexo": "feminino"},{},[1, 2]]

// console.log(lista1[2])
// console.log(lista1[9])
// console.log(`Meu nome é ${lista1[9]}`)

// for (let index = 0; index < lista1.length; index++) {
//     console.log(`Meu indice é: ${index} , meu valor é:${lista1[index]}`)
// }
//console.log(lista2[0][0])
//console.log(lista2[3])

// for (let index = 0; index < lista2.length; index++) {
//     if (lista2[index] == "b") {
//         console.log(`o indice de B é:${index}`)
//     }
// }

//console.log(lista3[1].sexo)
for (let index = 0; index < lista3.length; index++) {
    if (Array.isArray(lista3[index]) & lista3[index].length > 1) {
        for (let i = 0; i < lista3[index].length; i++) {
            console.log(lista3[i])
        }
    }
    
}

