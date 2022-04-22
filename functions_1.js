// function as a arry, string, objects, number, function, boolean //

// function decleration.......//

// function addition(x, y) {
//     return x + y
// }
// let a = addition(12, 13)
// console.log(a)

// finction experssion.......//

// let addition1 = function (x, y) {
//     return x + y
// }
// let b = addition1(24, 26)
// console.log(b)

// arrow function.......//

// let addition2 = (x, y) => {
//     return x + y
// }
// let c = addition2(12, 13)
// console.log(c)

// Number as a parameter to function.......//

// function additionNumber(x, y) {
//     console.log(x + y)
// }
// additionNumber(12, 13)

// let additionNumber1 = function (x, y) {
//     console.log(x + y)
// }
// additionNumber1(12, 13)

// let additionNumber2 = (x, y) => {
//     console.log(x + y)
// }
// additionNumber2(20, 30)

// string as a parameter to function.......//

// function greet(greet, name) {
//     console.log(greet + name)
// }
// greet("Good Morning!", "aman")

// let greet1 = function (greet, name) {
//     console.log(greet + name)
// }
// greet1("GoodEvening!", "aman")

// let greet2 = (greet, name) => {
//     console.log(greet + name)
// }
// greet2("GoodAftroon!", "aman")

// Boolean as a parameter to function.......//

// function DriveAllowed(above18) {
//     if (above18) {
//         console.log("You are allowed to Drive")
//     }
//     else {
//         console.log("You are not allowed to Drive")
//     }
// }
// DriveAllowed(true)

// let DriverAllowed1 = function (above18) {
//     if (above18) {
//         console.log("You are allowed to Drive")
//     }
//     else {
//         console.log("You are not allowed to Drive")
//     }
// }
// DriverAllowed1(false)

// let DriverAllowed2 = (above18) => {
//     if (above18) {
//         console.log("You are allowed to Drive")
//     }
//     else {
//         console.log("You are not allowed to Drive")
//     }
// }
// DriverAllowed2(true)

// array as a parameter to another function.......//

// let names = ["chinmay", "aman", "amol", "ram"]
// function printArray(arr) {
//     arr.forEach(element => {
//         console.log("welcome" + element)
//     });
// }
// printArray(names)

// object as a parameter to another function.......//

// let Person1 = {
//     fullName: "aman jaiswal",
//     age: 31,
//     rollNo: 19
// }
// function printobj(obj) {
//     for (let key in obj) {
//         console.log(key, obj[key])
//     }
// }
// printobj(Person1)

// function as a parameter to another function.......//

function Subtraction(fn) {
    // let fn = function (x, y) {
    //     return x - y
    // }
     let f = fn(10, 5)
    return f
}
let q = Subtraction(subA)
console.log(q)

























































