const imoveís = []
let opcao = ''

do {
    opcao = prompt(`
    Bem vindo ao cadastro de imoveís!\n
    Total de imoveís:${imoveís.length}\n\n
    Escolha uma opção:\n
    1.Novo imóvel\n
    2.Lista imóveis\n
    3.Sair`)

    switch(opcao){
        case '1':
            const imovel = {}

            imovel.proprietario = prompt('Informe o nome do proprietario do imóvel:')
            imovel.quartos = prompt('Quantos quartos pussui o imóvel?')
            imovel.banheiros = prompt('Quantos banheiro possui o imóvel?')
            imovel.garagem = prompt('O imóvel possui garagem?(Sim/Não)')

            const confirmacao = confirm(
                `Salvar este imóvel?\n
                Proprietario: ${imovel.proprietario}\n
                Quartos: ${imovel.quartos}\n
                Banheiros: ${imovel.banheiros}\n
                Possui garagem? ${imovel.garagem}`
            )

            if(confirmacao){
                imoveís.push(imovel)
                alert('Imóvel salvo com sucesso!')
            }else{
                alert('Voltando ao menu!')
            }
            break
        case '2':
            for(let i = 0; i<imoveís.length; i++){
                alert(
                    `Imovel ${i+1}\n
                    Proprietário: ${imoveís[i].proprietario}\n
                    Quartos: ${imoveís[i].quartos}\n
                    Banheiros:${imoveís[i].quartos}\n
                    Possui garagem? ${imoveís[i].garagem}`
                )
            }
            break
        case '3':
            alert('Encerrando...')
            break
        default:
            alert('Opção Invelida!')

    }

}while( opcao !== '3')