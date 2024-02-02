const veiculo1 = String(prompt('Informe o nome do primeiro veiculo:'))
const velocidade1 = Number(prompt('Informe a velocidade do primeiro veículo:'))

const veiculo2 = String(prompt('Informe o nome do segundo veiculo:'))
const velocidade2 = Number(prompt('Informe a velocidade do segundo veículo:'))

if(velocidade1 > velocidade2){
    alert(`${veiculo1} é mais rapido do que o ${veiculo2}`)
}else if(velocidade2 > velocidade1){
 alert(`${veiculo2} é mais rapido do que o ${veiculo1}`)
}else{
    alert(`${veiculo1} é ${veiculo2} pussuem a mesma velocidade`)
}