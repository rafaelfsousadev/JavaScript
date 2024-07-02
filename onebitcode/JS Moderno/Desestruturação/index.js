const person = {
    name: 'Luke',
    job: 'Farmer',
    parents: ['Anaki','padme']
}

const name = person.name // modo Normal!

const {job, parents} = person // quebra o obejeto ou o array e cria váriaveis neles
                              // vem tipo um obejto ou array antes. so o simbulo!

console.log(job,parents)

const [pai, mae] = parents

console.log(pai, mae)

