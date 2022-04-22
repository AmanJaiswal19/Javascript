// user drfine
// templat to create same multiple objects with different

// let amol = {
//     fulllName: "aman jaiswal",
//     age: 31,
//     skills: ["javascriept"]
// }
// class person {
//     constructor(fulllName, age, roll) {
//         this.fulllName = fulllName
//         this.age = age
//         this.roll = roll
//     }
// }
// let amol2 = new person("Ram", 25, 18)
// console.log(amol2)

//----------------------------------------------------------------------------//

// class person3 {
//     displayFullName(fulllName) {
//         this.fulllName = fulllName
//     }
//     displayRoll(roll) {
//         this.Roll = roll
//     }
//     displayAge(age) {
//         this.age = age
//     }
// }
// let amol4 = new person3()
// amol4.displayAge(15)
// amol4.displayRoll(25)
// amol4.displayFullName("Aman Jaiswal")
// console.log(amol4)

//------------------------------------------------------------------------//

// function addition() {
//     let x = 10
//     let y = 20
//     console.log(x + y)

//     function addition2() {
//         let a = 15
//         let b = 25
//         console.log(a + b)

//         function addition3() {
//             let u = 50
//             let v = 25
//             console.log(u + v)
//         }
//         addition3()
//     }
//     addition2()
// }
// addition()

//-------------------------------------------------------------------//

// function addition4(x, y) {
//     console.log(x + y)
//     return x + y
//     console.log(x + y)
// }
// let aaa = addition4(12, 13)
// console.log(aaa)

//-------------------------------------------------------------------//

// function addition5(x, y) {
//     let add = function () {
//         console.log(x + y)
//     }
//     return add
// }
// let bbb = addition5(15, 15)
// console.log(bbb)
// bbb()

//--------------------------------------------------------------------------//

// function addition6(x, y) {
//     console.log(x + y)
//     return x + y
// }
// let x = addition6(23, 27)
// console.log(x)

//----------------------------------------------------------------------------//

// let addition7 = function (x, y) {
//     console.log(x + y)
//     return x + y
// }
// let aa = addition7(12, 13)
// console.log(aa)

//-----------------------------------------------------------------------------//

// var fullName="Aman J"

// let person = {
//     fullName: "Aman Jaiswal",
//     rollNo: 23,
//     age: 32,
//     display: function () {
//         console.log(this)
//         console.log(this.fullName)  //this-----person

//         // function display2() {
//         //     console.log(this.fullName)  //-----window
//         // }
//         // display2
//     }
// }
// person.display()

//-------------------------------------------------------------------------//

// cypress.....js //

// let person = {
//     fullName: "Aman Jaiswal",
//     age: 31,
//     display: function () {
//         console.log(this.fullName)  // person

//         function display2() {
//             console.log(this.fullName)  // window
//         }
//         display2()
//     }
// }
// console.log(this)
// person.display()

//------------------------------------------------------------------------------//

// let person = {
//     fullName: "Aman Jaiswal",
//     age: 31,
//     display: function () {
//         console.log(this.fullName)

//         let display2 = () => {
//             console.log(this.fullName)
//         }
//         display2()
//     }
// }
// console.log(this)
// person.display()

//-------------------------------------------------------------------------------//

// let person = {
//     fullName: "Aman Jaiswal",
//     age: 31,
//     display: () => {
//         console.log(this.fullName)

//         let display2 = () => {
//             console.log(this.fullName)
//         }
//         display2()
//     }
// }
// console.log(this)
// person.display()

//-----------------------------------------------------------------------------//

// var age = 20

let vehicle = {
    color: "red",
    age: 23,
    displayAge: () => {
        console.log(this)
        console.log(this.age)

        let display3 = () => {
            console.log(this)
            console.log(this.age)
        }
        display3()
    }
}
vehicle.displayAge()























































































































