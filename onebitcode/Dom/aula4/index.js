function addContact(){
    const contactSection = document.getElementById('contacts-list')
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

    const adreesLi = document.createElement('li')
    adreesLi.innerHTML = '<label for = "address">Endereço: <label>'
    const adressInput = document.createElement('input')
    adressInput.type = 'text'
    adressInput.name = 'address'
    adressInput.id = 'address'
    adreesLi.appendChild(adressInput)
    ul.appendChild(adreesLi)
    ul.appendChild(document.createElement('br'))

    contactSection.append(h3, ul)
}

function removeContact(){
    const conctSection = document.getElementById('contacts-list')
    const titles = document.getElementsByTagName('h3')
    const contact = document.getElementsByTagName('ul')

    conctSection.removeChild(titles[titles.length - 1])
    conctSection.removeChild(contact[contact.length - 1])

}