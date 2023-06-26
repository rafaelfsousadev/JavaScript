function show(){
    const contactList = document.getElementById('contact-list')
    console.log(contactList)

    const listElementos = document.getElementsByTagName('li')
    console.log(listElementos)

    const contactInputs = document.getElementsByClassName('contact-input')
    console.log(contactInputs)

    const contact = document.querySelectorAll('#contact-list')
    console.log(contact)

    const firstcontact = document.querySelector('#contact-list > li > label')
    console.log(firstcontact)
}   
