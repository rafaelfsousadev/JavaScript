function calcularMedia(a,b){
    const media = (a + b) /2
    return media
}


const resultado = calcularMedia(7,2)
alert(resultado)

function criarProduto(nome, preco){
    const produto = {
        nome,
        preco,
        estoque:1
    }
    return produto
}

const notbook = criarProduto

function areaRetangular(base,altura){
   return base*altura
}

console.log(areaRetangular(3,5))

function ola(){
    let texto = '...'
    
}