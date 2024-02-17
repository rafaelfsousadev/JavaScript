//Escopo e como se fosse a hierarquia do código o escopo mais externo e os que não estão em uma função ou outros que ainda não aprendemos, ja o escopo interno esta dentro

let pokemon = 'Charmander'
                                // o Escopo externo está disponivel para o interno
function evoluir(){
    pokemon = 'Charmeleon'
}

function criarAnimal() {
    let animal = "Gato"
  }
                            // Ja o Escopo Interno não está disponivel para o externo
  criarAnimal()
  console.log(animal) // Gera erro

  function avaliarNota(nota){
    if(nota >60){
        var aprovado = true
        let situacao = 'Aprovado'
    }else{
        var aprovado = false
        let situacao = 'Reprovado'
    }

    console.log(nota)
    console.log(aprovado)
    console.log(situacao)
  }