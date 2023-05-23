function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var género = ''
        var img = document.getElementById('imagem')
        if (fsex[0].checked){
            género = 'Homem'
            if (idade >=0 && idade < 10){
                //criança
                img.src="imagens/bebe-homem.jpg"
            }else if (idade < 21){
                 //jovem
                 img.src="imagens/jovem-homem.jpg"
            }else if (idade< 50){
                //adulto
                img.src="imagens/Adulto-homem.jpg"
            }else{
                //idoso
                img.src="imagens/idoso-homem.jpg"
            }
        }else if(fsex[1].checked){
            género ='Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.src="imagens/bebe-mulher.jpg"
            }else if (idade < 21){
                 //jovem
                img.src="imagens/jovem-mulher.jpg"
            }else if (idade< 50){
                //adulto
                img.src="imagens/Adulto-mulher.jpg"
            }else{
                //idoso
                img.src="imagens/idoso-mulher.jpg"
            }
        }
        res.innerHTML = `Detectamos ${género} de ${idade} anos.`
    }

}