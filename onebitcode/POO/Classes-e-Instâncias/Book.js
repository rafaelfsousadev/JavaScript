class book{
    constructor(title){
        this.title = title
        this.puplished = false
    }
    publish(){
        this.puplished = true
    }
}

const eragon = new book('Eragon') //new book e um constrtutor, reservado para criar ums nova classe
const eldest = new book('eldest')

eragon.publish()
console.log(eragon)
console.log(eldest)
