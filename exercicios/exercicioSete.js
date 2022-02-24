function calculoIMC (altura, peso) {
    const calculo = peso / (altura * altura)
    return `O seu IMC é: ${calculo.toFixed(2)}`
}

console.log(calculoIMC(1.56, 56.7))