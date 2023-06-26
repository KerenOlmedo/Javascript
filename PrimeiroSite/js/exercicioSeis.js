function numeroMaior() {
    const num1 = parseInt(document.getElementById("num1").value)
    const num2 = parseInt(document.getElementById("num2").value)
    const num3 = parseInt(document.getElementById("num3").value)
    if (num1 > num2 & num1 > num3) {
        document.getElementById("numeroMaior").innerHTML = `O número ${num1} é maior que os números ${num2} e ${num3}.`
    }else if (num2 > num1 & num2 > num3){
        document.getElementById("numeroMaior").innerHTML = `O número ${num2} é maior que os números ${num1} e ${num3}.`
    }else{
        document.getElementById("numeroMaior").innerHTML = `O número ${num3} é maior que os números ${num1} e ${num2}.`
    }
}
// console.log(numeroMaior(3, 2, 1))
// console.log(numeroMaior(2, 3, 1))
// console.log(numeroMaior(1, 2, 3))