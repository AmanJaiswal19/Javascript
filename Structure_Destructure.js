//                 0        1         2         3
// let names = ["Ashish", "Aman", "Anklesh", "Chinmay"]
// let a = names[0]
// console.log(a)
// let b = names[1]
// console.log(b)
// let c = names[2]
// console.log(c)
// let d = names[3]
// console.log(d)

// let [a, b, c, d] = names
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

//----------------------------------------------------------//

// let person = {
//     fullName: "Aman Jaiswal",
//     age: 31,
//     rollNo: 19
// }
// let { fullName: fn, age: ag, rollNo: rn } = person
// console.log(fn)
// console.log(ag)
// console.log(rn)

//---------------------------------------------------------------//

// let students = {
//     fullName: "Aman Jaiswal",
//     age: 31,
//     rollNo: 19,
//     skills: ["javascript", "cypress"]
// }

// let { fullName: fn, age: ag, rollNo: rn, skills: [aa, bb] } = students
// console.log(fn)
// console.log(ag)
// console.log(rn)
// console.log(aa)
// console.log(aa)

//--------------------------------------------------------------//

// let students = {
//     fullName: "Aman Jaiswal",
//     age: 31,
//     rollNO: 19,
//     skills: ["javascript", "cypress"],
//     parents: {
//         father: "harish",
//         mother: "jayashree"
//     }
// }

// let { fullName: fn, age: ag, rollNo: rn, skills: [ab, cd], parents: { father: ft, mother: mt } } = students
// console.log(ft)
// console.log(mt)

//-------------------------------------------------------------//

// let person2 = [
//     {
//         fn: "Aman Jaiswal",
//         skills: ["cypress", "javascript"]
//     },
//     {
//         fn1: "sakshi",
//         skills1: ["technicalsupport"]

//     }
// ]

// let [{ fn: cd, skills: [ef, gh] }, { fn1: yz, skills1: [iii] }] = person2
// console.log(ef)
// console.log(iii)

//----------------------------------------------------------------//


// let i = {
//     family: {
//         parents: {
//             father: "harish",
//             mother: "jayashree"
//         }
//     }
// }

// let { family: { parents: { father: fn, mother: mn } } } = i
// console.log(fn)
// console.log(mn)

//------------------------------------------------------------------//

// spread and rest.......//

// function addition(a, b, c, d, e, f, g, h, i, j, k) {
//     console.log(a + b.....)
// }

// addition(11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21)

function addition(...t) {
    // console.log(...t)
    let sum = t.reduce(function (acc, el) {
        return acc + el
    }, 0)
    return sum
}

let total = addition(11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,)
console.log(total)





















