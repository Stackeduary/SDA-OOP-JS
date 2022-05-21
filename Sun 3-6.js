let Lauri = {
    name: "Lauri",
    hair: "brown",
    signedCast: false,
    favoriteSong: "For Those About To Rock, We Salute You",
    favoriteBand: "Slayer",
    lovesCats: true
}

console.log(Lauri)

console.log(Lauri.favoriteBand)

Lauri.favoriteBand = "Metallica"

console.log(Lauri.favoriteBand)

let _Bill = "Bill"
let Bill = 546.70

console.log(Bill)
console.log(_Bill)

class KiisselPatriarch {
    constructor(name, numberOfCatsOnDesk, cupsOfCoffeeConsumedToday) {
        let _name = name
        let _numberOfCatsOnDesk = numberOfCatsOnDesk
        let _cupsOfCoffeeConsumedToday = cupsOfCoffeeConsumedToday
        this.greeting = () => {
            return `Hi, my name is ${_name} and I am totally wired! I've had ${_cupsOfCoffeeConsumedToday} cups of coffee in the last ten minutes and ${_numberOfCatsOnDesk > 0 ? "these cats won't let me work" : "they're sleeping right now...thank god"}`
        }
        this.getName = () => _name
        this.getNumberOfCupsOfCoffeeConsumed = () => _cupsOfCoffeeConsumedToday
        this.setNumberOfCatsOnDesk = (newNumberOfCats) => {
            _numberOfCatsOnDesk = newNumberOfCats
        }
    }
}

let MrKiissel = new KiisselPatriarch("Lauri", 3, 12)

console.log(MrKiissel.greeting())

MrKiissel._name = "Alar"

console.log(MrKiissel.greeting())

console.log(MrKiissel.getName())
console.log(MrKiissel.name)


MrKiissel._name = "Metallica's Biggest Fan"
console.log(MrKiissel._name)

// Encapsulation:
// an object's properties are private and inaccessible except through getter methods and setter methods






class Car {
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
    displayInfo = () => `I am a ${this.brand} ${this.model}`
}

var c = new Car('Honda', 'Civic');

console.log("This is a non-encapsulsated object:")

//by default the properties are public
console.log(c.brand)
console.log(c.displayInfo())


class Car2 {
    constructor(brand, model){
        //we use var instead of this
        let _brand = brand;
        this.model = model;

        //if we want a field to be accessed by some method
        //we put it inside the constructor
        this.getBrand = function() {
            return _brand;
        }
    }
}

let Maserati = new Car2("Maserati", "GX400")
console.log("Let's attempt to display the brand to the console:")
console.log(Maserati.brand)
console.log(Maserati._brand)
console.log(Maserati.getBrand())

Maserati._brand = "Ford"
Maserati.brand = "Ford"

console.log("Reassign the brand name because the object has undergone an indentity transformation and now identifies as a Ford")

console.log(Maserati.brand)
console.log(Maserati._brand)
console.log(Maserati.getBrand())





// Functions: Named Functions, Function Expressions, Arrow Functions
// Non-Arrow functions:
// 2 types:
// i. named functions
function addTwoNumbersNAMED(num1, num2) {
    return num1 + num2;
}
console.log(addTwoNumbersNAMED(123235345, 4538913453554))

// ii. function expressions (AKA anonymous functions)
// we know it's a function expression because there's an equals sign =
const addTwoNumbersFunctionExpression = function (num1, num2) {
    return num1 + num2;
}
const addTwoNumbersArrowFunction = (num1, num2) => {
    return num1 + num2
} 
const addTwoNumbersArrowFunctionSuccinct = (num1, num2) => num1 + num2
console.log(addTwoNumbersFunctionExpression(3453463456, 2323235667))
console.log(addTwoNumbersArrowFunction(3453463456, 2323235667))
console.log(addTwoNumbersArrowFunctionSuccinct(3453463456, 2323235667))


const FirstTripleThenAddTwoNumbersArrowFunctionMultipleLines = (num1, num2) => {
    let tripNum1 = 3*num1
    let tripNum2 = 3*num2
    return tripNum1 + tripNum2
} 
// const FirstTripleThenAddTwoNumbersArrowFunctionMultipleLines = (num1, num2) => let tripNum1 = 3*num1 let tripNum2 = 3*num2
//     return tripNum1 + tripNum2
console.log("this is the triple then sum function:")
console.log(FirstTripleThenAddTwoNumbersArrowFunctionMultipleLines(73, 19))

// Täpselt = chinh xac = just nii

// Arrow functions:
// There are 4 cases with arrow functions:
// parameters: when exactly one parameter is used in the function, the parentheses can be omitted
// 0 or 2+ parameters, parentheses are required
const squareFnc = inputVal => inputVal**2
console.log(squareFnc(7))

const squareFncWithParentheses = (inputValWP) => inputValWP**2
console.log(squareFncWithParentheses(13))



// Truthy vs. Falsey
// Truthy: will evaluate to true
// Falsey: will evaluate to false

// What values are truthy? Anything that is not falsey
// Falsey values: 
// null
// 0, -0
// NaN
// undefined
// ""
// false

let falseyArray = [null, 0, NaN, undefined, "", false, "Indrek", 1/0, .0000000000000000000001, [], {}]

for (let counterVar = 0; counterVar < falseyArray.length; counterVar++) {
    if (falseyArray[counterVar]) {
        console.log(`${falseyArray[counterVar]} returns a value!! Wowweewwaaawaaa`)
    } else {
        console.log(`${falseyArray[counterVar]} is falsey :(`)
    }
}

// simple example of method chaining
let KaitKLaughString = "harharharharhar"
let newKaitEvilLaugh = KaitKLaughString.toUpperCase().replaceAll(/r/ig, "muaahaahaaa")
console.log(newKaitEvilLaugh)

let Joosep = 'Joosep'
Joosep += 100 // 'Joosep' = 'Joosep' + 100
console.log(Joosep)

let start = 1
start += 5 // start = start + 5

console.log("cheese" + "burger")

console.log(Math.ceil(3.0))



function c7 () { // index
    var s = "Welcome! Big unnamed company is a great place to work!"
    console.log(s)
    var start = "Welcome! "
    console.log(start)
    var end = "to work"
    console.log(end)
    var iStart = start.length
    console.log(iStart)
    var iEnd = s.indexOf(end) // find substring, -1 if string doesn't contain the substring
    console.log(iEnd)
    s = s.slice(iStart, iEnd) // cuts out from start index to end index
    return ["Solution 7: " + s, ("Solution 7: " + s).length]
}

c7()
console.log(c7())


function c9 () { // array, substring
    const chars = ["B", "i", "g", "C", "o", "m", "p", "a", "n", "y"]
    var s = ""
    for (let i = 0; i < chars.length; i++) {
        console.log(`before: ${s}`)
        s += chars[i] + "-"
        console.log(`after: ${s}`)
    }
    s.toUpperCase()
    console.log(`s uppercased: ${s}`)
    s = s.substring(0, s.length - 1)
    console.log(s)
    s.replaceAll('-', "")
    console.log(s)
    return "Solution 9:" + s
}

console.log(c9())