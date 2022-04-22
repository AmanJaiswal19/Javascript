// Synchronous //
// Synchronous means every statement of the code gets executed one by one //

// function addition() {
//     console.log(12 + 13)
// }
// function addition2() {
//     console.log(12 + 12)
// }
// addition2()
// addition()

// Asynchronous //
// Asynchronous means code gets executed randomely //

// function addition() {
//     setTimeout(function () {
//         console.log(12 + 13)
//     }, 2000)
// }
// function addition2() {
//     console.log(12 + 12)
// }
// addition2()
// addition()


// cypress execution be Synchronous
// cypress commands are Asynchronous  
// cypress -- javscript jquery --- break sychronus order
// intervence ---- promises manually ---- .then()


// print --- hello, hi, bye //

// function addition3() {
//     setTimeout(function () {
//         console.log('Hello')
//     }, 2000)

//     setTimeout(function () {
//         console.log('Hi')
//     }, 1000)

//     setTimeout(function () {
//         console.log('Bye')
//     }, 3000)
// }
// addition3()

// function addition3() {
//     setTimeout(function () {
//         console.log('Hello')
//         setTimeout(function () {
//             console.log('Hi')
//             setTimeout(function () {
//                 console.log('Bye')
//             }, 3000)
//         }, 2000)
//     }, 1000)
// }

// print I am Learning //

// function addition4() {
//     setTimeout(function () {
//         console.log("Learning")
//     }, 1000)

//     setTimeout(function () {
//         console.log("I")
//     }, 2000)

//     setTimeout(function () {
//         console.log("am")
//     }, 3000)
// }
// addition4()

// function addition4() {
//     setTimeout(function () {
//         console.log("I")
//         setTimeout(function () {
//             console.log("am")
//             setTimeout(function () {
//                 console.log("Learning")
//             }, 3000)
//         }, 2000)
//     }, 1000)
// }

//---------------------------------------------------------------//

// function addition(x, y) {
//     console.log(x + y)
// }
// function addition1(x, y) {
//     console.log(x + y)
// }
// addition1(10, 12)
// addition(9, 11)


// function addition(x, y) {
//     setTimeout(function (x, y) {
//         console.log(x + y)
//     }, 2000, x, y)
// }
// function addition1(x, y) {
//     console.log(x + y)
// }
// addition1(10, 12)
// addition(9, 11)


// function addition2() {
//     setTimeout(function () {
//         console.log("door")
//     }, 1000)

//     setTimeout(function () {
//         console.log("close")
//     }, 2000)

//     setTimeout(function () {
//         console.log("the")
//     }, 3000)
// }
// addition2()

// function addition2() {
//     setTimeout(function () {
//         console.log("close")
//         setTimeout(function () {
//             console.log("the")
//             setTimeout(function () {
//                 console.log("door")
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// addition2()

// callback --- hell
// promise --- pending , reject , resolve

// let pro = new Promise(function (resolve, reject) {
//     let x = 10
//     let y = 20
//     if (x == y) {
//         resolve("I am equal")
//     }
//     else {
//         reject("I am not equal")
//     }
// })
// pro.then(function (msg) {
//     console.log(msg)
// }, function (msg) {
//     console.log(msg)
// })


let pro1 = new Promise(function (resolve, reject) {
    let names = ['Aman', 'sakshi', 'shikha']
    if (names.length == 2) {
        resolve(names)
    }
    else {
        reject(names.pop())
    }
})
pro1.then(function (a) {
    console.log(a)
}, function (b) {
    console.log(b)
})


// let pro2 = new Promise(function (resolve, reject) {
//     if (22 == 22) {
//         resolve("Hi")
//     }
//     else (
//         reject("Bye !")
//     )
// })
// pro2.then(function (msg) {
//     console.log(msg)
//     return msg[0]
// })
//     .then(function (msg) {
//         console.log(msg)
//         return 2
//     })
//     .then(function (msg) {
//         console.log(msg)
//     })



























