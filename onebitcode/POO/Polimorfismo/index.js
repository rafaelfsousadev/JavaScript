class Veiculo{
    move(){
        console.log('O veículo está se movendo.')
    }
}

class Carro extends Veiculo{ // herança de pai para filho
    move(){
        console.log('O carro está se movendo')
    }
}

class Navio extends Veiculo{
    move(){
        console.log('O navio está navegando.')
    }
}

class Avião extends Veiculo{
    move(speed){
        console.log('O avião está voando')
    }
}

const mercedes = new Carro()
const naval = new Navio()
const jato = new Avião()

mercedes.move()
naval.move()
jato.move()