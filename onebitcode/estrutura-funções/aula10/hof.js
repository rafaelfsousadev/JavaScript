function calcular(a,b,operacao){
    console.log('Realizando uma operação qualuqer')
    const resultado = operacao(a,b)
    return resultado
}

function somar(x,y){
    console.log('Realizando uma soam')
    return x + y
}

calcular(3,5,somar)

function exibirElemento(elemento,indice,array){
    console.log({

    })
}

const lista = ["Maçã", "Banana", "Laranja", "Limão", "Uva"]

for(let i = 0; i < lista.length;i++){
    exibirElemento(lista[i], i, lista)
}