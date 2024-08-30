class Property{
    constructor(area, price){
        this.area = area
        this.price = price
    }

    getPricePerSquareMeter(){
        return this.price/ this.area
    }
}

class House extends Property{}  //Para poder herdar uma classe para outras colocamos o extends entre eles

const land = new Property(200, 50000)
const someHouse = new House(120, 200000)
class Apartment extends Property{
    constructor(number, area, price){
        this.area
    }
}

console.log(land)
console.log(someHouse.getPricePerSquareMeter)
