//Função normal

function normal(a,b){
 return a + b
}

console.log(`Soma normal: ${normal(2,2)}`)

//Função anonima

const anonima = function(a,b){
    return a + b
}


console.log(`Soma Anonima: ${anonima(2,2)}`)

//Função Arrow

const arrow = (a,b) => {
    return a + b
}

console.log(`Soma Arrow function: ${anonima(2,2)}`)

const subtração = (a,b) => a - b 

console.log(`subtração Arrow function: ${subtração(5,2)}`)


const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const letraP = towns.filter(towns => towns[0] === 'P')

console.log(letraP)