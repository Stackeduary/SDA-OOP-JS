// Suppose I want to create ten different classes of animal


// Animal = parent class
class Animal {
    constructor(name, binomialName, height, weight, speed) {
        this.name = name
        this.binomialName = binomialName
        this.height = height
        this.weight = weight
        this.speed = speed
    }
    printCharacteristics() {
        return `The ${this.name} has Latin name ${this.binomialName}, a height of ${this.height} cm, a weight of ${this.weight} kg; it moves ${this.speed} km/h.`
    }    
}

// Leopard = child class (child of Animal class)
class Leopard extends Animal {
    constructor(name, binomialName, height, weight, speed, numberOfSpots) {
        super(name, binomialName, height, weight, speed)
        this.numberOfSpots = numberOfSpots
    }
    printCharacteristics() {
        return `The ${this.name} has Latin name ${this.latinName}, a height of ${this.height} cm, a weight of ${this.weight} kg; it moves ${this.speed} km/h and has ${this.numberOfSpots} spots on its coat.`
    }
}


// class Snail {
//     constructor(name, weight, height, speed, binomialName, weightOfShell) {
//         super(name, binomialName, height, weight, speed)
//         this.weightOfShell = weightOfShell
//     }
//     printCharacteristics() {
//         return `The ${this.name} has Latin name ${this.latinName}, a height of ${this.height} cm, a weight of ${this.weight} kg; it moves ${this.speed} km/h and has a shell that weighs ${this.weightOfShell}.`
//     }
// }

class Koala extends Animal{
    constructor(name, weight, height, binomialName, amountOfBambooPoopedOut) {
        super(name, weight, height, binomialName)
        this.amountOfBambooPoopedOut = amountOfBambooPoopedOut
    }
    printCharacteristics() {
        return `The ${this.name} has Latin name ${this.binomialName}, a height of ${this.height} cm, a weight of ${this.weight} kg, and consumed ${this.amountOfBambooPoopedOut} kg of bamboo each day.`
    }
}

class Trout extends Animal {
    constructor(name, binomialName, height, weight, speed, tastiness) {
        super(name, binomialName, height, weight, speed)
        this.tastiness = tastiness
    }
}

class BlackBear {
    constructor(name, weight, height, speed, latinName, weightOfShell) {
        this.name = name
        this.weight = weight
        this.height = height
        this.speed = speed
        this.latinName = latinName
        this.weightOfShell = weightOfShell
    }
    printCharacteristics() {
        return `The ${this.name} has Latin name ${this.latinName}, a height of ${this.height} cm, a weight of ${this.weight} kg; it moves ${this.speed} km/h and has a shell that weighs ${this.weightOfShell}.`
    }
}



let Leppy = new Leopard("leopard", "Panthera pardus", 100, 90, 70, 4207)
// let Turbo = new Snail("snail", "Helix pomatia", 1.8, .008, .0000006, 1.1)
let Timmy = new Trout("trout", "Cynoscion nebulosus", 14, 2.4, 12, "very")
let Kimbo = new Koala("koala", "Bamboopoopus Maximus", 60, 15, 9)
let Trung = new BlackBear("snail", "Helix pomatia", 1.8, .008, .0000006, 1.1)

console.log(Kimbo.printCharacteristics())

console.log(Timmy.printCharacteristics())