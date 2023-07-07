const turista = prompt('Qual o seu nome?')
const visita = prompt('Você ja visitou alguma cidade? (Sim/Não)')
let cidade = ''
let contagem = 0
let todasCidades = ''

while(visita == 'Sim'){
   cidade = prompt('Qual o nome dela?')
    let outraCidade = prompt('Mais alguma? (Sim/Não)')
    todasCidades += ' - ' + cidade + '\n'
    contagem ++
    if(outraCidade === 'Não'){
        break
    }
}

alert(`${turista} Você visitou ${contagem} Cidades:
    \n${todasCidades}`)
