// Program 1 //

// dont print repated no //
// let arr = [12, 22, 12, 33, 44, 22, 55]
// let aa = arr.filter(function (el, index) {
//     return arr.indexOf(el) == index
// })
// console.log(aa)


// Program 2 //

// dont print repated no //
// let arr = [12, 22, 12, 33, 44, 22, 55]
// let arr2 = []
// for (let i = 0; i < arr.length; i++) {
//     if (arr2.indexOf(arr[i]) < 0) {
//         arr2.push(arr[i])
//     }
// }
// console.log(arr2)


// Program 3 //

// dont print repated no //
// let arr = [12, 22, 12, 33, 44, 22, 55]
// let arr2 = []
// for (let i = 0; i < arr.length; i++) {
//     if (!arr2.includes(arr[i])) {
//         arr2.push(arr[i])
//     }
// }
// console.log(arr2)


// Program 4 //

// find +ve no //
// let array2 = [12, 14, 5, -56, 22, 12, -23]
// let array3 = []
// for (let i = 0; i < array2.length; i++) {
//     if (array2[i] > 0) {
//         array3.push(array2[i])
//     }
// }
// console.log(array3)

// let array4 = array2.filter(function (el) {
//     return el > 0
// })
// console.log(array4)


// Program 5 //

// sum all +ve & -ve no seprately //
let array2 = [12, 14, 5, -56, 22, 12, -23]
let aa = array2.filter(function (el) {
    return el > 0
}).reduce(function (acc, el) {
    return acc + el
})
console.log(aa)


let aabb = array2.filter(function (el) {
    return el < 0
}).reduce(function (acc, el) {
    return acc + el
})
console.log(aabb)



























