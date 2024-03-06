const boardRegion = document.querySelectorAll('#gameBord span')
const vBord = []
let turnPlayer = ''

function updateTitle(){
    const playerInput = document.getElementById(turnPlayer)
    document.getElementById('turnPlayer').innerText = playerInput.value
} 

function initializeGame(){
    vBord = [['', '', ''], ['', '', ''], ['', '', '']]
    turnPlayer = 'player1'
    document.querySelector('h2').innerHTML = 'Vez de: <span id="turnPlayer"></span>'
    updateTitle()
    boardRegion.forEach(function(element){
      element.classList.remove('win')
      element.innerText = ''
      element.addEventListener('click', handleBoardClick)
    })
} 

function handleBoardClick(ev){
 
}