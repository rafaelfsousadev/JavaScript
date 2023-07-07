const vagas = []

function listarVagas(){
    const vagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice){
        textoFinal += indice + '. '
        textoFinal += vaga.nome
        textoFinal += ' (' + vaga.candidatos.length + 'candidatos )\n'
        return textoFinal
    }, '')

    alert(vagasEmTexto)
}

function novaVaga(){
    const nome = prompt('Inform um nome para a vaga')
    const descricao = prompt('Informe uma descrição para a vaga')
    const dataLimite = prompt('Informe uma data limite (dd/mm/aaaa) para a vaga:')

    const confimacao = confirm(
        `Deseja criar uma nova vaga com esssas informações?\n
        Nome: ${nome}\n
        descrição: ${descricao}\n
        Data limite: ${dataLimite}`
    )

    if(confimacao){
        const novaVaga = { nome, descricao, dataLimite, candidatos: []}
        vagas.push(novaVaga)
        alert('Vaga criada')
    }
}

function exibirVaga(){
    const indice = prompt('Informe o índice da vaga que deseja exibir:')
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato){
        return `${textoFinal} \n - ${candidato}`
    },'')
    alert(`Vaga nº ${indice}
    \nNome: ${vaga.nome}
    \nDescrição: ${vaga.descricao}
    \nData limite: ${vaga.dataLimite}
    \nQuantidade de candidatos: ${vaga.candidato.length}
    \nCandidatos inscritos: ${candidatosEmTexto}`)
}

function inscreverCandidato(){
    const candidato = prompt('Infoerme nome do(a) candidato(a):')
    const indice = prompt('Informe o Índice da vaga para qual o(a) candidato(a) deseja se inscrever')
    const vaga = vagas[indice]

    const comfimacao = confirm(
        `Deseja inscrever o candidato ${candidato} na vaga ${indice}?\n
        Nome: ${vaga.nome} \nDescrição: ${vaga.descricao}\nData limite: ${vaga.dataLimite}`
    )

    if(comfimacao){
        vaga.candidato.push(candidato)
        alert('Inscrição realizada')
    }
}

function excluirVaga(){
    const indice = prompt('Infome o Índice da vaga que deseja excluir:')
    const vaga = vagas[indice]

    const confirmacao = confirm(`Tem certexa que deseja excluir a vaga ${indice} ?\nNome: ${vaga.nome} \nDescrição: ${vaga.descricao}\nData limite: ${vaga.dataLimite}` )

    if(confirmacao){
        vaga.splice(indice, 1)
        alert('Vaga excluída')
    }
}

function exibirMenu(){
    const opcao = prompt(
        `Cadastro de vagas de Emprego\n
        Escolha uma das opções a baixo:
        \n1. Listar vagas disponíveis
        \n2. Criar uma nova vagas
        \n3. Visualizar uma vaga
        \n4. Inscrever um(a) candidato(a)
        \n5. Excluir uma vaga
        \n6. Sair`
    )
    return opcao
}

function execultar(){
    let opcao = ''

    do{
        opcao = exibirMenu()

        switch(opcao){
            case '1':
                listarVagas()
                break
            case '2':
                novaVaga()
                break
            case '3':
                exibirVaga()
                break
            case '4':
                inscreverCandidato()
                break
            case '5':
                excluirVaga()
                break
            case '6':
                alert('Saindo...')
                break
            default:
                alert('Opção Invalida!')
        }
    }while(opcao !== '6')
}

execultar()