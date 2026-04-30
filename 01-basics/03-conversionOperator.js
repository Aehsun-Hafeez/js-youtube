let score = 33      
// const { variable } = req.body        we aren't sure about the variable type

//console.log(typeof score)
//console.log(typeof(score))

let score2 = "33"
//console.log(typeof score2)
let valueInNumber = Number(score2)
//console.log(typeof valueInNumber)

let score3 = "123abc"
let valueInNumber3 = Number(score3)
//console.log(typeof valueInNumber3)
//console.log('scoer3 '+valueInNumber3)

let score4 = null
let valueInNumber4 = Number(score4)
//console.log(typeof valueInNumber4)
//console.log('score4 '+valueInNumber4)

let score5 = undefined
let valueInNumber5 = Number(score5)
//console.log(typeof valueInNumber5)
//console.log('score5 '+valueInNumber5)

let score6 = true
let valueInNumber6 = Number(score6)
//console.log(typeof valueInNumber6)
//console.log('score6 '+valueInNumber6)

let score7 = "aehsun"
let valueInNumber7 = Number(score7)
//console.log(typeof valueInNumber7)
//console.log('score7 '+valueInNumber7)

// initial => conversion => type after conversion
// "33" => 33 => number
// "33abc" => NaN => number
// true => 1, false => 0
// "" => false
// "aehsun" => true

// let isLoggedInt = true
// let isLoggedIn = 0
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// let isLoggedIn = ""
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// let isLoggedIn = "aehsun"
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// int to string
let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)