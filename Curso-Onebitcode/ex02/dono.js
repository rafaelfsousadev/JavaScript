const atacante = prompt('Qual o nome do personagem atacante?')
const poderDeAtaque = parseFloat(prompt('Qual é o seu poder de ataque?'))

const defensor = prompt('Qual o nome do personagem defensor?')
let pontosDeVida = parseFloat(prompt('Quantos pontos de vida ele possui?'))
const poderDeDefesa = parseFloat(prompt('Qual e o seu poder de defesa?'))
const possuiEscudo = prompt('Você possui Escudo? (Sim/Não)')

let danoCausado = 0

if(poderDeAtaque > poderDeDefesa && possuiEscudo === 'Não'){
    danoCausado = poderDeAtaque - poderDeDefesa
}else if(poderDeAtaque > poderDeDefesa && possuiEscudo === 'Sim'){
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

pontosDeVida -= danoCausado

alert(`${atacante} Causou ${danoCausado} Pontos de dano em ${defensor}`)
alert(`${atacante} 
    \nPoder de ataque:${poderDeAtaque}
    \n${defensor}
    \nPontos de vida: ${pontosDeVida}
    \nPoder de defesa: ${poderDeDefesa}
    \nPossui Escudo: ${possuiEscudo}`)