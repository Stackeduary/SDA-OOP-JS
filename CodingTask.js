function c1 () { // if, else
    if (true) {
        return "Solution 1: Programming in JS is cool!"
    } else {
        return "Solution 1: Programming in JS is boring"
    }
}


function c2 () { // and, or
    var iLikeToLearn = true
    var iLikeMoney = true
    var iCanCode = false
    if (iCanCode && iLikeMoney) {
        return "Solution 2: Join a big company that I won't name!"
    } else if (iLikeToLearn || iLikeMoney) {
        return "Solution 2: Maybe an intership at the big company I won't name?"
    } else {
        return "Solution 2: stay in school"
    }
}

function c3 () { // for loop
    var s = ""
    for (let i = 0; i < 10; i++) {
        s = s + i
    }
    return "Solution 3: " + s
}

function c4 () { // while loop
    var i = 10
    var s = ""
    while (i >= 0) { // loops until i >= 0 is true
        s += i // same as s = s + i
        i-- // same as i = i - 1
    }
    return "Solution 4: " + s
}

// question 5
function addNumbers(a, b) {
    return a + b
}

function multiplyNumbers(a, b) {
    return a * b
}

function c5 () { // functions
    var n1 = addNumbers(1, 2)
    var n2 = addNumbers(3, 4)
    var s = multiplyNumbers(n1, n2)
    return "Solution 5: " + s
}
// end question 5

function c6 () {
    var pi = Math.PI // 3.14159
    var n1 = Math.round(pi) // rounded
    var n2 = Math.ceil(pi) // rounded up
    var n3 = Math.pow(n1, n2) // n1 to the power of n2
    var n4 = n3 / 3
    return "Solution 6: " + n4
}

function c7 () { // index
    var s = "Welcome! Big unnamed company is a great place to work!"
    var start = "Welcome! "
    var end = "to work"
    var iStart = start.length
    var iEnd = s.indexOf(end) // find substring, -1 if string doesn't contain the substring
    s = s.slice(iStart, iEnd) // cuts out from start index to end index
    return ["Solution 7: " + s, ("Solution 7: " + s).length]
}

function c8 () { // replaceAll, substring
    var s = "Welcome to big unnamed company"
    s = s.replaceAll('l', "") // replaces all occurrences of "l" to ""
    s = s.replaceAll('c', "C") // 
    s = s.replaceAll('W', "")
    s = s.substring(1) // removes the first character from string
    s = s + "!"
    return "Solution 8: " + s
}

function c9 () { // array, substring
    const chars = ["B", "i", "g", "C", "o", "m", "p", "a", "n", "y"]
    var s = ""
    for (let i = 0; i < chars.length; i++) {
        s += chars[i] + "-"
    }
    s.toUpperCase()
    s = s.substring(0, s.length - 1)
    s.replaceAll('-', "")
    return "Solution 9:" + s
}
// A. B-I-G-C-O-M-P-A-N-Y-
// B. B-I-G-C-O-M-P-A-N-Y
// C. B-i-g-C-o-m-p-a-n-y
// D. BigCompany

function c10 () {
    var array = [1, 2, 3, 4, 5, 0]
    array.sort()
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) { // finds modulo (remainder)
            array[i] += 1
        } else {
            array[i]--
        }
    }
    return "Solution 10: " + array
}

// A. 1,2,3,4,5,0
// B. 0,1,3,2,4,5
// C. 1,0,3,2,5,4
// D. 1,2,3,4,5,6

c1()
c2()
c3()
c4()
c5()
c6()
c7()
c8()
c9()
c10()

console.log(c3())
console.log(c4())
console.log(c5())
console.log(c6())
console.log(c7())
console.log(c8())
console.log(c9())
console.log(c10())