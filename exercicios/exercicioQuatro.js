// function mediaAritimetica(num1, num2, num3) {
//     const calculo = (num1 + num2 + num3) / 3
//     return `A média aritimética dos números ${num1}, ${num2} e ${num3} é igual à: ${calculo}`
// }

// console.log(mediaAritimetica(10, 20, 30))

function mediaAritmetica() {
    const num1 = document.getElementById("num1").value
    const num2 = document.getElementById("num2").value
    const num3 = document.getElementById("num3").value
    const calculo = (parseFloat(num1) + parseFloat(num2) + parseFloat(num3)) / 3
    document.getElementById("mediaAritmetica").innerHTML = `A média aritmética dos números anteriores é ${calculo.toFixed(2)}`
}