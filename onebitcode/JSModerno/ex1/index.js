const average = (...numbers)=>{
    const sum = numbers.reduce((accum, num)=>accum + num, 0)
    return sum / numbers.length
}

console.log(`Média Aritimetica Simples:${average(3,6,10,9)}`)

const weightedAverage = (...entries) => {
    const sum = entries.reduce((accum, {number, weight}) => accum + (number * weight), 0)

    const weightSum = entries.reduce((accum, entry) => accum + entry.weight, 0)
    return sum / weightSum
}