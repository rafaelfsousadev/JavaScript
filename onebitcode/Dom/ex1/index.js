function addPlayr(){
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value

    const confirmation = confirm(`Escalar ${name} como ${position}?`)
    if (confirmation){
        const teamList = document.getElementById('teamList')
        const playrItem = document.createElement('li')
        playrItem.id = `player-${number}`
        playrItem.innerText = `${position}: ${name} (${number})`
        teamList.appendChild(playrItem )

        document.getElementById('position').value = ''
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''
    }
} 

function removePlayr(){
    const number = document.getElementById('numerToRemove').value
    const playerToRemove = document.getElementById(`player-${number}`)
    const confirmation = confirm(`Remover o jogador ${playerToRemove.innerText}?`)

    if(confirmation){
        document.getElementById('teamList').removeChild(playerToRemove)
        document.getElementById('numerToRemove') = ''
    }
}