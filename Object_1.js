let students = [
    {
        fullname: "Aman Jaiswal",
        age: 31,
        skills: ["manual tsting", "automation"],
        city: "nagpur"
    },
    {
        fullname: "Sakshi Jaiswal",
        age: 33,
        skills: ["python", "java", "cypress"],
        city: "pune"
    },
    {
        fullname: "Darshan Bhange",
        age: 28,
        skills: ["python", "cypress", "html", "javascript"],
        city: "nagpur"
    }
]

// console.log(students[0].fullname)     //retrive.......//
// console.log(students[0]['fullname'])  //retrive.......//
// console.log(students[2].age)          //retrive.......//
// students[0].skills.push('C++')        //add last element.......//
// console.log(students)
// students[2].skills.pop()              //remove last element.......//
// console.log(students)

// for (let i = 0; i < students.length; i++) {        // print fullname with skills by using loop.......//
//     console.log(students[i]
//     ['fullname'], students[i]['skills'].length)
// }

// students.forEach(function (el, index, arr) {         // print fullname with skills by using forEach.......//
//     console.log(el['fullname'], el['skills'].length)
// })

// let h = students.filter(function (el) {    //print grater then 25 by using filter.......//
//     return el.age >= 25
// })
// console.log(h)

// students.forEach(function (el) {        //print fullname by using forEach.......//
//     console.log(el.fullname)
// })

// average age.......

// let ab = students.reduce(function (acc, el) {
//     return acc + el.age
// }, 0)
// console.log(ab / students.length)

// let aa = students.filter(function (el) {                           //print city nagpur & siklls includs python.......//
//     return el.city == "nagpur" && el.skills.includes('python')
// })
// console.log(aa)

// students.forEach(function (el) {         //print fillname by using forEach.......//
//     console.log(el['fullname'])
// })




