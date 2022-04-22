// object literal

// let Gayatri = {
//     fullName: "Gayatri More",
//     age: 31,
//     skills: ["SQL", "Javscript", "Cypress"]
// }

// let Sakshi = {
//     fullName: "Sakshi Jaiswal",
//     age: 31,
//     skills: ["SQL", "Testing"]
// }
// Retrive //

// console.log(Sakshi.fullName)
// console.log(Sakshi['fullName'])

// Update //

// Sakshi.fullName = "Aman Jaiswal"
// Sakshi['age'] = 19
// console.log(Sakshi)

// Add //

// Sakshi.lang = "Hindi"
// Sakshi['city'] = "Nagpur"
// console.log(Sakshi)

// Delete //

// delete Sakshi.city
// delete Sakshi['lang']
// console.log(Sakshi)

// setting the properties outside the class //

// class Person {

//     fullName = undefined
//     age = undefined
//     skills = undefined
// }
// let aaru = new Person()
// console.log(aaru)

// aaru.fullName = "Aaru Shahu"
// aaru.age = 4
// aaru.skills = ["Game"]
// aaru.lang = "Hindi"
// console.log(aaru)

// let aman = new Person()
// console.log(aman)

// aman.fullName = "Aman Jaiswal"
// aman.age = 31
// aman.lang = "Hindi"
// aman.skills = ["JS", "Cypress"]
// console.log(aman)


// setting the values using contructor //

// class Person2 {

//     constructor(fn, ag, sk) {
//         this.fullName = fn
//         this.age = ag
//         this.skills = sk
//     }
// }
// let Harish = new Person2("Harish", 66, ["Business"])
// console.log(Harish)

// let Jayashree = new Person2("Jayashree", 56, ["Housewife"])
// Jayashree['lang'] = "Hindi"
// console.log(Jayashree)

// setting the properties at the time of object //

// class Person3 {
//     constructor(fn, ag, sls) {
//         this.fullName = fn
//         this.age = ag
//         this.skills = sls
//     }
// }
// let students = [
//     new Person3("Ram", 19, ["JS", "C++"]),
//     new Person3("Shyam", 25, ["Oracal", "SQL"]),
//     new Person3("Ajay", 35, ["python", "js"])
// ]
// console.log(students[0])

// //--------------------------------------------------//

// students.forEach(function (el) {
//     for (let key in el) {
//         console.log(key, el[key])
//     }
// })

// lang = ["english", "hindi", "marathi"]

// students.forEach(function (el, index) {
//     el.lang = lang[index]
//     console.log(el)
// })
// console.log(students)


// using set function //

class Person2 {
    setAge(ag) {
        this.age = ag
    }
    setRollNumber(rNo) {
        this.rollNo = rNo
    }
    setFullName(fn) {
        this.fullName = fn
    }
}
let Raj = new Person2
console.log(Raj)

Raj.fullName = "Rajesh"
console.log(Raj)

Raj.RollNumber = 19
console.log(Raj)

Raj.age = 25
console.log(Raj)


// setting the properties outside the class //
// setting the properties at the time of object // 
// creation using constructor //
// using set function //








