// let Ram = {
//     Name: 'Aman',
//     Srname: 'Jaiswal',
//     display: function () {
//         console.log(this.Name)
//     }
// }
// Ram.display()

// let Detail = function (na, sn) {
//     this.na = na,
//         this.sn = sn,
//         this.display = function () {
//             console.log(this.sn)
//         }
// }
// let sakshi = new Detail('sakshi', 31)

// let Person = function (fullName, age) {
//     this.fullName = fullName
//     this.age = age
//     this.display = function () {
//         console.log(this.fullName)
//     }
// }

// Person.prototype.display = function () {
//     console.log(this.fullName)
// }

// let aman = new Person('Aman', 31)
// let sakshi = new Person('Sakshi', 31)
// aman.display()
// sakshi.display()
// console.log(aman)
// console.log(sakshi)

// All JavaScript objects inherit properties and methods from a prototype //
// JavaScript prototype property allows you to add new properties to object constructors //

// console.log(aman instanceof Person)
// console.log(Person.prototype === aman._proto_)

// Person.prototype.language = "Hindi"
// console.log(aman.language)

// Person.prototype.rollNo = 19
// console.log(aman.rollNo)

// console.log(aman.hasOwnProperty('language'));
// console.log(Person.prototype.hasOwnProperty('language'));

// console.log(aman.hasOwnProperty('rollNo'))
// console.log(Person.prototype.hasOwnProperty('rollNo'))

//----------------------------------------------------------------//

// Aary 

// let Names = ['Ram', 'Shyam', 'Jay', 'Vijay', 'Ram', 'Shyam']
// console.log(Names)
// console.log(Names instanceof Array)
// console.log(Names._proto_ === Array.prototype)
// console.log(Array._proto_ === Names.prototype)

// Names.push("Ajay")
// console.log(Names)

// Array.prototype.duplicate = function (arr) {
//     return Array.from(new Set(arr))
// }
// console.log(Names.duplicate(Names))


// object -- _prototpe_ === Person.prototype
// object ----- > _proto_ ===> function constructor / class

// new {}
// function contructor
// {} prototype
// object
// object _proto_

//----------------------------------------------------------------------------------//

// let city = ['Nagpur', 'Pune', 'Mumbai']
// let c = city.sort()
// console.log(c)
// console.log(city)

// let names = ['Amit', 'Amol', 'Aman']
// console.log(names)
// let n = names.sort()
// console.log(n)

// ES6 Class //

// let Details = class {
//     constructor(fullName, rollNo, address) {
//         this.fullName = fullName
//         this.rollNo = rollNo
//         this.address = address
//     }
//     displayaddress() {
//         console.log(this.address)
//     }
//     set aaddress(GPRS) {
//         this.address = GPRS
//     }
// }

// let D1 = new Details('Aman', 19, 'Nagpur')
// console.log(D1)
// console.log(D1._proto_)
// console.log(D1._proto_ === Details.prototype)
// D1.displayaddress()
// // D1.greet()
// D1.aaddress = 'GPRS'
// console.log(D1)

// let D2 = new Details('Sakshi', 23, 'Nagpur')
// console.log(D2)
// console.log(D2._proto_)
// console.log(Details._proto_ === D2.prototype)
// D2.displayaddress()

//---------------------------------------------------------//

// class Bank {
//     constructor(accName, accNo) {
//         this.accName = accName,
//             this.accNo = accNo
//     }
//     greet() {
//         console.log('accType')
//     }
//     static qwerty() {
//         console.log('Saving Acc')
//     }
// }

// let CusName = new Bank('Ram', 123)
// console.log(CusName)
// CusName.greet()
// Bank.qwerty()






















































