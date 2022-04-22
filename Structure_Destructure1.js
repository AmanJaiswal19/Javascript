// spread and rest operator

// function addition55(a, b, c) {
//     console.log(a + b + c)
// }
// addition55(12, 13, 14, 33, 44, 55, 66, 77, 88, 99, 55)


// function addition55(...r) {
//     console.log(r)
//     let sum = r.reduce(function (acc, el) {
//         return acc + el
//     }, 0)
//     return sum
// }
// let total = addition55(12, 13, 14, 33, 44, 55, 66, 77, 88, 99, 55)
// console.log(total)


// let ages = [18, 20, 16, 30, 23, 15, 25, 24, 27, 29, 32, 11, 16, 31]

function above(a, ...arr) {
    let abc = arr.filter(function (el) {
        return el > a
    })
    return abc
}
let xyz = above(18, 20, 16, 30, 23, 15, 25, 24, 27, 29, 32, 11, 16, 31)
console.log(xyz)

let aaa = above(25, 20, 16, 30, 23, 15, 25, 24, 27, 29, 32, 11, 16, 31)
console.log(aaa)

//----------------------------------------------------------------------------//

// spread.......//

// let ages = [18, 20, 16, 30, 23, 15, 25, 24, 27, 29, 32, 11, 16, 31]
// function add(a, b, c) {
//     console.log(a + b + c)
// }
// add(ages[0], ages[1], ages[2])
// function add(a, b, c) {
//     console.log(a + b + c)
// }
// add(...ages)

// 11,22,33-----[11,22,33]-----//rest
//[11,22,33]-----11,22,33-----//spread

//---------------------------------------------------------------------//

let ages = [11, 22, 33, 44, 55, 66, 11, 22]

function printArr(arr, fn) {
    let newArry = []
    for (let i = 0; i < arr.lenght; i++) {
        newArry.push(fn(arr[i]))
    }
    return newArry
}
let above18 = function (el) {
    return el > 18
}
let mulBy3 = function (el) {
    return el * 3
}
let addtwo = function (el) {
    return el + 2
}
let ab = printArr(ages, above18)                   // issue //
let cd = printArr(ages, mulBy3)
let ef = printArr(ages, addtwo)

console.log(ab)
console.log(cd)
console.log(ef)


























