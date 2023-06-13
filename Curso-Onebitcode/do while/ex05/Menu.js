let opcao = ''

do{
    opcao = prompt(`Seja bem-vindo\n
        \nEscolha uma das opções abaixo:
        \n1.Opção um
        \n2.Opção dois
        \n3.Opção três
        \n4.Opção quatro
        \n5.Encerrar`)


    switch(opcao){
        case'1':
        break
        alert('Você escolheu a opção 1')
        case'2':
        break
        alert('Você escolheu a opção 2')
        case'3':
        break
        alert('Você escolheu a opção 3')
        case'4':
        break
        alert('Você escolheu a opção 4')
        case'5':
        break
        alert('Você escolheu a opção 5')
        alert('Encerrando...')
        break
        default:
            alert('Opção invalida.')
    }
}while(opcao !== '5')