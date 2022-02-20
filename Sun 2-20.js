let ReservoirDogs = {
    director: "Quentin Tarantino",
    rating: "R",
    review: "All-time great"
}

let KingKong = {
    director: "Peter Jackson",
    rating: "PG-13",
    review: "revenue maximizer"
}

let PulpFiction = {
    director: "Quentin Tarantino",
    rating: "R",
    review: "All-time great"
}

let FastAndFurious = {
    director: "Who?",
    rating: "PG-13",
    review: "meh"
}

let TartuCinema = {
    movie1: ReservoirDogs,
    movie2: KingKong,
    movie3: PulpFiction,
    movie4: FastAndFurious,
    newestMovie: {
        arrivalDate: "Feb. 14, 2022",
        genre: "Cheesy romantic comedy",
        attendance: "poor"
    }
}

PulpFiction.review = "One of the AFI's top 100 films"

console.log(TartuCinema)


function isOdd(num) { // num is a parameter
    if (num % 2 == 0) {
        return false
    } else {
        return true
    }
}

console.log(isOdd(33)) // 33 is the argument
console.log(isOdd(420)) // 420 = argument

console.log(ReservoirDogs instanceof Object)


let movie = function(newTitle, newDirector) {
    let title = newTitle
    let director = newDirector
    this.info = function() {
        console.log(`The movie ${title} was directed by ${director}. Woo!`)
    }
}

let Network = new movie("Network", "Sidney Lumet")

console.log(Network)
console.log(Network.title) // title is undefined outside the function block because it was declared using the 'let' keyword
Network.info()


class Language {
    constructor(name, nameInEnglish, tonal, phonetic, difficulty, numOfSpeakers, specialCharacters) {
        this.name = name
        this.nameInEnglish = nameInEnglish
        this.tonal = tonal
        this.phonetic = phonetic
        this.difficulty = difficulty
        this.numOfSpeakers = numOfSpeakers
        this.specialCharacters = specialCharacters
    }
    sayHello = function(phrase) {
        console.log(`This is how to say hello in ${this.name}: ${phrase}`)
    }
}

let Estonian = new Language("eesti keel", "Estonian", false, true, 7, 1100000, ["ä", "ö", "õ", "ü", "š", "ž"])

Estonian.sayHello("Tervist")

let Vietnamese = new Language("tieng Viet", "Vietnamese", true, true, 8.5, 90000000, ["lots"])

Vietnamese.sayHello("Chao cac ban")
console.log(Estonian.specialCharacters)

// Estonian.specialCharacters.push("asdfsdf")
// console.log(Estonian.specialCharacters)



// Ways to write functions in JS
// 1. Named function
function raiseToPower(base, exponent) {
    return base ** exponent
}

console.log(raiseToPower(16, 4))
console.log(raiseToPower(2, 16))

// 2. Anonymous function AKA function expression stored in a variable
let raiseToPowerAnon = function(base, exponent) {
    return base ** exponent
}

console.log(raiseToPowerAnon(16, 4)) // call anonymous function
console.log(raiseToPower(2, 16)) // call named function

// 3. Arrow function
let raiseToPowerArrow = (base, exponent) => {
    return base ** exponent
}

console.log(raiseToPowerArrow(3, 9))

let raiseToPowerArrowSuccinct = (base, exponent) => base ** exponent // if function body is one line only, curly braces {} and 'return' keyword can be omitted

console.log(raiseToPowerArrowSuccinct(6, 12))


let double = inputNum => inputNum*2 // the parameter list inside the parentheses () can be omitted if there is exactly one parameter in the function

console.log(double(64))


let printGreeting = () => console.log("Tervist")

printGreeting()

let webDevFnc = () => ({
    name: "Bill",
    height: "tall"
})

console.log(webDevFnc())


let bestMonthsInEstonia = ["April", "May", "June", "July", "August", "September", "October"]
// let arr = [10, 11, 12, 33]

function search(value) {
    let array2 = []
    if (value.length > 5) {
        array2.push(value)
    }
    return array2

}

let result = bestMonthsInEstonia.find(search)
// let result = arr.find(e => e % 2 == 0)
console.log(result)


// let numbers = [1, 2, 3, 4, 5];

// console.log(numbers.find(e => e % 2 == 0));


let tempLiteralString = `I'm beginning this string on one line
but look, Mom, I'm continuing this string on the next line!`

console.log(tempLiteralString)

let CanterburyTalesPrologue = `Whan that Aprille with his shoures soote,
The droghte of March hath perced to the roote,
And bathed every veyne in swich licóur
Of which vertú engendred is the flour;`

console.log(CanterburyTalesPrologue)






























