// function addition(x, y) {
//     console.log(x + y)
// }
// addition(12, 13)

// Lexical Scope.......//

// function add() {
//     let a = 10
//     let b = 20
//     console.log(a + b)

//     function add2() {
//         let x = 100
//         let y = 50
//         console.log(x + y)

//         function add3() {
//             let u = 19
//             let v = 12
//             console.log(u + v)
//         }
//         add3()
//     }
//     add2()
// }
// add()

//-------------------------------------------------------------------------//

// function addition2(x, y) {
//     console.log(x + y)  //25
//     return 12
//     console.log(x + y)                  // issue //
// }
// let aa = addition2(12, 13)
// console.log(aa)  //12

//-------------------------------------------------------------------------//

// closure.......//

function addition3(x, y) {
    // let x = 12
    // let y = 13
    return function () {                    // issue //
        console.log(x + y)
        return x + y
    }
}
let g = addition3(19, 12)
let r = function () {
    console.log(x + y)
    return x + y
}
let x = 10
console.log(r)
let jj = r()
console.log(jj)













