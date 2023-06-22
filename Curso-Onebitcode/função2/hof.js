// com uma HOF(High-Order Function) podemos colocar uma função dentro de outra função

function calcular(a,b, operacao){
    console.log('Realizando uma operação.')
    const resultado = operacao(a,b)
    return resultado
}

// ASSIM CRIANDO UMA FUNÇÃO DENTRO DA OUTRA

function somar(x,y){
    console.log('Realizando uma soma')
    return x + y
}

calcular(3, 5, somar)

function exibirElemento(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
}