// let English = "I am learing javascript"
// console.log(typeof English)
// let bigword = English.split(" ")
// console.log(bigword)
// console.log(bigword.length)

// let aaa = bigword.reduce(function (acc, el) {

// el --- I   acc --- I

// acc ---'I'
// el  --- 'am'  acc --- am

// acc --- am 
// el  --- learning   acc --- learning 

// acc --- learning 
// el ---- javascript  acc --- javascript 

//     if (acc.length > el.length) {
//         return acc
//     }
//     else {
//         return el
//     }
// }, " ")
// console.log(aaa)

// function addition(x, y) {
//     return Hi
// }
// let as = addition(12, 13)
// console.log(as)


// object as parameter to another function 

// let person = {
//     name: 'Aman',
//     age: 19
// }
// for (let key in person) {
//     console.log(key, person[key])
// }

// function printObject(obj) {
//     for (let key in obj) {
//         console.log(key, obj[key])
//     }
// }
// printObject(person)

// function printObject({ name: n }) {
//     console.log(n)
// }
// printObject(person)

// let num = [11, 22, 33, 44]
// function printArray(abc) {
//     abc[0] = 55
//     console.log(abc)
// }
// console.log(num)  // [11, 22, 33, 44]
// printArray(num)  // [55, 22, 33, 44]
// console.log(num)  // [55, 22, 33, 44]

let person1 = {
    name: 'Aman',
    age: 19
}
function printObject(obj) {
    console.log(obj)  // { name: 'Aman', age: 19 }
    obj.name = 'Harish'
}
console.log(person1)
printObject(person1)
console.log(person1)  // { name: 'Harish', age: 19 }

//-------------------------------------------------------------//

let add=function(x,y){
    console.log(+y)
}
function addition(fn){
    
}
