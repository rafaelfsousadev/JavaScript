let opcao = ''
const imoveis = []

do{
    opcao = prompt(
        `Bem vindo(a) ao cadastro de imóveis!\n
        Total de Imóveis: ${imoveis.length}\n
        \nEscolha uma Opção:
        \n1. cadastrar um novo imóvel
        \n2. Listar imóveis
        \n3. Sair`
    )

    switch(opcao){
        case '1':
            const imovel = {}

            imovel.proprietario = prompt('Informe o nome do proprietário do imóvel:')
            imovel.quartos = prompt('Quantos quertos possui o imóvel?')
            imovel.banheiros = prompt('Quantos banheiros possui o imóvel?')
            imovel.garagem = prompt('O imóvel possui garagem? (Sim/Não)')

            const confirmacao = confirm(
                `Salvar este imóvel?\n
                \nProprietário: ${imovel.proprietario}
                \nQuartos: ${imovel.quartos}
                \nBanheiros: ${imovel.banheiros}
                \nPossui garagem?: ${imovel.garagem}`
            )

            if(confirmacao){
                imoveis.push(imovel)
            }else{
                alert('Voltando ao menu!')
            }
            

            break
        case '2':
           for(let i = 0; i < imoveis.length; i++){
            alert(
                `Imóvel ${i + 1}
                \nProprietário: ${imoveis[i].proprietario}
                \nQuartos: ${imoveis[i].quartos}
                \nBanheiros: ${imoveis[i].banheiros}
                \nPossui garagem? ${imoveis[i].garagem}`
            )
           }
            break
        case '3':
            alert('Saindo...')
            break
        default:
            alert('Opção invalida')
    }

}while ( opcao !== '3')
