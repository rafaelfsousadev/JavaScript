// Modos de armazenar informações
//Session Storage = guarda a informação mesmo a pagina sendo reiniciada. mais não quando e fechada

document.getElementById('sessionBtn').addEventListener('click', function(){
    const input = document.getElementById('session')
    sessionStorage.setItem('info', input.value) // temos o setIntem que possui dois parametros, primeiro e o nome do valor e depois e onde vamos pegar ele
    input.value = ''
})

document.getElementById('readSession').addEventListener('click', function(){
    const info = sessionStorage.getItem('info')
    alert('A informação é ' + info)
})

// Local Storage = guarda informação que ira ficar mesmo a página sendo reiniciada

document.getElementById('localBtn').addEventListener('click', function(){
    const input = document.getElementById('local')
    localStorage.setItem('text', input.value)
})

document.getElementById('readLocal').addEventListener('click', function(){
    
})