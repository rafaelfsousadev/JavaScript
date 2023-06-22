const lol = [
    {nome:'blitz',poder:'puxão',jogabilidade:'media'},
    {nome:'shaco',poder:'invisivel',jogabilidade:'dificil'},
    {nome:'akali',poder:'fumaça',jogabilidade:'medio'}
]

const nome = []

for (i = 0; i<lol.length; i++){
    nome.push(lol[i].poder)
}

console.log(nome)