const valCombustivel = 6.99
const dinheiro = 40.00
//const litros = dinheiro / valCombustivel
//const kmCarroAnda = litros * 20
//console.log(`Com R$${dinheiro} é possível comprar ${litros} litros de combustível. Seu carro andará ${kmCarroAnda} Km com esta quantidade.`)

function calculoValCombustivel (dinheiro, valCombustivel){
    const litros = dinheiro / valCombustivel
    const kmCarroAnda = litros * 20
    return `Com R$${dinheiro} é possível comprar ${litros.toFixed(2)} litros de combustível. Seu carro andará ${kmCarroAnda.toFixed(2)} Km com esta quantidade.`
}

console.log(calculoValCombustivel(50,6.99))