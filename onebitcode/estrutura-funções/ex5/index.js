const vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
      textoFinal += indice + ". "
      textoFinal += vaga.nome
      textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
      return textoFinal
    }, "")
  
    alert(vagasEmTexto)
  }

function novaVaga(){
    const nome = prompt('Informe o nome da vaga:')
    const descricao = prompt('Informe uma descrição para a vaga:')
    const dataLimite = prompt('Informe um data limite (dd/mm/aaaa) para a vaga:')

    const confirmacao = confirm(`Deseja criar uma nova vaga com essas informações?\n Nome: ${nome}\n
    Descrição: ${descricao}\n
    Data limite: ${dataLimite}` )

     if(confirmacao){
        const novaVaga = {nome, descricao, dataLimite, candidatos: []}
        vagas.push[novaVaga]
     }
     alert('Vaga criada!')
}

function exibirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja exibir:")
    const vaga = vagas[indice]
  
    const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => textoFinal + "\n - " + candidato, "")
  
    alert(
      "Vaga nº " + indice +
      "\nNome: " + vaga.nome +
      "\nDescrição: " + vaga.descricao +
      "\nData limite: " + vaga.dataLimite +
      "\nQuantidade de candidatos: " + vaga.candidatos.length +
      "\nCandidatos inscritos:" + candidatosEmTexto
    )
  }

function inscreverCandidato(){
    const candidato = prompt('Informe nome do candidato(a)')
    const indice = prompt('Informe o indice da vaga para qual o candidato(a) deseja se increver')
    const vaga = vagas[indice]

    const confirmacao = confirm(`
    Deseja increver o candidato:${candidato} na vaga ${indice}? \n
    Nome: ${vaga.nome}\n
    Descrição:${vaga.descricao}\n
    Data limite: ${vaga.dataLimite}`)

    if(confirmacao){
        vaga.candidatos.push(candidato)
        alert('Incrição realizada.')
    }
}

function excluirVaga(){
    const indice = prompt('Informe o Índice da vaga que deseja excluir:')
    const vaga = vaga[indice]
    const confirmacao = confirm(`Tem certeza que deseja excluir a vaga ${indice}?\n
    Nome: ${vaga.nome}\n
    Descrição:${vaga.descricao}\n
    Data limite: ${vaga.dataLimite}`)

    if(confirmacao){
        vaga.splice(indice, 1)
        alert('Vaga excluída!')
    }
}

function exibirMenu() {
    const opcao = prompt(
      "Cadastro de Vagas de Emprego" +
      "\n\nEscolha uma das opções" +
      "\n1. Listar vagas disponíveis" +
      "\n2. Criar uma nova vaga" +
      "\n3. Visualizar uma vaga" +
      "\n4. Inscrever um(a) candidato(a)" +
      "\n5. Excluir uma vaga" +
      "\n6. Sair"
    )
  
    return opcao
  }

  function execultar(){
    let opcao = ''
    do {

        opcao = exibirMenu()

        switch(opcao){
            case'1': 
                listarVagas()
                break
            case'2':
                novaVaga()
                break
            case'3':
                exibirVaga()
                break
            case'4':
                inscreverCandidato()
                break
            case'5':
                excluirVaga()
                break
            case'6':
                alert('Encerrando...')
                break
            default:
                alert('Opção invalida!')
        }
    }while(opcao !== '6')
  }

  execultar()


