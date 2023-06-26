function addContact(){
    const contctsection = document.getElementById('contact-list')

    const h3 = document.createElement('h3')
    h3.innerText = 'Contato'

    const ul = document.createElement('ul')

    const nameLi = document.createElement('li')
    nameLi.innerText = 'Nome:'
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullname'
    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)
    ul.appendChild(document.createElement('br'))

    const phoneLi = document.createElement('li')
    phoneLi.innerText = 'Telefone:'
    const phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.name = 'phone'
    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)
    ul.appendChild(document.createElement('br'))

    const adressLi = document.createElement('li')
    adressLi.innerHTML = '<label for="address">Endereço:</label>'
    const addressInput = document.createElement('input')
    addressInput.type = 'text'
    addressInput.name = 'address'
    addressInput.id = 'address'
    adressLi.appendChild(addressInput)
    ul.appendChild(adressLi)
    ul.appendChild(document.createElement('br'))

    contctsection.append(h3, ul)
}

function removeContact(){
    const contctsection = document.getElementById('contact-list')

    const titles = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    contctsection.removeChild(titles[titles.length - 1  ])
    contctsection.removeChild(contacts[contacts.length - 1])
}