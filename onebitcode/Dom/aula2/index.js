function show(){
     const contctList = document.getElementById('contact-list')
     console.log(contctList)

     const listElements = document.getElementsByTagName('li')
     console.log(listElements)

     const contactInputs = document.getElementsByName('contact-input')
     console.log(contactInputs)

     const contacts = document.querySelectorAll('#contact-input')
     console.log(contacts)

     const contact1 = document.getElementsByName('contact1')
     console.log(contact1)

     const firstcontact = document.querySelector('#contact-list > li > label')
     console.log(firstcontact)
}