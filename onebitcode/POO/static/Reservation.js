class Reservation{
    constructor(guetes, room, days){
        this.guetes = guetes
        this.room = room
        this.days = days
        this.total = days * Reservation.baseFee
    }

    static baseFee = 150   // Se coloca uma static apos o construtor podemos criar um elemento fixo/ um elemento reserva

    static showBseFee(){
        console.log(`Base fee is ${Reservation.baseFee}`)
    }
}

Reservation.showBseFee()

const r1 = new Reservation(3, '201', 5)
console.log(r1)