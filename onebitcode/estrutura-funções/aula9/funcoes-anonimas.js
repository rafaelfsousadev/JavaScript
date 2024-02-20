function somar(a,b){
    return a + b
}

const operacao = somar // assim podemos guardar funções em variável .. não se coloca () na hora de colocar a função]

const subtrair = function(a,b){  // podendo retirar a o nome da função deixa somente na variável
    return a - b
}

console.log(subtrair(3,2))

// Podemos alvar dentro de variável uma função