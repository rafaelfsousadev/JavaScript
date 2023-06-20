function calcularAreaTriangulo(){
    const base = prompt('Informe a base do triângulo:')
    const altura = prompt('Informe a altura do triângulo:')
    return base * altura / 2
}

function calcularAreaRetangulo(){
    const base = prompt('Informe a base do Retângulo:')
    const altura = prompt('Informe a altura do Retângulo:')
    return base * altura
}

function calcularAreaQuadrado(){
    const lado = prompt('Informe o lado do quadrado:')
    return lado * lado
}

function calcularAreaTrapezio(){
    const baseMaior = Number(prompt('Infome a base maior do trapézio:'))
    const baseMenor = Number(prompt('Infome a base menor do trapézio:'))
    const altura = prompt('Infome a alturo do trapézio:')
    return (baseMaior + baseMenor) * altura / 2
}

function calcularAreaCirculo(){
    const raio = prompt('Infome o raio do circulo:')
    return (3.14 * raio * raio)
}

function exibirMenu(){
    return prompt(
        `Calculadora Geométrica\n
        1.Calcular área do triângulo\n
        2.Calcular área do retângulo\n
        3.Calcular área do quadrado\n
        4.Calcular área do trapézio\n
        5.Calcular área do círculo\n
        6.Sair`
    )
}

function execultar(){
    let opcao = ''

    do{
        opcao = exibirMenu()
        
        let resultado

     switch(opcao){
        case'1':
            resultado = calcularAreaTriangulo()
            break
        case'2':
            resultado = calcularAreaRetangulo()
            break
        case'3':
            resultado = calcularAreaQuadrado()
            break
        case'4':
            resultado = calcularAreaTrapezio()
            break
        case'5':
            resultado = calcularAreaCirculo()
            break
        case'6':
            alert('Saindo...')
            break
        default:
            alert('Opção invalida!')
     }

     if(resultado){
        alert(`Resultado: ${resultado}`)
     }
    }while(opcao !== '6')
}   

execultar()