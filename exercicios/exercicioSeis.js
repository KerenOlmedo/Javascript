function numeroMaior(num1, num2, num3) {
    if (num1 > num2 & num1 > num3) {
        return `O número ${num1} é maior que os números ${num2} e ${num3}.`
    }else if (num2 > num1 & num2 > num3){
        return `O número ${num2} é maior que os números ${num1} e ${num3}.`
    }else{
        return `O número ${num3} é maior que os números ${num1} e ${num2}.`
    }
}

console.log(numeroMaior(3, 2, 1))
console.log(numeroMaior(2, 3, 1))
console.log(numeroMaior(1, 2, 3))