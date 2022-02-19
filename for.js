const dados = ["Luis", "Claudio", "Cleusa", "Julia"]
const numeros = [0, 2, 4, 6, 8, 10]

// for (let i = 0; i < dados.length; i++) {
//     console.log(`Meu nome é: ${dados[i]}`)
// }

// dados.forEach(i => {
//     console.log(`Meu nome é: ${i}`)
// });

// for(let a of dados){
//     console.log(`Meu nome é: ${a}`)
// }

// for(let contador = 0; contador < numeros.length; contador++){
//     if(numeros[contador] > 4){
//         console.log(numeros[contador])
//         break
//     }
// }

const array = []

for(let contador = 0; contador < numeros.length; contador++){
   const mult = numeros[contador] * 2
   array.push(mult)
}

console.log(array)