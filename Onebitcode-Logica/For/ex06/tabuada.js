const numero = prompt(`Olá eu sou o robo da tabuada
    \nInforme o numero que você deseja calcular a tabuada:`)

let resultado = ''

for(let fator = 1; fator <= 20; fator++){
    resultado += `${numero} X ${fator} = ${numero * fator}\n`
}

alert(`Resultado da tabuada de ${numero}: \n\n ${resultado}`)