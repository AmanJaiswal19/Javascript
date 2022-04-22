//              0        1      2  3
// let person = ['Aman', 'Sakshi', 19, 31]

// Retrive // 
// console.log(person[0])

// Update // 
// person[0] = 'Jaiswal'
// console.log(person)

// add //
// person.push('AJ')
// console.log(person)

// Delete //
// person.pop('AJ')
// console.log(person)

//---------------------------------------------------------------------//

// let person2 = {
//     firstName: 'Aman',
//     lastName: 'Jaiswal',
//     rollNo: 19,
//     age: 31
// }
// console.log(person2)

// object does not stores the value by index
// .notation and bracket notation[] 

// Retrive by .notation and bracket notation[] //
// console.log(person2.firstName)
// console.log(person2['lastName'])

// Update by .notation and bracket notation[] //
// person2.firstName = 'Sakshi'
// person2['rollNo'] = 23
// console.log(person2)

// add by .notation and bracket notation[] //
// person2.city = 'Nagpur'
// person2['lang'] = 'Hindi'
// console.log(person2)

// delete by .notation and bracket notation[] //
// delete person2.city
// delete person2['lang']
// console.log(person2)


// let vehile = {
//     Model: 'BMW',
//     colour: 'White'
// }
// Retrive // 
// console.log(vehile.Model)
// console.log(vehile['colour'])

// Update // 
// vehile.Model = 'Audi'
// vehile['colour'] = 'Red'
// console.log(vehile)

// add //
// vehile.insurance = 'yes'
// vehile['regNo'] = 1912
// console.log(vehile)

// Delete //
// delete vehile.insurance
// delete vehile['regNo']
// console.log(vehile)

//-------------------------------------------------------------------------//

// Array //

// let a = [11, 22, 33, 44, 55]
// for (let i = 0; i < a.length; i++) {
//     console.log(a)
//     console.log(a[i])
// }

// let student = {
//     firstName: 'Aman',
//     lastName: 'Jaiswal',
//     rollNo: 19,
//     age: 31
// }
// .notation does not work inside loop //
// for (let key in student) {
//     console.log(key, student[key])
// }

// let parent = {
//     father: 'Harish',
//     mother: 'Jayashree'
// }
// for (let key in parent) {
//     console.log(key, parent[key])
// }

//--------------------------------------------------------------------------//

// Logical Question //

// let student = {
//     fUllName: 'Aman Jaiswal',
//     rollNo: 19,
//     skills: ['javascript', 'cypress'],
//     parent: {
//         father: "Harish",
//         mother: 'Jayashree'
//     }
// }

// student.parent.mother = 'abc' // update //
// console.log(student)

// student.skills.push('Tpyescript') // add //
// console.log(student)

// delete student.rollNo // delete //
// console.log(student)

// prgogram 2 //

// let students1 = [
//     {
//         fullName: "Aman Jaiswal",
//         age: 31
//     },
//     {
//         fullName: "Sakshi",
//         age: 30
//     },
//     {
//         fullName: "Harish",
//         age: 65
//     }
// ]
// for (let i = 0; i < students1.length; i++) {
//     let obj = students1[i]
//     for (let key in obj)
//         console.log(key, obj[key])
// }

// for (let key in students1) {
//     console.log(key, students1[key])
// }

// ------------------------------------------------------------------------- //

// count 99 from this array //
// let num = [11, 22, 33, 99, 44, 55, 99, 66, 99, 77, 88, 99]
// let count = 0
// for (let i = 0; i < num.length; i++) {
//     if (num[i] === 99) {
//         count = count + 1
//     }
// }
// console.log(count)

// program 1b //

// count alpha from this //
// let words = ['b', 'o', 'o', 'k']
// let count1 = {}
// console.log(count1)

// for (let i = 0; i < words.length; i++) {
//     if (count1[words[i]]) {
//         (count1[words[i]]) = (count1[words[i]]) + 1
//     }
//     else {
//         count1[words[i]] = 1
//     }
// }
// console.log(count1)

// program 2 //

// print square of this //
// let numbers = {
//     a: 2,
//     b: 3,
//     c: 4
// }
// for (let key in numbers) {
//     numbers[key] = numbers[key] * numbers[key]
// }
// console.log(numbers)

// print cube of this //
// let numbers2 = {
//     a: 2,
//     b: 3,
//     c: 4
// }
// for (let key in numbers2) {
//     numbers2[key] = numbers2[key] * numbers2[key] * numbers2[key]
// }
// console.log(numbers2)

// let numbers3 = {
//     a: 2,
//     b: 3,
//     c: 4,
//     a: 5
// }
// for (let key in numbers3) {
//     numbers3[key] = numbers3[key] * numbers3[key]
// }
// console.log(numbers3)

// program 3 //

// find event & odd //
// let num1 = [11, 22, 33, 44, 55, 66, 77, 88, 99]
// let eventcount = 0
// let oddcount = 0
// for (let i = 0; i < num1.length; i++) {
//     if (num1[i] % 2 == 0) {
//         eventcount++
//     }
//     else {
//         oddcount++
//     }
// }
// console.log(eventcount)
// console.log(oddcount)


// for (let i = 0; i < num1.length; i++) {
//     num1[i] % 2 == 0 ? eventcount++ : oddcount++
// }
// console.log(eventcount)
// console.log(oddcount)


// let num2 = [11, 22, 33, 44, 55, 66, 77, 88, 99]
// let eventcount = num2.reduce(function (acc, el) {
//     let num2 = el % 2 === 0 ? 1 : 0
//     return acc + num2
// }, 0)
// console.log(eventcount)

// let oddcount = num2.reduce(function (acc, el) {
//     let num2 = el % 2 !== 0 ? 1 : 0
//     return acc + num2
// }, 0)
// console.log(oddcount)

// Program 3 //
// let pair = ['red', 'red', 'green', 'red', 'blue', 'blue', 'red', 'red']
// let result = {}
// for (let i = 0; i < pair.length; i++) {
//     if (result[pair[i]]) {
//         result[pair[i]] = result[pair[i]] + 1
//     }
//     else {
//         result[pair[i]] = 1
//     }
// }
// console.log(result)

// for (let key in result) {
//     result[key] = Math.floor(result[key] / 2)
// }
// console.log(result)

// find vowel //
// let city = 'Nagpur'
// count = 0
// for (let i = 0; i < city.length; i++) {
//     if(city[i] == 'a' || city[i] == 'e' || city[i] == 'i' || city[i] == 'o' || city[i] == 'u')
//         count = count + 1
//     }
// console.log(count)

// reverse string //

// let name = 'rajkamal'
// let rev = ''
// for (let i = 0; i < name.length; i++) {
//     rev = name[i] + rev
// }
// console.log(rev)

// let rev2 = ''
// for (let i = name.length - 1; i >= 0; i--) {
//     rev2 = rev2 + name[i]
// }
// console.log(rev2)

// find index of "aman" //
// let Names = ['Aman', 'Sakshi', 'Harish', 'Aman', 'Jayashree', 'Aman']
// for (let i = 0; i < Names.length; i++) {
//     if (Names[i] === 'Aman') {
//         console.log(i)
//     }
// }

// let a = Names.map(function (el, index) {
//     if (el === 'Aman') {
//         return index
//     }
// })
// console.log(a)

//  Names.forEach(function (el, index) {
//     if (el === "Aman") {
//         console.log(index)
//     }
// })


// find element those having 6 character //
let city = ['Nagpur', 'Pune', 'Mumbai', 'Delhi', 'Jaipur']
for (let i = 0; i < city.length; i++) {
    if (city[i].length == 6) {
        console.log(city[i])
    }
}

let aa = city.filter(function (el) {
    return el.length == 6
})
console.log(aa)





