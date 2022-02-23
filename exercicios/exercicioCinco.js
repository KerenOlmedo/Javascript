function idadeMedia(idade) {
    if (idade >= 18) {
        return `O  usuário é maior de idade.`
    } else {
        return `O usuário é menor de idade.`
    }
}

console.log(idadeMedia(19))