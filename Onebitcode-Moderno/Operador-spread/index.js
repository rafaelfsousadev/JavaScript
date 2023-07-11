const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)
console.log(...towns)
console.log(...towns[2])

const townsCopy = towns

townsCopy.pop()
townsCopy.pop()
townsCopy.push('juno')

console.log({towns, townsCopy})

const townsClone = [...towns]

townsClone.push('Rafael','Fernandes', 'Sousa')

console.log({towns, townsCopy, townsClone})

