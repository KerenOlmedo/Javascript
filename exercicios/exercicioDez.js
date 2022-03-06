function aumentoSalarial() {
    const salario = parseFloat (document.getElementById("salario").value)
    console.log(salario)
    const percentual20 = 0.20
    const percentual15 = 0.15
    const percentual10 = 0.10
    const percentual5 = 0.05
    let aumento = 0
    let percentual = 0
    let novoSalario = 0


    if (salario <= 280) {
        percentual = percentual20
        aumento  = salario * percentual20
    }else if (salario >= 280 & salario <= 700){
        percentual = percentual15
       aumento  = salario * percentual15
    }else if(salario >= 700 & salario <= 1500){
        percentual = percentual10
        aumento  = salario * percentual10
    }else{
        percentual = percentual5
        aumento  = salario * percentual5
    }
    novoSalario = salario + aumento
    const resposta = `
    <div class="form-group" style="padding-top: 20px;">
        <label for="">Percentual de aumento aplicado:</label>
        <h2>Salario antes do reajuste: ${salario}</h2>
        <h2>Percentual de aumento aplicado: ${percentual}</h2>
        <h2>Valor do aumento: ${aumento.toFixed(2)}</h2>
        <h2>Novo salário: ${novoSalario.toFixed(2)}</h2>
    </div>
    `
    if (salario) {
        document.getElementById("resposta").innerHTML = resposta
    }
    //return`Salario antes do reajuste:${salario}, percentual de aumento aplicado:${percentual}, o valor do aumento:${aumento}, novo salário:${novoSalario}`
}



//o salário antes do reajuste; o percentual de aumento aplicado; o valor do aumento; o novo salário, após o aumento.

//  Salários até R$ 280,00 (incluindo): aumento de 20%
//  Salários entre R$ 280,00 e R$ 700,00: aumento de 15%
//  Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%
//  Salários de R$ 1500,00 em diante: aumento de 5%