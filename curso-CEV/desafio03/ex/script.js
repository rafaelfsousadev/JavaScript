var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `${num.value}R$ Dinheiro.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor invalido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}
function Relatório(){
    if(valores.length == 0){
        window.alert('Adicionar valores antes de finalizar!')
    }else{
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0

        for(var pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} vendas no dia.</p>`
        res.innerHTML += `<p>A maior Venda efetuada foi ${maior}R$</p>`
        res.innerHTML += `<p>A menor Venda efetuada foi ${menor}R$</p>`
        res.innerHTML += `<p>Somando todos as Vendas, temos ${soma}R$</p>`
        res.innerHTML += `<p>A média de vendas do dia é ${media.length(2)}`
    }
}