function soma(...numbers){
    return numbers.reduce((accum, num) => accum + num, 0)
}

console.log(soma(1, 1, 15))
console.log(soma(1,5,6,25,65,11))