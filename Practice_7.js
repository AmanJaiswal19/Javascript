// Array

// let x = 10

// let numbers = [11, 22, 33, 44, , 55]
// Array store the value by index

// 0  1  2  3
// 11 22 33 44

// console.log(numbers[0])
// console.log(numbers[1])

// Program 2 //
//                0        1          2        3      4
// let names = ['Aman', 'sakshi', 'chinmay', 'Ram', 'Shyam']
// console.log(names[0])

// loop

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// 1st time loop i = 0
// 2nd time loop i = 1
// 3rd time loop i = 2
// 4th time loop i = 3
// 5th time loop i = 4
//     console.log(names[i])
// }

// Program 3 //

// object -- property & method

// Human
// property -- Height, weight, colour
// method -- walk(), talk(), slip()

// vehicle
// porperty -- model, colour, 
// method -- start(), stop()

// Bank
// property -- AccNo, AccName, AccType
// method -- Withdrawal(), deposite()

// everything in js is Object
// so array is also object
// if array is object then it will have property & method

//                 0         1        2         3
// let fruits = ['apple', 'mango', 'banana', 'grapes']
// property 
// let a = fruits.length
// console.log(a)

// method
// function -- objcet connected === method

// user defined function
// function addition(x, y) {
//     console.log(x + y)
//     return 'hello'
// }
// let b = addition(12, 13)
// console.log(b)

// method -- workout
// action -- weight lift
// action -- muscle gain

// let city = ['Nagpur', 'Pune', 'Mumbai', 'Goa']

// method -- Push()
// action -- add the element at last
// return -- new lenght of array

// let aa = city.push('Bhopal')
// console.log(city)
// console.log(aa)

// method -- unshift()
// action -- add the element at begning
// method -- new length of array

// let city2 = ['Nagpur', 'Pune', 'Mumbai', 'Goa', 'Bhopal']
// let bb = city2.unshift('kanpur')
// console.log(city2)
// console.log(bb)

// method -- pop()
// action -- remove the element from the last
// method -- return the same element

// let city3 = ['kanpur', 'Nagpur', 'Pune', 'Mumbai', 'Goa', 'Bhopal']
// let cc = city3.pop()
// console.log(city3)
// console.log(cc)

// method -- shift()
// action -- remove the element from first
// method -- return the same element

// let city4 = ['kanpur', 'Nagpur', 'Pune', 'Mumbai', 'Goa']
// let dd = city4.shift()
// console.log(city4)
// console.log(dd)

//--------------------------------------------------------------//

// let country = ['India', 'Japan', 'USA', 'China']

// method -- indexOf()
// action -- search the element
// return --  return the index if element found ,else it will return -1

// let ee = country.indexOf('India')
// console.log(country)
// console.log(ee)

// let ff = country.indexOf('india')
// console.log(country)
// console.log(ff)


// let country1 = ['India', 'Japan', 'USA', 'China']
// method includes()
// action -- serch the element
// return -- if the element found return true else return false

// let gg = country1.includes('Goa')
// console.log(gg)

//                   0         1        2      3
// let country1 = ['India', 'Japan', 'USA', 'China']
//                   -4        -3      -2      -1

// method -- slice()
// action -- divides the array based on index
// return -- array

// arrName.slice(startPosition, Endposition(not inclusive))
// let one = country1.slice(1, 3)
// console.log(one)

// let two = country1.slice(-3)
// console.log(two)

// let three = country1.slice(-4, 3)
// console.log(three)

// let four = country1.slice(-3, -1)
// console.log(four)

// let five = country1.slice(-1, -3)
// console.log(five)

//---------------------------------------------------------------------//

// map(), filter(), reduce(), forEach()

//                   0    1     2     3      4
// let birthYear = [2020, 2010, 2015, 2005, 2000]
// output[2,12,7,17,22]
// let calage = []
// for (let i = 0; i < birthYear.length; i++) {
//     let age = 2022 - birthYear[i]
//     calage.push(age)
// }
// console.log(calage)

// method -- map
// action -- work with every element of array
// return -- new array

// let ab = birthYear.map(function (el) {
//     return 2022 - el
// })
// console.log(ab)

// let number = [11, 22, 33, 44, 55]
// let ba = number.map(function (el) {
//     return el + 2
// })
// console.log(ba)

// let fewages = [44, 55, 66, 77, 88]
// let above60 = []
// for (let i = 0; i < fewages.length; i++) {
//     if (fewages[i] > 60) {
//         above60.push(fewages[i])
//     }
// }
// console.log(above60)

// method -- filter
// action -- filter out element based on condition
// return -- new array

// let ss = fewages.filter(function (el) {
//     return el > 60
// })
// console.log(ss)

// let marks = [11, 22, 33, 44, 55]
// let sum = 0
// for (let i = 0; i < marks.length; i++) {
//     sum = sum + marks[i]
// }
// console.log(sum)

// method -- reduce
// action -- add every element od array
// return -- single value

// let qq = marks.reduce(function (acc, el) {
//     return acc + el
// }, 0)
// console.log(qq)

// let names = ['aman', 'sakshi', 'chinmay', 'ram', 'shyam']
// for (let i = 0; i < names.length; i++) {
//     console.log('welcome' + names[i])
// }

// method -- forEach
// action -- works with every element of array
// return -- nothing

// let hh = names.forEach(function (el) {
//     console.log('welcome' + el)
// })

//---------------------------------------------------------------------//

// let abc = [11, 22, 33, 44]

// let mm = abc.map(el => el * 2)
// console.log(mm)

// let nn = abc.filter(el => el > 20)
// console.log(nn)

// let xx = abc.reduce((acc, el) => acc + el, 0)
// console.log(xx)

//------------------------------------------------------------------//

// map(), filter(), reduce(), forEach(), every(), some(), find(), findIndex()

// method -- every

let sum = [11, 22, 33, 44, 11, 22, 33, 44]
let hh = sum.every(function (el) {
    return el > 10

})
console.log(hh)

let sum1 = [11, 22, 33, 44, 11, 22, 33, 44]
let hh1 = sum1.every(function (el) {
    return el > 20

})
console.log(hh1)











































































































































