let pessoa = {
    nome: 'Rafael',
    idade: 21,
    dizerOla(){
        console.log('Olá mundo! meu nome é '+ this.nome)// Com o this podmeos chamar uma proprideade do obejeto nele mesmo!
    }
}

console.log(pessoa)

console.log(pessoa.dizerOla)// chamando a função dentro do objeto