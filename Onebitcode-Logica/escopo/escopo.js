
// O escopo nada mais é do que 

let pokemon = 'charmander'

function evoluir(){
    pokemon = 'Charmeleon'
}

console.log(pokemon)
evoluir()
console.log(pokemon)

function criaraAnimal(){
    let animal = 'Gato'
}

criaraAnimal()
//console.log(animal)

function avaliarNota(nota){
    if (nota > 60){
        var aprovado = true // o var quebra as regras de escopo
        let cituação = 'Aprovado'
    }else{
        var aprovado = false // pois e jogado no incio do código                   
        let situação = 'reprovado'
    }
}