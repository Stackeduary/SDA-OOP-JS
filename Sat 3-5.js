class Human {
    constructor(name, cupsOfCoffeeConsumed, politicalParty) {
        this.name = name
        this.cupsOfCoffeeConsumed = cupsOfCoffeeConsumed
        this.politicalParty = politicalParty
    }
    beAGreatProgrammer() {
        return `The key to being a great programmer is diligence, commitment, focus, persistence and inlining caffeine straight into your veins.`
    }
}

class SDAStudent extends Human {
    constructor(name, cupsOfCoffeeConsumed, numberOfScreamingKids, currentlyProgrammingInACar, numberOfPlaySetsWorkedOn, ForgotToMuteMyself, numberOfZenFountainsInBackground, currentSongPlayingInBackground, arrayOfForeignCountriesAttendedClassFrom, isCatOnDesk) {
        super(name, cupsOfCoffeeConsumed)
        this.numberOfScreamingKids = numberOfScreamingKids
        this.currentlyProgrammingInACar = currentlyProgrammingInACar
        this.numberOfPlaySetsWorkedOn = numberOfPlaySetsWorkedOn
        this.ForgotToMuteMyself = ForgotToMuteMyself
        this.numberOfZenFountainsInBackground = numberOfZenFountainsInBackground
        this.currentSongPlayingInBackground = currentSongPlayingInBackground
        this.arrayOfForeignCountriesAttendedClassFrom = arrayOfForeignCountriesAttendedClassFrom
        this.isCatOnDesk = isCatOnDesk
    }
    beAGreatProgrammer() {
        const cat = `there is a cat`
        const noCat = `there are no cats`
        if (this.name == "Ats") {
            return `Hi, my name is ${this.name}. I've consumed ${this.cupsOfCoffeeConsumed} painkillers today, it is ${this.currentlyProgrammingInACar} that I'm currently programming in a car and ${this.isCatOnDesk ? cat : noCat} on my desk at the moment. I'm currently singing along to "${this.currentSongPlayingInBackground}" when my microphone is off.`
        } else {
            return `Hi, my name is ${this.name}. I've consumed ${this.cupsOfCoffeeConsumed} cups of coffee today, it is ${this.currentlyProgrammingInACar} that I'm currently programming in a car and ${this.isCatOnDesk ? cat : noCat} on my desk at the moment. I'm currently singing along to "${this.currentSongPlayingInBackground}" when my microphone is off.`
        }
    }
    addNewCountry(newCountry) {
        this.arrayOfForeignCountriesAttendedClassFrom.push(newCountry)
    }
    arrowFnc = () => `It is a beautiful day today` // zero parameters, return is one line so can omit the 'return' keyword
    arrowFnc2 = name => `${this.name} is the world's greatest programmer!` // exactly one parameter, return is one line so can omit the 'return' keyword
    arrowFnc3 = (language, salary) => {
        let exponent = Math.random() + 1
        return `now that ${this.name} is a great programmer in ${language}, she will command $${Math.round(salary ** exponent)} per year`
    }
}

// let Bill = new SDAStudent("Bill", 0, 0, false, 0, false, 0, "none", 1, false)
// console.log(Bill.beAGreatProgrammer())

// let Isabella = new SDAStudent("Isabella", 14, 0, false, 0, false, 3, "Billie Jean", [], true)
// console.log(Isabella.beAGreatProgrammer())

// let Kait = new SDAStudent("Kait", 1, 0, false, 4, true, 0, "Bohemian Rhapsody", [], true)
// console.log(Kait.beAGreatProgrammer())

// let Lauri = new SDAStudent("Lauri", 14, 1, false, 0, false, 0, "Eye of the Tiger", [], true)
// console.log(Lauri.beAGreatProgrammer())

// let Trung = new SDAStudent("Trung", 0, 1, false, 0, true, 20, "Single Ladies", ["Viet Nam", "Ukraine", "Greenland", false])
// console.log(Trung.beAGreatProgrammer())

// let Joosep = new SDAStudent('Joosep',3,0,true,2,false,0,true,1,false)
// console.log(Joosep.beAGreatProgrammer())

// let Indrek = new SDAStudent('Joosep', 'Priit', 3, false, 0, true, 1, 'Freddie Mercury', [], false)
// console.log(Indrek.beAGreatProgrammer())

// let Ats = new SDAStudent("Ats", 6, 0, false, 0, false, 0, "For Whom The Bell Tolls", ["Nepal", "Nicaragua"], false)
// console.log(Ats.beAGreatProgrammer())

// let Lauri = new SDAStudent("Lauri", 7, 1, false, 0, false, 0, "Highway to Hell", ["Estonia"], true)

// let Kait = new SDAStudent("Kait", 4, 0, false, 0, false, 0, "Freestyler", ["Estonia"], false)

// console.log(Lauri.beAGreatProgrammer())
// console.log(Kait.beAGreatProgrammer())

let Bea = new SDAStudent("Bea", 3, 4, false, 0, "didn't forget; it's her default state", 0, "The Sound of Silence", ["Philippines", "Estonia", "Sudan"], true)
// console.log(Bea.beAGreatProgrammer())

let ElonMusk = new Human("The King of Doge", 42)
// console.log(ElonMust.beAGreatProgrammer())

// Bea.arrayOfForeignCountriesAttendedClassFrom.push("Egypt")
Bea.addNewCountry("Colombia")
// console.log(Bea)


// let studentsArray = []
// let studentName = "Trung"

// console.log(`before: studentsArray looks like this:`)
// console.log(studentsArray)
// studentsArray.push(studentName)
// studentsArray.push(ElonMusk)
// console.log(`after: studentsArray looks like this:`)
// console.log(studentsArray)


// Simple static method example

class Car {
    constructor(name) {
        this.name = name
    }
    // static methods can only be called on the class, not the object
    static hello() {
        return `Heeeeeyyyyyyy`
    }
}

let Ford = new Car("Ford")
// console.log(Ford.hello()) // throws an error because static methods cannot be called by the object, only the class

// let greeting = Car.hello()
// console.log(greeting)

// console.log(Car.hello())

// Usually, static methods are used to implement functions that belong to the class, but not to any particular object of it.

// Static methods are also used in database-related classes to search/save/remove entries from the database




// console.log(Bea.arrowFnc())

// console.log(Bea.arrowFnc2())

// console.log(Bea.arrowFnc3("JavaScript", 50000))



















// let myPromise = new Promise(function(myResolve, myReject) {
//     setTimeout(function() {
//         myResolve("I love JavaScript and Python. Ewwww Java 🤮")
//     }, 1500)
// })

// myPromise.then(function(value) {
//     document.getElementById("demo").innerHTML = value
// }

// const indicatorVar = true

// for (let i = 0; i < 100; i++) {
//     myPromise.then(function(value) {
//         document.getElementById("demo").innerHTML = value
//     })
// }



// Promises: key takeaways
// 1. asynchronous operation
// 2. that asynchronous operation generates a result
// 3. that result is stored in a promise object

// 4. the promise object is in one of three possible states:
//      a. pending: the asynchronous operation is in progress (it is working on the task)
//      b. fulfilled: the promise was successfully executed
//      a. rejected: the promise was not successfully executed


// ...
// there are three methods that can be performed on the promise object:
// 1. .then()
// 2. .catch()
// 3. .finally()


var today = "Saturday"
var today = [] // truthy
var today = {} // truthy
// var today = NaN // the if-statement does NOT execute
// var today = false // the if-statement does NOT execute
// var today = null // the if-statement does NOT execute
// var today = 0 // the if-statement does NOT execute
// var today = "" // the if-statement does NOT execute
// var today = undefined // the if-statement does NOT execute
// var today = 13 // the if-statement executes

if (today) {
    console.log(`I love ice cream`)
}

// Falsey values in JavaScript:
// NaN, false, null, 0, "", undefined

// everything else is considered truthy

// if-statements don't execute falsey conditions




// function getStudents () {
//     let studentsArray = []

//     setTimeout(() => {
//         studentsArray = [ 
//         {name: 'Richard', status: 'has never attended'},
//         {name: 'Urmet', status: "maybe he was in the first class, but we haven't seen him since"}
//     ]}, 2000)
    
//     return studentsArray
// }

// function findStudent(cheeseburger) {
//     const students = getStudents() // the result of the getStudent() function is stored in the 'students' variable
//     const oneStudent = students.find((studentA) => studentA.name === cheeseburger) // the result of the .find() method applied to the students array looking for a student object with the name property equal to the student name passed into the find method
//     return oneStudent
// }

// console.log(findStudent("Urmet"))



// function getUsers() {
//     let users = [];
//     setTimeout(() => {
//       users = [
//         { username: 'john', email: 'john@test.com' },
//         { username: 'jane', email: 'jane@test.com' },
//       ];
//     }, 1000);
//     return users;
//   }
  
//   function findUser(username) {
//     const users = getUsers(); // A
//     const user = users.find((user) => user.username === username); // B
//     return user;
//   }
  
//   console.log(findUser('john'));
  