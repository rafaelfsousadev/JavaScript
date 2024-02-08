const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

// push
//Adicionar elementos no final
arr.push('Clifs') // se você salva ele em uma varivel ele devolve o tamanho do Array
console.log(arr)

//unshift
//Adicionar elementos no começo
arr.unshift('Clifs') // se você salva ele em uma varivel ele devolve o tamanho do Array

//pop
//Remover Elementos no final
let ultimoElemento = arr.pop() // se você salva ele em uma varivel ele devolve o elemento removido

//shift     
//Remover Elementos no começo
ultimoElemento = arr.shift() // se você salva ele em uma varivel ele devolve o elemento removido

// Pesquisar por um elemento
//includes 
const inclue = arr.includes('sam')
console.log(inclue) // Devolve se tem ou não o elemento no Array

//indexOF
const indice = arr.indexOf('Gandalf')
console.log(indice)// mostra em qual posição exata esta esse elemento no Array

//Cortat e Concatenar
//slice
const hobbits = arr.slice(0, 4)// ele corta o Array da posição indicada no caso do 0 ao 4 excluindo o 4 

console.log(hobbits)