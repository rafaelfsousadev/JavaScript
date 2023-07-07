const arr = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr)

//Adicionar elementos
//push === coloca no final do Array um novo valor!

arr.push('10')
console.log(arr)

//unshift === coloca um valor no inicio do Array e empurra os demais para o proximo

arr.unshift('0')
console.log(arr)

//remover o ultimo valor do array
// pop

arr.pop()
console.log(arr)

// remover o primeiro valor do array
//shift
arr.shift()
console.log(arr)

//pesquisar por um elemento vai retornar um valor boleano 
//includes

let inclui = arr.includes(22)
console.log(inclui)

// mostra em qual posição o elemento está
//indexOF

const indice = arr.indexOf(5)
console.log(indice)

//cortar e mostra so as posições que você escolhe
//slice

const hobbits = arr.slice(0, 4)
console.log(hobbits)

//junta arrays
//concat

const sociedade = hobbits.concat(25, 72, arr)
console.log(sociedade)

//substituição dos elementos
//splice
const a = sociedade.splice(indice, 1, 2)
console.log(sociedade)