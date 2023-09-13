const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns) 
console.log(...towns) // mostra todo o array parte a parte
console.log(...towns[2]) // mostra a item do array separado letra a letra

const townsCopy = towns

townsCopy.pop()
townsCopy.pop()
townsCopy.push('juno')

console.log({towns, townsCopy})

const townsClone = [...towns]

townsClone.push('Rafael','Fernandes', 'Sousa')

console.log({towns, townsCopy, townsClone})

