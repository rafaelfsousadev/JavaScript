let quantidadeImoveis = ''
let totalImoveis = 0
let opcao = ''
let imgoveis = {}

do{
    const opcao = prompt(
        `Escolha o que fazer:\n
        \n1. cadastrar um novo imóvel
        \n2. quantidade de imovéis cadastrados
        \n3. Sair`
    )

    switch(opcao){
        case '1':
            let nomeDoImovel = prompt('Qual o nome do imóvel?')
            quantidadeImoveis += `- ${nomeDoImovel}`
            break
        case '2':
            if(quantidadeImoveis =''){
                alert('Não tem nenhum Imóvel cadastrado!')
            }else{
                alert(quantidadeImoveis)
            }
            break
        case '3':
            alert('Saindo...')
            break
        default:
            alert('Opção invalida')
    }

}while ( opcao !== '3')
