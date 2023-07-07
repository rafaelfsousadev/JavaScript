// o método nada mais é do que uma função dentro de um objeto!

let pessoa = {
    nome:'Rafael',
    idade: 21,
    dizerOla(){
        console.log(`Olá mundo! Meu nome é ${this.nome}`) // para poder puxar o propriadde do obejeto dentro dele mesmo colocamos o this
    }  // esse e um método
}

console.log(pessoa)

pessoa.dizerOla() //assim chama um método