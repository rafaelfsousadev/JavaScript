class Account{
    #passowor
    #email
    constructor(user){
        this.#email = user.email //coloca um # depois do this. no atributo para deixalo privado
        this.#passowor = user.passowor  //As vezes a informação não pode ser modificada precisamos assegura-la de alguma forma, essa forma é o encapsulamento
        this.balance = 0
    }
}

const user = {
    email: 'Rafael@gmail.com',  
    passowor: '123456'
}

const myAccount = new Account(user)