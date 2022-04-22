// let x = 10
// console.log(x)

// let add = function (x, y) {
//     console.log(x + y)
// }
// console.log(add)

// let sub = function (a, b) {
//     console.log(a - b)
// }
// console.log(sub)


// function as a parameter to another function//.......

function addition(fn) {
//  let fn = function (x, y) {
//        return (x + y)
}
let y = fn(12, 13)

let ya = addition(add)
console.log(ya)
