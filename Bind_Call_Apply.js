// let Person = {
//     fullName: 'Aman Jaiswal',
//     age: 31,
//     display: function () {
//         console.log(this.fullName)
//     }
// }
// Person.display()

// let Person2 = {
//     fullName: 'Sakshi Jaiswal',
//     age: 31
// }
// Person2.display = function () {
//     console.log(this.fullName)
// }
// Person2.display()

//---------------------------------------------------//

// Bind
// object can borrow a method from another object //

// let Person = {
//     fullName: 'Aman Jaiswal',
//     age: 31,
//     display: function () {
//         console.log(this.fullName)
//     }
// }

// let Person2 = {
//     fullName: 'Sakshi Jaiswal',
//     age: 31
// }
// let display2 = function () {
//     console.log(this.fullName)
// }

// let abc = display2.bind(Person2)
// abc()
// // or //
// display2.bind(Person2)()

//-----------------------------------------------//

// call

// let PersonOne = {
//     fullName: 'Sakshi Jaiswal',
//     age: 31
// }

// let PersonTwo = {
//     fullName: 'Shikha Jaiswal',
//     age: 30
// }

// let PersonThree = {
//     fullName: 'Jayashee Jaiswal',
//     age: 56
// }

// let display = function () {
//     console.log(this.fullName)
// }

// display.bind(PersonThree)()

// display.call(PersonOne)
// display.call(PersonTwo)
// display.call(PersonThree)

//-----------------------------------------------------//

// Apply 

let ram = {
    fullName: 'Harish Jaiswal',
    addharNo: 12345
}
display = function (lastName) {
    console.log(this.fullName, lastName)
}

display.call(ram,'Jaiswal')
display.apply(ram,['Jaiswal'])






























