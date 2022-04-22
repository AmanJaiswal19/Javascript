let amol = {
    fullName: "amol rao",
    skills: ["java", "python", "testing"],
    rollNo: 23
}
let chinmay = {
    fullName: "chinmay deshpande",
    skills: ["java", "python", "testing"],
    rollNo: 25
}
// let aman = {
//     fullName: "aman jaiswal",
//     skills: ["java", "python", "testing"],
//     rollNo: 27
// }

// program 1.......(setting the value outside the class)

// let fullName = "chinmay deshpande"
// let names = ["chinmay", "sarika", "pratiksha"]
// console.log(names)
// console.log(fullName)


class Person {
    fullName = undefined
    skills = undefined
    rollNo = undefined
}
// let amol2 = new Person()
// console.log(amol2)

// update.......
// amol2.fullName = "amol rao"
// amol2.skills = ["python", "java", "testing"]
// amol2.rollNo = 29
// console.log(amol2)

// delete......
// add.......
// retrive......

// proram2.......(setting the vale at the time of object creation)

class Person2 {
    constructor(fn, rn, ag) {
        this.fullName = fn
        this.rollNo = rn
        this.age = ag
    }
}
// let amol3 = new Person2("amol", 23, 24)
// console.log(amol3)
// amol3['lang'] = "marathi"
// console.log(amol3)

// let chinmay3 = new Person2("chinmay D", 33, 44)
// console.log(chinmay3)


// using the set method.......

class Person4 {
    setAge(ag) {
        this.age = ag
    }
    setFullName(fn) {
        this.fullName = fn
    }
    setRollNo(rn) {
        this.rollNo = rn
    }
    setAll(fn, rn, ag) {
        this.fullName = fn
        this.rollNo = rn
        this.age = ag
    }
}
// let amol5 = new Person4()
// console.log(amol5)

// amol5.setFullName("amol 5")
// console.log(amol5)

// amol5.setAge(10)
// console.log(amol5)

// amol5.setRollNo(15)
// console.log(amol5)

// amol5.setAll("ram",129,19)
// console.log(amol5)

//......................................................................................//

class Bank {
    constructor(accname, accNo, bal) {
        this.accname = accname
        this.accNo = accNo
        this.bal = bal
    }
    deposite(amount) {
        this.bal = this.bal + amount
        return this.bal
    }
    withdrawal(amount) {
        if (amount < this.bal) {
            this.bal = this.bal - amount
            return this.bal
        }
        else {
            console.log('insufficient balance')
        }
    }
}
let aman = new Bank("aman", 123456, 200000)
console.log(aman)

let totalbal = aman.deposite(300000)
console.log(totalbal)

aman.withdrawal(700000)
let aa = aman.withdrawal(100000)
console.log(aa)


















