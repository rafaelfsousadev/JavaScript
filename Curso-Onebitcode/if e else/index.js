const jogaLol = prompt('Você joga Lol? sim ou não!')
let h1 = document.getElementById('aqui')

if(jogaLol == 'sim'){
    h1.innerHTML = 'Só passa raiva nessa porra!'
}else{
    h1.innerHTML = 'Está com a mente preservada!'
}