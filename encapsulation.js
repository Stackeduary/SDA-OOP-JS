class Language {
    constructor(name, nameInEnglish, tonal, phonetic, difficulty, numOfSpeakers, specialCharacters) {
        let _name = name
        let _nameInEnglish = nameInEnglish
        let _tonal = tonal
        let _phonetic = phonetic
        let _difficulty = difficulty
        let _numOfSpeakers = numOfSpeakers
        let _specialCharacters = specialCharacters
        this.returnName = () => _name
        this.returnSpecialChars = () => _specialCharacters
        this.sayHello = function(phrase) {
            console.log(`This is how to say hello in ${_name}: ${phrase}`)
        }
        this.sayHelloAnotherWay = function(phrase) {
            console.log(`This is how to say hello in ${this.returnName()}: ${phrase}`)
        }        
    }
}

let Estonian = new Language("eesti keel", "Estonian", false, true, 7, 1100000, ["ä", "ö", "õ", "ü", "š", "ž"])

Estonian.sayHello("Tervist")

let Vietnamese = new Language("tieng Viet", "Vietnamese", true, true, 8.5, 90000000, ["lots"])

Vietnamese.sayHello("Chao cac ban")
console.log(Estonian.returnSpecialChars())

console.log(Estonian._numOfSpeakers) // should be undefined because the scope of _numOfSpeakers is limited to the class function
console.log(Vietnamese.returnName())
console.log(Vietnamese.name)

let Spanish = new Language("espanol", "Spanish", false, true, 5, 500000000, "several")
Spanish.sayHelloAnotherWay("Hola")