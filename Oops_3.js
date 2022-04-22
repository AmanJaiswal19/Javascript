// function constructor //

// let Details = function (firstName, lastName, rollNo) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.rollNo = rollNo
// this.display = function () {
//     console.log(this.firstName)
// }
// Details.prototype.display = function () {
//     console.log(this.firstName)
// }
// Details.prototype.lang = 'Hindi'
// let ram = new Details('Ram', 'Jais', 19)
// console.log(ram)
// ram.display()
// console.log(ram._proto_ == Details.prototype)
// console.log(ram instanceof Details)
// console.log(ram.lang)

// let aman = new Details('Aman', 'Jaiswal', 31)
// console.log(aman)
// aman.display()
// console.log(aman._proto_ == Details.prototype)
// console.log(aman instanceof Details)
// console.log(aman.lang)

// Program 2 //

// class Biodata {
//     constructor(firstName, lastName) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//     display() {
//         console.log(this.firstName)
//     }
// }
// let sakshi = new Biodata('Sakshi', 'Jaiswal')
// console.log(sakshi)
// sakshi.display()
// console.log(sakshi instanceof Biodata)

// Program 3 //

// let obj = {
//     display: function () {
//         console.log('Hi')
//     }
// }
// let qwerty = Object.create(obj)
// console.log(qwerty)

// qwerty.age = 40
// qwerty.firstName = 'Jayashree'
// qwerty.lastName = 'Jaiswal'
// console.log(qwerty)
// qwerty.display()

// Pregram 4 //
// Inheritance --- Child object acquires all the properties and behaviors of a parent object // 

// class Student {
//     fullName = 'Aman Jaiswal'
//     aadharNo = 123
//     pancardNo = 321
// }
// class Teacher extends Student {
//     salary = 10000
// }
// class Professor extends Teacher {
//     specialization = 'Accounts'
// }
// let aman = new Professor()
// console.log(aman.fullName)
// console.log(aman.aadharNo)
// console.log(aman.pancardNo)
// console.log(aman.salary)
// console.log(aman.specialization)

// Using Constructor //

// class Student1 {
//     constructor(fullName, aadharNo, pancardNo) {
//         this.fullName = fullName
//         this.aadharNo = aadharNo
//         this.pancardNo = pancardNo
//     }
// }
// class Teacher1 extends Student1 {
//     constructor(fullName, aadharNo, pancardNo, salary) {
//         super(fullName, aadharNo, pancardNo)
//         this.salary = salary
//     }
// }
// class Professor1 extends Teacher1 {
//     constructor(fullName, aadharNo, pancardNo, salary, specialization) {
//         super(fullName, aadharNo, pancardNo, salary)
//         this.specialization = specialization
//     }
// }
// let sakshi = new Professor1('Sakshi Jaiswal', 456, 654, 10000, 'Maths')
// console.log(sakshi)
// console.log(sakshi.salary)
// console.log(sakshi.fullName)
// console.log(sakshi.specialization)

//---------------------------------------------------------------------------------------//

// Grandfather() --- display()
// Father() --- display()
// Son() --- display()

class Grandfather {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
    display() {
        console.log(this.firstName, this.lastName)
    }
}
class Father extends Grandfather {
    constructor(gfirstName, lastName, ffirstName) {
        super(gfirstName, lastName)
        this.ffirstName = ffirstName
    }
    display() {
        console.log(this.ffirstName, this.lastName)
         super.display()
    }
}
class Son extends Father {
    constructor(gfirstName, lastName, ffirstName, sfirstName) {
        super(gfirstName, lastName, ffirstName)
        this.sfirstName = firstName
    }
    display() {
        console.log(this.sfirstName, this.lastName)
         super.display()
    }
}
let pro = new Son('Deviprasad', 'Jaiswal', 'Harish', 'Aman')
pro.display()






































































