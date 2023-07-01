const form = document.getElementById('orderForm')

form.addEventListener('submit', function(ev){
    ev.preventDefault()

    const name = document.getElementById('name').value
    const address = document.getElementById('address').value
    const breadType = document.getElementById('breadType').value
    const main = document.querySelector('input[name="main"]').value
    const observations = document.getElementById('observations').value
    
    let salad = ''
    document.querySelectorAll('input[name="salad"]:checked').forEach(function(item){
        salad += ' - ' + item.value + '\n'
    })

    console.log({
        name,
        address,
        breadType,
        main,
        observations,
        salad
    })
})