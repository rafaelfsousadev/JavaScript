function somar(a,b){
    return a+b
}

let operacao = somar
// a variável operação recebeu a função somar ela armazenou a função e não o resultado dele

console.log(operacao(7,9))

// podendo usar a variável como se fosse uma função

const subtrair = function (a,b){
    return a - b
}
// usando a função anonima podemos retirar o nome da funçaõ usando apenas o nome da variável

console.log(subtrair(60,30))