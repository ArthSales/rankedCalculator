//Função que retorna o ranking(saída) de acordo com o saldo de vitórias e derrotas(parâmetros)

function ranking(victories, defeats){
    let balance = victories - defeats
    let ranking = ""
    if (balance < 10) {
        ranking = "Ferro"
    } else if (balance <= 20){
        ranking = "Bronze"
    } else if (balance <= 50){
        ranking = "Prata"
    } else if (balance <= 80){
        ranking = "Ouro"
    } else if (balance <= 90){
        ranking = "Diamante"
    } else if (balance <= 100){
        ranking = "Lendário"
    } else {
        ranking = "Imortal"
    }
    return [balance,ranking]
}

//Armazenando resultado da função com entradas
let rankingArray = ranking(101,32)
console.log(`O Herói tem de saldo de ${rankingArray[0]} está no nível de ${rankingArray[1]}`)