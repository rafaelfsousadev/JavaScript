let saldo = Number(prompt('Informe a quantidade de dinheiro inical:'))
let opcao = ''

do{
    opcao = prompt(`Saldo disponivel: R$${saldo}\n
    1. Adicionar dinheiro\n
    2. Remover dinheiro\n
    3. Sair`)

    switch(opcao){
        case '1':
            saldo += Number(prompt('Informe o valor a ser adicionado:'))
            break
        case '2':
            saldo -= Number(prompt('Informe o valor a ser removido:'))
            break
        default:
            alert('Opção invelida, Informe uma das opções acima!')
    }
}while(opcao !== '3')