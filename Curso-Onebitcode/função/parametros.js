function dobro(x){ // parametro começa com x mas poderá ser modificado
    alert(`o dobro de ${x} é ${x*2}`)
}

//dobro(5) // modifiquei ele agora para 5

function dizerOla(nome = 'Mundo'){ // podemos dizer que caso o parametro não for definido tera um valore pre definido
    alert(`Olá ${nome}!`)
}

/* dizerOla('Rafael') // = Rafael
dizerOla() // = mundo */

function soma(a,b){ // podmeos ter vários parametros
    alert(`Resultado da soma é ${a + b}`)
} 

//soma(7,6)

function criarUsuario(nome, email, senha, tipo = 'admin'){
    const usuario = {
        nome: nome,
        email: email,
        senha: senha,
        tipo: tipo,
    }
    console.log(usuario)
}

/* criarUsuario('Rafael','Rafaelfsousa@gamil.com','1245.5637',) */

function muitosParametros(nome, telefone, endereço, aniversario, email, tamanho){
    //....
}

function objetoComoParametro(usuario){
console.log(usuario.nome, usuario.email)
}

const dadosDoUsuario = {
    nome: 'Rafael',
    telefone: '',
    endereço: '',
    aniversario: '',
    email: 'rafa@sousa',
    tamanho: '',
}

objetoComoParametro(dadosDoUsuario)