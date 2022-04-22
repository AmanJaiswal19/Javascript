// ES6

// class Bank {
//     constructor(accName, accNo, Bal) {
//         this.fullName = accName
//         this.accNo = accNo
//         this.Bal = Bal
//         this.tran = []
//     }

//     deposite(amount) {
//         this.Bal = this.Bal + amount
//         this.tran.push(amount)
//         return this.Bal
//     }

//     withdrawl(amount) {
//         if (amount < this.Bal) {
//             this.Bal = this.Bal - amount
//             this.tran.push(-amount)
//             return this.Bal
//         }
//         else {
//             console.log('insufficent Bal')
//         }
//     }
//     createUserName() {
//         this.userName = this.fullName.split(" ").map(function (el) {
//             return el[0]
//         }).reduce(function (acc, el) {
//             return acc + el
//         }, "")
//     }

//     transaction() {
//         return this.tran.slice(-5)
//     }
// }

// let Aman = new Bank('AMAN JAISWAL', 123, 10000)
// console.log(Aman)

// let transaction = [2000, 5000, -1000, 3000, -4000, -6000, 9000]
// for (let i = 0; i < transaction.length; i++) {
//     if (transaction[i] < 0) {
//         Aman.withdrawl(transaction[i])
//     }
//     else {
//         Aman.deposite(transaction[i])
//     }
// }

// Aman.createUserName()
// console.log(`The last five trasaction of username ${Aman.userName}:${Aman.transaction()}`)

// //--------------------------------------------------------------------------------------------------------//

// // Inheritance

// class Student {
//     constructor(fullName, aadharNo, address) {
//         this.fullName = fullName
//         this.aadharNo = aadharNo
//         this.address = address
//     }
//     display() {
//         console.log(this.fullName)
//     }
// }

// class Teacher extends Student {
//     constructor(fullName, aadharNo, address, salary) {
//         super(fullName, aadharNo, address)
//         this.salary = salary
//     }
//     display() {
//         console.log(this.fullName)
//         super.display()
//     }
// }

// class Professor extends Teacher {
//     constructor(fullName, aadharNo, address, salary, spe) {
//         super(fullName, aadharNo, address, salary)
//         this.spe = spe
//     }
//     display() {
//         console.log(this.fullName)
//         this.super.display()
//     }
// }

// let pro = new Professor('Aman Jaiswal', 123, 'Nagpur', 10000, 'Accounts')
// console.log(pro)

//-------------------------------------------------------------------------------------------//

// Polymorphism
// same class , same method name, different signature === over laoding 

// class add {
//     addition(x, y) {
//         console.log(x + y)
//     }

//     addition(x, y, z) {
//         console.log(x + y + z)
//     }
// }

// addition(x, y, z)
// if (x != undefined && y != undefined && z != undefined) {
//     console.log(x + y + z)
// }
// else if (x != undefined && y != undefined) {
//     console.log(x + y)
// }
// else {
//     console.log('Incorrect input')
// }
// let add = new ADD()

// same class , same method name , different signature   ===>  overlaoding 
// add.addition(12, 12, 12)
// add.addition(12, 12)
// add.addition(12)

// different class , same method name , same signaturw === over riding















