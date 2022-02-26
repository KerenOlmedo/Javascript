function dataExtenso(data) {
  const listaData = data.split('/')
  let mes = ''
  const mesNumero = parseInt(listaData[1])
  switch (mesNumero) {
    case 01:
        mes = "Janeiro"
        break;
    case  02:
        mes = "Fevereiro"
        break;
    case  03:
        mes = "Março"
        break;
    case  04:
        mes = "Abril"
        break;
    case  05:
        mes = "Maio"
        break;
    case  06:
        mes = "Junho"
        break;
    case  07:
        mes = "Julho"
        break;
    case  08:
        mes = "Agosto"
        break;
    case  09:
        mes = "Setembro"
        break;
    case  10:
        mes = "Outubro"
        break;
    case  11:
        mes = "Novembro"
        break;
    case  12:
        mes = "Dezembro"
        break;
    default:
        return "Nenhum mês correspondente"
    }
   return `Data: ${listaData[0]} de ${mes} de ${listaData[2]}`
   //Data: 18 de Maio de 2017
}
  
  
   [18, 05, 2017]
  
  const data = '18/05/2017';
 console.log (dataExtenso(data))