// const grausFahrenheit = 5
// const calculo = grausFahrenheit * 9 / 5 + 32
// console.log(`${grausFahrenheit} graus Fahrenheit é igual à: ${calculo} graus Celsius`)

function fahrenheitToCelsius(temperatura){
    const calculo = temperatura * 9 / 5 + 32
    return `${temperatura} graus Fahrenheit é igual à: ${calculo} graus Celsius`
}

console.log(fahrenheitToCelsius(5))
console.log(fahrenheitToCelsius(15))
console.log(fahrenheitToCelsius(55))
console.log(fahrenheitToCelsius(25))