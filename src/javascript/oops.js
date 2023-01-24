/**
 * class blue print of things 
 * object actual implementaion of class(instance of class) 
 */

class Car {
    constructor(name, model, engineCapacity, numberOfSeat, colorAvailable) {
        this.name = name;
        this.model = model;
        this.engineCapacity = engineCapacity;
        this.numberOfSeat = numberOfSeat;
        this.colorAvailable = colorAvailable
    }

    async create() {
        console.log(`shubham bsdk ${this.name} , ${this.model} , ${this.engineCapacity}`);
    }
    static getData(name , model ,engineCapacity) {
        console.log(`shubham bsdk ${name} , ${model} , ${engineCapacity}`);
    }
}

let swift = new Car('swift', 'zx+', '1000cc', 5, ['red', 'white', 'blue']);
swift.create()

Car.getData('tata','tigor','1300cc')