// let and const
// function:- 1) function decleration, 2) function experssion, 3) arrow function 
// for loop, while loop, conditional statement(if or else) ternary 
// switch
// Array
// object --- object liternal
// destructure and struture
// function (with every data type)
// primitive and secondary 
// rest and spread

//-----------------------------------------------------------//

// let student = {
//     fullName: 'Aman JAiswal',
//     age: 19
// }
// Retrive by :- dot notaion & bracket notation[]
// student.fullName
// student['age']
// console.log(student)

// student.age = 23
// student['age'] = 12
// console.log(student)

// student.lang = 'Hindi'
// student['city'] = 'Nagpur'
// console.log(student)

// delete student.lang
// delete student['city']
// console.log(student)


// userName + unique userName

let students = [
    {
        fullName: "Aman Jaiswal"
    },
    {
        fullName: "Sakshi Jaiswal"
    },
    {
        fullName: "Harish Jaiswal"
    },
    {
        fullName: "Ashish Jaiswal"
    }
]
students.forEach(function (el) {
    let un = el.fullName.split(" ").reduce(function (acc, el) {
        return acc + el[0]
    }, "")
    un = isUnique(un)
    el.userName = un
})
console.log(students)

function isUnique(userName) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].userName) {
            if (students[i]['userName'] === userName) {
                let update = userName + userName
                return isUnique(update)
            }
        }
        else {
            return userName
        }
    }
}

//------------------------------------------------------//

// rest operator
//            0   1   2   3   4 
// let array = [11, 22, 33, 44, 55]
// console.log(array)

// let num = [11, 22, 33, 44, 55, 66, 77, 88, 99]
// console.log(num)
// function sumAll(...arr) {
//     console.log(arr);
//     return arr.reduce(function (acc, el) {
//         return acc + el;
//     }, 0);
// }
// let aaa = sumAll(11, 22, 33, 44, 55, 66, 77, 88, 99)
// console.log(aaa)


// function above(a, ...arr) {
//     console.log(arr)
//     console.log(a)
//     return arr.filter(function (el) {
//         return el > a
//     })
// }
// let aa = above(18, 11, 22, 33, 44, 55, 66, 77, 88, 99)
// let aaa = above(30, 11, 22, 33, 44, 55, 66, 77, 88, 99)
// console.log(aa)
// console.log(aaa)

// spread operation

let transactions = [11, 22, 33, 44, 55, 6, 77, 88, 99]
function lastFive(a, b, c, d, e) {
    console.log(a + b + c + d + e)
}
lastFive(transactions[0], transactions[1], transactions[2], transactions[3], transactions[4])
lastFive(...transactions)




































