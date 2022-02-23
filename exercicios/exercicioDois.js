// const grausCelsius = 3
// const formula = grausCelsius * 9 / 5 + 32
// console.log(`${grausCelsius} graus Celsius é igual à: ${formula} graus Fahrenheit`)

function fahrenheit(grausCelsius) {
    const calculo = grausCelsius * 9 / 5 + 32
    return `${grausCelsius} graus Celsius é igual à: ${calculo} graus Fahrenheit`
}

console.log(fahrenheit(4))