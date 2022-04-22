// function //

// find longest name in this //
// let Names = ['Aman', 'Sakshi', 'Jayashree', 'Harish']
// let longest = Names.reduce(function (acc, el) {
// el --- Aman
// acc --- " "
// acc --- Aman

// el --- Sakshi
// acc --- Aman  
// acc --- Sakshi

// el --- Jayashree
// acc --- Sakshi
// acc --- Jayashree

//     if (el.length > acc.length) {
//         return el
//     }
//     else {
//         return acc
//     }
// }, '')
// console.log(longest)

// from filter //
// let aa = Names.filter(function (el) {
//     return el.length == longest.length
// })
// console.log(aa)

// numbers //

// let numbers = [11, 22, 33, 44, 99, 55, 66, 77, 88, 99]
// let greater = numbers.reduce(function (acc, el) {
//     if (el > acc) {
//         return el
//     }
//     else {
//         return acc
//     }
// })
// console.log(greater)

// let smaller = numbers.reduce(function (acc, el) {
//     if (el < acc) {
//         return el
//     }
//     else {
//         return acc
//     }
// })
// console.log(smaller)

//-----------------------------------------------------------//

let num = [12, 23, 34, 45, 90, 56, 67, 78, 89]
// let greaternum = num.reduce(function (acc, el) {
// acc --- 12
// el --- 12 --- 1st acc 12

// acc --- 12
// el --- 23 --- 2nd acc 23

//     if (el > acc) {
//         return el
//     }
//     else {
//         return acc
//     }
// }, num[0])
// console.log(greaternum)

// let smallernum = num.reduce(function (acc, el) {
//     if (el < acc) {
//         return el
//     }
//     else {
//         return acc
//     }
// }, num[0])
// console.log(smallernum)

//---------------------------------------------------------------------------//

// Logical 3 //

// passing number as paramter to another function //

// function addition(x, y) {
//     console.log(x + y) // 25
//     return x + y
// }
// let a = addition(12, 13)
// console.log(a) // 25


// parameter but no argument //

// function addition1(x1, y1) {
//     console.log(x1)
//     console.log(y1) // undefined
//     console.log(x1 + y1) // NaN
// }
// addition1()


// Passing arguments //

// function addition2(x2 = 12, y2 = 13) {
//     console.log(x2 + y2)
// }
// addition2(25, 25)


// passing default Values //

// function addition3(x3 = 12, y3 = 13) {
//     console.log(x3 + y3)
// }
// addition3()


// passing string as a parameter to function //

// let city = "Nagpur"
// function greet(word) {
//     console.log('Welcome' + word)
// }
// greet(city)


// array as parameter to another function //

// let as = [11, 22, 33]
// function printarray(arr) {
//     let sum = arr.reduce(function (acc, el) {
//         return acc + el
//     }, 0)
//     console.log(sum)
// }
// printarray(as)

// let sa = [11, 22, 33]
// function printarray([a, b, c]) {
//     console.log(a + b + c)
// }
// printarray(sa)


// object as a paramter to another function //

// let person = {
//     fullName: "Aman",
//     age: 19
// }
// function printobj(obj) {
//     for (let key in obj) {
//         if (key == "fullName") {
//             console.log(key, obj[key])
//         }
//     }
// }
// printobj(person)

let details = {
    firstName: 'Aman',
    lastName: 'Jaiswal'
}
function printName({ firstName: fn, lastName: ln }) {
    console.log(fn + ln)
}
printName(details)


















