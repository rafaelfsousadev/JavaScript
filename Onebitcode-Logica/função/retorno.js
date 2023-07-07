function calcularMedia(a,b){
    const media = (a + b) /2
    return media  /* Quando se coloca isso significa que ira ter
                     retorno a função */
}

const resultado = calcularMedia(7,2) 
/* Deve colocar na função com os
 parametros atribuidos em uma varíavel.
 O return sera gravado nessa varíavel */

//console.log(resultado)

function criarProduto(){
    const produto = {
        nome: 'nome',
        preço: 'preço',
        estoque: 1
    }

    return produto
}

//criarProduto('notbook intel core i3 8GB',2500)

//console.log(criarProduto('notbook intel core i3 8GB',2500))

function areaRetanfular(base, altura){
    const area = base * altura
    return area
}

//console.log(areaRetanfular(3,5))

function ola(){
    let texto = '...'
    return texto
    texto = 'Olá mundo'
    console.log('texto') // apertir do return mais nada vai ser execultado
}

//console.log(ola())

function maiorIdade(idade){
    if (idade >= 18){
        return 'Maior de idade'
    }else{
        return 'Menor de idade'
    }
}
console.log(maiorIdade(29))
console.log(maiorIdade(13))