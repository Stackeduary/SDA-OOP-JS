// I want to create an object (in object literal form)
// object literal form is when you write an object using 
// 'let objectName = {attributes in key-value pairs separated by commas}'
let brain = {
    weight: "2 kg",
    color: "gray",
    remember: function() {
        console.log("My name is Joosep")
    }
}

// The two things can object can have:
// 1. data = attributes
// 2. actions = methods

let AudiA82019a = {
    manufacturer: "Audi",
    model: "A8",
    year: 2019,
    mileage: "80000 km"
}

let AudiA82019b = {
    manufacturer: "Audi",
    model: "A8",
    year: 2019,
    mileage: "80000 km"
}

let AudiA82019c = {
    manufacturer: "Audi",
    model: "A8",
    year: 2019,
    mileage: "80000 km"
}

let AudiA82019d = {
    manufacturer: "Audi",
    model: "A8",
    year: 2019,
    mileage: "80000 km"
}

let AudiA82019e = {
    manufacturer: "Audi",
    model: "A8",
    year: 2019,
    mileage: "80000 km"
}

let AudiA82019f = {
    manufacturer: "Audi",
    model: "A8",
    year: 2019,
    mileage: "80000 km"
}

let AudiA82019g = {
    manufacturer: "Audi",
    model: "A8",
    year: 2019,
    mileage: "80000 km"
}

console.log(brain.weight)

// There must be a better way to create objects. I have to create 300 total used car objects and I don't want to have to copy paste and edit 299 of these :(

// class is a collection of objects

// create a constructor within the class that allows us to create objects much more quickly and efficiently than writing them manually in object literal syntax

// create a car class using the old ES5 syntax
function Car(manufacturerInput, modelInput, yearInput, mileageInput) {
    this.manufacturer = manufacturerInput
    this.model = modelInput
    this.year = yearInput
    this.mileage = mileageInput
    this.slogan = function() {
        return `This ${this.manufacturer} ${this.model} can be yours for the low, low price of €50000`
    }
}

// create new car objects from the Car class
let AudiA6Joosep = new Car("Audi", "A6", 2021, "20000 km") // Car("Audi", "A6", 2021, "20000 km") is the constructor
console.log(AudiA6Joosep.mileage)
console.log(AudiA6Joosep.slogan())




// the two ways to create an object:
// 1. object literal syntax
// 2. class constructor function