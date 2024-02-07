const palavra = prompt('Informe uma palavra:')
let paralraInvertida = ''

for (let i = palavra.length - 1; i >= 0; i--){
    paralraInvertida += palavra[i]
}

if(palavra === paralraInvertida){
    alert(`${palavra} é um palindromo!\n
    ${palavra} !== ${paralraInvertida}`)
}else{
    alert(`${palavra} Não é um palindromo!\n
    ${palavra} !== ${paralraInvertida}`)
}