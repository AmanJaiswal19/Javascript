// let amol = {
//     fillName: "chinmay deshpande",
//     age: 23,
//     skills: ["java", "python", "testing"]
// }
// let ram = {
//     fillName: "aman jaiswal",
//     age: 31,
//     skills: ["java", "python", "testing"]
// }
// class Pesron2 {
//     fillName = undefined
//     age = undefined
//     skills = undefined
// }
// let amol2 = new Pesron2()
// console.log(amol2)

// amol2.fillName = "shamrao"
// amol2.age = 25
// amol2.skills = ["python", "html"]
// console.log(amol2)

// // add.......
// amol2.lang = "hindi"
// console.log(amol2)

// for (let key in amol2) {
//     console.log(key, amol2[key])
// }

// // setting the value at the time of object creation.......//

// class Pesron3 {
//     constructor(age, rollNO, fullName) {
//         this.age = age
//         this.rollNo = rollNO
//         this.fillName = fullName
//     }
// }
// let amol4 = new Pesron3(31, 132, "aman jaiswal")
// console.log(amol4)

// // Que. make 4 object, set values,loop

// let students = [
//     new Pesron3(11, 23, "aman jaiswal"),
//     new Pesron3(12, 24, "chinmay deshpande"),
//     new Pesron3(13, 25, "yogita dani"),
//     new Pesron3(14, 26, "amol rao")
// ]
// // console.log(students[students.length-1])
// students.forEach(function (el) {
//     for (let key in el) {
//         console.log(key, el[key])
//     }
// })

// //-------------------------------------------------------------------------//

// let bb = students.find(function (el) {                // find element //
//     return el.fillName == "chinmay deshpande"
// })
// console.log(bb)

// let cc = students.reduce(function (acc, el) {           // reduce all age //
//     return acc + el.age
// }, 0)
// console.log(cc)

// // set methods.......//

// class Person5 {
//     constructor(age, rollNo, fullName) {
//         this.age = age
//         this.rollNO = rollNo
//         this.fillName = fullName
//     }
//     setAge(ag) {
//         this.age = ag
//     }
//     setRoll(roll) {
//         this.rollNO = roll
//     }
//     setFullname(fullName) {
//         this.fullName = fn
//     }
// }
// let amol7 = new Person5(12, 22, "rahul dravid")
// console.log(amol7)

// amol7.setAge(34)
// console.log(amol7)


// class Bank {
//     constructor(accname, accNo, bal) {
//         this.accname = accname
//         this.accNo = accNo
//         this.bal = bal
//         this.trasanction=[bal]
//     }
//     deposite(amount) {
//         this.trasanction.push(amount)
//         this.bal = this.bal + amount
//         return this.bal
//     }
//     withdrawal(amount) {
//         if (amount < this.bal) {
//             this.bal = this.bal - amount
//             class Bank {
//     constructor(accname, accNo, bal) {
//         this.accname = accname
//         this.accNo = accNo
//         this.bal = bal
//     }
//     deposite(amount) {
//         this.bal = this.bal + amount
//         return this.bal
//     }
//     withdrawal(amount) {
//         if (amount < this.bal) {
//             this.bal = this.bal - amount
//             class Bank {
//     constructor(accname, accNo, bal) {
//         this.accname = accname
//         this.accNo = accNo
//         this.bal = bal
//         this.trasanction=[bal]
//     }
//     deposite(amount) {
//         this.trasanction.push(amount)
//         this.bal = this.bal + amount
//         return this.bal
//     }
//         }
// let hi = Bank("ram",123,10000)
// console.log(hi)