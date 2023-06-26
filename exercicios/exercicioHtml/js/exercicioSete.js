// function calculoIMC (altura, peso) {
//     const calculo = peso / (altura * altura)
//     return `O seu IMC é: ${calculo.toFixed(2)}`
// }

// console.log(calculoIMC(1.56, 56.7))   style="background-color: rgba(0,0,0,.075)"
function calculoIMC () {
    const altura = parseFloat(document.getElementById("altura").value)
    const peso = parseFloat(document.getElementById("peso").value)
    const select = parseInt(document.getElementById("sexo").value)
    const calculo = peso / (altura * altura)
    if (!isNaN(altura) & !isNaN(peso) & !isNaN(select)) {
        document.getElementById("calculoIMC").innerHTML = `O seu IMC é: ${calculo.toFixed(2)}`
    }
    if (isNaN(altura)) {
        document.getElementById("erroAltura").innerHTML = `campo obrigatório`
    }
    if (isNaN(peso)) {
        document.getElementById("erroPeso").innerHTML = `campo obrigatório`
    }
    if (select == 1) {
        if (calculo >= 43) {
            document.getElementById("obesidadeMorbida").style = "background-color: rgba(0,0,0,.075)"
        }else if (calculo >= 30 & calculo <= 39.9) {
            document.getElementById("obesidadeModerada").style = "background-color: rgba(0,0,0,.075)"
        }else if (calculo >= 25 & calculo <= 29.9) {
            document.getElementById("obesidadeLeve").style = "background-color: rgba(0,0,0,.075)"
        }else if (calculo >= 20 & calculo <= 24.9) {
            document.getElementById("normal").style = "background-color: rgba(0,0,0,.075)"
        }else{
            document.getElementById("abaixoDoNormal").style = "background-color: rgba(0,0,0,.075)"
        }
    }else if (select == 2) {
        if (calculo >= 39) {
            document.getElementById("obesidadeMorbida").style = "background-color: rgba(0,0,0,.075)"
        }else if (calculo >= 329 & calculo <= 38.9) {
            document.getElementById("obesidadeModerada").style = "background-color: rgba(0,0,0,.075)"
        }else if (calculo >= 24 & calculo <= 28.9) {
            document.getElementById("obesidadeLeve").style = "background-color: rgba(0,0,0,.075)"
        }else if (calculo >= 19 & calculo <= 23.9) {
            document.getElementById("normal").style = "background-color: rgba(0,0,0,.075)"
        }else{
            document.getElementById("abaixoDoNormal").style = "background-color: rgba(0,0,0,.075)"
        }
    }else{
        document.getElementById("erroSelect").innerHTML = "Selecione uma das opções"
    }


}