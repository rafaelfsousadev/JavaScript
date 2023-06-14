let saldo = Number(prompt('Informe a quantidade de dinheiro inicial:'))
let opcao = ''

do{
    opcao = prompt(`Saldo disponivel: R$ ${saldo}\n
        \n1.Adicionar dinheiro
        \n2.Remover dinheiro
        \n3.Sair`
    )

    switch(opcao){
    case '1':
        saldo += Number(prompt('Informe o valor a ser adicionado:'))
        break
    case '2':
        saldo -= Number(prompt('Informe o valor a ser removido'))
        break
    case '3':
        alert('Saindo...')
        break
    default:
        alert('Entrada inválida')

    }

}while(opcao !== '3')