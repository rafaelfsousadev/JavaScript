const veiculo01 = prompt('Nome do primeiro veiculo')
const  vel01 = prompt('Velocidade do primeiro veiculo')
const veiculo02 = prompt('Nome do segundo veiculo')
const vel02 = prompt('velocidade do segundo veiculo')

if(vel01 > vel02){
    alert(`O ${veiculo01} e o mais veloz sem duvidas!`)
}else if(vel01 == vel02){
    alert(`O ${veiculo01} é o ${veiculo02} possui a mesma velocidade!`)
}else{
    alert(`O ${veiculo02} e o mais veloz sem duvidas!`)
}