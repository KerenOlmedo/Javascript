//const litros = dinheiro / valCombustivel
//const kmCarroAnda = litros * 20
//console.log(`Com R$${dinheiro} é possível comprar ${litros} litros de combustível. Seu carro andará ${kmCarroAnda} Km com esta quantidade.`)

function calculoValCombustivel (){
    const valCombustivel = document.getElementById("valCombustivel").value
    const QuantDinheiro = document.getElementById("QuantDinheiro").value
    const litros = QuantDinheiro / valCombustivel
    const kmCarroAnda = litros * 20
    //console.log(litros.toFixed(2), kmCarroAnda.toFixed(2))
    document.getElementById("litros").innerHTML = `${litros.toFixed(2)} Litros`
    document.getElementById("km").innerHTML = `${kmCarroAnda.toFixed(2)} Km`
    // const litros =  / valCombustivel
    // const kmCarroAnda = litros * 20
    // return `Com R$${dinheiro} é possível comprar ${litros.toFixed(2)} litros de combustível. Seu carro andará ${kmCarroAnda.toFixed(2)} Km com esta quantidade.`
}

//console.log(calculoValCombustivel(50,6.99))