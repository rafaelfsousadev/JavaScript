const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function(){
   if(input.value === ''){
    input.value = 'Rafael e gato'
   }else{
    input.value = ''
   }
})

document.getElementById('type').addEventListener('click', function(){
    if(input.type === 'text'){
        input.type = 'radio'
    }else{
        input.type = 'text'
    }
})

document.getElementById('placeholder').addEventListener('click', function(){
    input.placeholder = 'Digite algo...'
})

document.getElementById('disable').addEventListener('click', function(){
   input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('click', function(){
    
})


