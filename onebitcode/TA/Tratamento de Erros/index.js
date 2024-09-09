function sum(a, b) {
    const firstNumber = Number(a)
    const secondNumber = Number(b)

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        throw new Error('arguments must be two numbers')
    }

    return firstNumber + secondNumber
}

try{
    console.log(sum(2, 9))
    console.log(sum(true, 14))
    console.log(sum(undefined, 22))
    console.log(sum(18, "0"))           //Aqui você coloca onde tem o erro
    console.log(sum(39, null))
    console.log(sum(13, "zero"))

}catch(erro){ //colocando uma parametro ele pode falar a mesagem do erro
    console.log(erro.message)
    console.log('An error ocurred!') //aqui você escreve o tipo de mensagem que vai aparecer quando o erro ocorrer
}finally{
    console.log('Calculations finished!') //para finalizar a analise de erros
}

console.log(sum(2, 9))
console.log(sum(true, 14))
console.log(sum(undefined, 22))
console.log(sum(18, "0"))
console.log(sum(39, null))
console.log(sum(13, "zero"))


//Acima um código com erro