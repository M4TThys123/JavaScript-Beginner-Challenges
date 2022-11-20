// Q1 Return the sum of two numbers
// (addition(3,2) -> 5
function addition(num1, num2) {
    return num1 + num2
}
console.log(addition(3, 2)) //5 
console.log(addition(-3, -6)) //-9
console.log(addition(7, 3)) //10 

// Q2 Convert hours into seconds
function hoursIntoSeconds(hour) {
    return hour * 3600
}

function hoursIntoSeconds(hour) {
    let minutes = hour * 60
    let seconds = minutes * 60
    return seconds
}
console.log(hoursIntoSeconds(2)) //7200
console.log(hoursIntoSeconds(10)) //36000
console.log(hoursIntoSeconds(24)) //86400

// Q3 Calculate the perimeter of a rectangle
function calcPerimeter(length, width) {
    return length * 2 + width * 2
}

function calcPerimeter(length, width) {
    const lengte = length * 2
    const brete = width * 2
    return lengte + brete
}
console.log(calcPerimeter(6, 7)) // 26
console.log(calcPerimeter(20, 10)) // 60
console.log(calcPerimeter(2, 9)) //  22

// Q4 Calculate the area of a triangle
function calcTriangleArea(base, height) {
    return 0.5 * base * height
}
console.log(calcTriangleArea(3, 2)) //  3
console.log(calcTriangleArea(10, 10)) //  50
console.log(calcTriangleArea(20, 20)) //  200

// Q5 Extend a string 
function appendFrontend(fruit) {
    return fruit + "Frontend"
}
console.log(appendFrontend("Apple")) // AppleFrontend
console.log(appendFrontend("Banana")) // BananaFrontend
console.log(appendFrontend("Orange")) // OrangeFrontend

// Q6 Greater than 100
function sumGreaterTan100(num1, num2) {
    if (num1 + num2 > 100) {
        return true
    }
    return false
}

function sumGreaterTan100(num1, num2) {
    return num1 + num2 > 100
}
console.log(sumGreaterTan100(20, 10)) // false
console.log(sumGreaterTan100(50, 60)) // true
console.log(sumGreaterTan100(100, -50)) // false

// Q7 Les than or equal to 0
function lessOrEqual(num) {
    return num <= 0
}
console.log(lessOrEqual(3)) // false
console.log(lessOrEqual(0)) // true
console.log(lessOrEqual(-2)) // true

// Q8 Opposite boolean
function oppositeBoolean(boolean) {
    return !boolean
}
console.log(oppositeBoolean(false)) // true
console.log(oppositeBoolean(true)) // false

// Q9 Is not the number 0
function isNotZero(num) {
    return num !== 0
}
console.log(isNotZero(5)) // true
console.log(isNotZero(0)) // false
console.log(isNotZero(null)) // true

// Q10 Calculate the remainder
function calc(num1, num2) {
    return num1 % num2
}
console.log(calc(4, 2))  // 0
console.log(calc(7, 8))  // 7
console.log(calc(9, 8))  // 1

// Q11 Is the number odd?
function isOdd(num) {
    return num % 2 === 1
}
console.log(isOdd(1)) // true
console.log(isOdd(2)) // false
console.log(isOdd(3)) // true

// Q12 If a number is even, return 1 otherwise return -1
function booleanInterger(num) {
    if(num % 2 === 0) {
        return 1
    }
    else{
        return -1
    }
}
console.log(booleanInterger(1)) // -1
console.log(booleanInterger(2)) // 1
console.log(booleanInterger(5)) // -1

function booleanInterger(num) {
   return num % 2 === 0 ? 1 : -1 
}
console.log(booleanInterger(15)) // -1

// Q13 Check if usesr is logged in and Subscribed
/*
    Maak een functie die 2 springs ontvangt. 
    Als de eerste strig geleik is aan 'LOGGED_IN' EN de tweede string 
    is geleik aan 'SUBSCRIBED', return true, anders return false
*/
function isLoggedInAndSubscribed(log, sub) {
    if(log === "LOGGED_IN" && sub === "SUBSCRIBED") {
       return true 
    }
    return false
}
console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED")) // true
console.log(isLoggedInAndSubscribed("LOGGED_IN", "UNSUBSCRIBED")) // false
console.log(isLoggedInAndSubscribed("LOGGED_OUT", "SUBSCRIBED")) // false

function isLoggedInAndSubscribed(log, sub) {
    return log === "LOGGED_IN" && sub === "SUBSCRIBED"
}
console.log(isLoggedInAndSubscribed("LOGGED_OUT", "SUBSCRIBED")) // false