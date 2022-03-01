// function idadeMedia(idade) {
//     if (idade >= 18) {
//         return `O  usuário é maior de idade.`
//     } else {
//         return `O usuário é menor de idade.`
//     }
// }

// console.log(idadeMedia(19))

function idadeMedia() {
    const idade = document.getElementById("idade").value
    if (idade >= 18) {
        document.getElementById("idadeMedia").innerHTML = `Você é maior de idade.`
    } else {
        document.getElementById("idadeMedia").innerHTML = `Você é menor de idade.`
    }
}

