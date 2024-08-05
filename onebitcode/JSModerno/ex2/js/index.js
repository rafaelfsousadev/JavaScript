import calculete from "./calculete.js"
import copytoclipboard from "./copytoclipboard.js"
import themeSwitcher from "./themeSwitcher.js"

const input = document.getElementById('input')
const resultInput = document.getElementById('result')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(function(charKeyBnt){
    charKeyBnt.addEventListener('click', function(){
        const value = charKeyBnt.dataset.value
        input.value += value
    })
})

document.getElementById('clear').addEventListener('click', function(){
    input.value = ''
    input.focus()
})

input.addEventListener('keydown', function(ev){
    ev.preventDefault()

    if (allowedKeys.includes(ev.key)){
        input.value += ev.key
        return
    }

    if (ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1)
    }

    if(ev.key === 'Enter'){
        calculete()
    }
})

    document.getElementById('equal').addEventListener('click', calculete)

  
    document.getElementById("copyToClipboard").addEventListener("click", copytoclipboard)

document.getElementById('themeSwitcher').addEventListener('click',)