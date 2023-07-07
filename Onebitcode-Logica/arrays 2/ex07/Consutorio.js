let fila = []
let opcao = ''

do{
    let pasientes = ''
    for(let i = 0; i< fila.length; i++){
        pasientes += (`\n${i + 1}º - ${fila[i]}\n`) 
    }
    opcao = prompt(`Pacientes:\n
        ${pasientes}
        \nEscolha uma ação:
        \n1. Novo paciente
        \n2. Consultar pasiente
        \n3. Sair`)

    switch(opcao){
        case '1':
            const novoPasciente = prompt('Qual é o nome do pasciente?')
            fila.push(novoPasciente)
            break
        case '2':
            const pacienteConsultado = fila.shift()
            if(pacienteConsultado){
                alert(`${pacienteConsultado} Foi removido`)
            }else{
                alert('Não há paciente na fila!')
            }
            break
        case '3':
            alert('encerranco...')
            break
        default :
            alert('Opção invalida!')
        
    }
}while(opcao !== '3')