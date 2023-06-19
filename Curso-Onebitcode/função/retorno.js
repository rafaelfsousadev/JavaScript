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

criarProduto('notbook intel core i3 8GB',2500)

console.log(criarProduto('notbook intel core i3 8GB',2500)
)
