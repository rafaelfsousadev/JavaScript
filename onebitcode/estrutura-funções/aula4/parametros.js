function dobro(x){  // O Parametro é como se fosse uma variável
    alert(`O dobro de ${x} é ${(x*2)}`)
}

//dobro(prompt('digite um valor'))

function dizerOla(nome){
    alert(`Olá ${nome}`)
}

//dizerOla(prompt('Seu nome?'))

function soma(a,b){
    alert(`Resultado da soma é ${a+b}`)
}

soma(Number(a=prompt('Valor um')), Number(b=prompt('valor dois')))

// Ao usar vários parâmetros, é recomendado deixar aqueles com valor padrão por último
function criarUsuario(nome, email, senha, tipo = "leitor") {
    const usuario = { nome, email, senha, tipo }
    console.log(usuario)
  }
  
  function novoUsuario(nome, tipo = "leitor", email, senha) {
    const usuario = { nome, email, senha, tipo }
    console.log(usuario)
  }
  
  criarUsuario("Isaac", "isaac@email.com", "1234")
  novoUsuario("Isaac", "isaac@email.com", "1234")

  
  // Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto
function parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha) {
    parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")


  }
  function parametrosDoJeitoCerto(usuario) {
   
}

  const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    aniversario: "",
    endereco: ""
  }
  parametrosDoJeitoCerto(dadosDoUsuario)

    // Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante