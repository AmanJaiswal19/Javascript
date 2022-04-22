// let array = [1, 2, 3, 4, 5]
// let a = array[0]
// let b = array[1]
// let c = array[2]
// let d = array[3]
// let e = array[4]

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

// Destructure //

// let [a, b, c, d, e] = array
// console.log(c)
// console.log(e)

//             0         1         2       3
// let city = ['Nagpur', 'Mumbai', 'Pune', 'Delhi']
// let [one, two, three, four] = city
// console.log(one)
// console.log(two)
// console.log(three)


// let abc = [[11, 22, 33], [44, 55, 66], [77, 88, 99]]
// let xyz = abc.flat()
// console.log(xyz)

// without using flat //
// let aj = abc.reduce(function (acc, el) {
//     return acc.concat(el)
// }, [])
// console.log(aj)

// let [[a, b, c], [d, e, f], [g, h, i]] = abc
// console.log(e)
// console.log(h)
// console.log(b)

//-----------------------------------------------------------//

// let person = ['Aman', 'Jaiswal', 31, 32]

// let person2 = {
//     firstName: 'Aman',
//     lastName: 'Jaiswal',
//     age: 31,
//     rollNo: 32
// }
// let { firstName: fn, lastName: ln, age: ag, rollNo: rn } = person2
// console.log(fn)
// console.log(ln)

// Object //

// let student = {
//     fullName: 'Aman',
//     lastName: 'Jaiswal',
//     skill: ['Javascript', 'Cypress']
// }
// let { fullName: fn, lastName: ln, skill: [a, b] } = student
// console.log(a)
// console.log(b)

// let details = {
//     name: 'Aman',
//     skills: ['java', 'html'],
//     parent: {
//         father: 'Harish',
//         mother: 'Jayashree'
//     }
// }
// let { name: nm, skills: [aa, bb], parent: { father: ft, mother: mt } } = details
// console.log(ft)
// console.log(aa)

let xyz = [
    {
        rollNo: 11,
        age: 12
    },
    {
        rollNo: 13,
        age: 14
    },
    {
        rollNo: 15,
        age: 16
    }
]
let [{ rollNo: rl, age: ag }, { rollNo: rl1, age: ag1 }, { rollNo: rl2, age: ag2 }] = xyz
console.log(ag2)
console.log(rl1)
console.log(ag)























