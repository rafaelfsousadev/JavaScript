const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

  //Map

/*   const classe = []

  for (let i = 0; i < personagens.length; i++){
    classe.push(personagens.raca)
  } */

  const nomes = personagens.map(function    (personagens){
    return personagens.nome
  })
  //console.log(nomes)

  //filtar

  const Orcs = personagens.filter(function(personagens){
    return personagens.classe === 'Guerreiro'
  })

  //console.log(Orcs)

  //reduce

  const nivelTotal = personagens.reduce(function(valorAcumulado, personagens){
    return (valorAcumulado) + (personagens.nivel)
  },0)

  console.log(nivelTotal)