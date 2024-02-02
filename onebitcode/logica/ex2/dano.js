const atacante = prompt('Qual e o personagem atacante?')
const poderDeAtaque = Number(prompt('Qual é o seu poder de ataque?'))

const defensor = prompt('Qual o nome do personagem defensor?')
let pontosDeVida = Number(prompt('Quantos pontos de vida ele possui?'))
const poderDeDefesa = Number(prompt('Qual é o seu poder de defesa?'))
const possuiEscudo = prompt('Ele possui um escudo?(sim/não)')

let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && possuiEscudo === 'não'){
    danoCausado = poderDeAtaque - poderDeDefesa
}else if (poderDeAtaque > poderDeDefesa && possuiEscudo === 'sim'){
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

pontosDeVida -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
  atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
  defensor + "\nPontos de vida: " + pontosDeVida +
  "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
)