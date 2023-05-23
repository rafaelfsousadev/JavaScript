function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 12
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        msg.innerHTML +=` <strong>BOM DIA!</strong>`
        img.src = 'imagens/Manhã.jpg'
        document.body.style.background = '#dbaf80'
    
    }else if (hora >= 12 && hora <= 18) {
        msg.innerHTML +=` <strong>BOA TARDE!</strong`
        img.src="imagens/Tarde.jpg" 

        document.body.style.background = '#f77101'
    } else{
        msg.innerHTML +=` <strong>BOA NOITE!</strong>`
        img.src = 'imagens/Noite.jpg'
        document.body.style.background = '#0F1B46'
    }
}