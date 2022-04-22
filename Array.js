// let h = 10
// console.log(h)
// console.log(typeof h)

// Every object --- property and methods //
// And Evert Methods --- action and return type //

//                0       1       2
// let names = ["amol", "ram", "shyam"]
// console.log(names)
// console.log(names[0])

// let numbers = [1, 2, 3, 4, 5, 6]
// console.log(numbers)

// let person = ["chinmay", 34, true, [44, 66, 77]]  //multi dimensional array//
// console.log(person)

// let fruits = ["apple", "mango", "banana"]
// console.log = (fruits[0])

// object  - methods and property//
// let a = fruits.length
// console.log(a)
// console.log(typeof a)


// Methods.....//

// Push().................//
// action - add the element in the last//
// return - new length of array//

// let flowers = ["lily", "rose", "sunflower"]
// let k = flowers.push("jasmine")
// console.log(k)
// console.log(flowers)

// let citys = ["nagpur", "pune", "mumbai"]
// let a = citys.push("delhi")
// console.log(a)
// console.log(citys)

// let colours = ["red", "orange", "pink"]
// let b = colours.push("white")
// console.log(b)
// console.log(colours)


// pop().................//
// action - remove the element in the last //
// return - element wich is remove //

// let flowers = ["lily", "rose", "sunflower", "jasmine"]
// let k = flowers.pop()
// console.log(k)
// console.log(flowers)

// let colours = ["red", "orange", "pink","white"]
// let b = colours.pop()
// console.log(b)
// console.log(colours)

// let citys = ["nagpur", "pune", "munbai"]
// let a = citys.pop()
// console.log(a)
// console.log(citys)


// Shify()...........//
// action - remove first element from the begning //
// return - element which is remove //

// let flowers = ["lily", "rose", "sunflower", "jasmine"]
// let k = flowers.shift()
// console.log(k)
// console.log(flowers)

//let colours = ["red", "orange", "pink", "white"]
//let b = colours.shift()
//console.log(b)
//console.log(colours)

//let citys = ["nagpur", "pune", "munbai", "delhi"]
//let a = citys.shift()
//console.log(a)
//console.log(citys)


// Unshift().............//
// action - add element in the begning //
// return - new length of array //

// let flowers = ["lily", "rose", "sunflower", "jasmine"]
// let k = flowers.unshift("redrose")
// console.log(k)
// console.log(flowers)

// let colours = ["red", "orange", "pink", "white"]
// let b = colours.unshift("grey")
// console.log(b)
// console.log(colours)

// let citys = ["nagpur", "pune", "munbai", "delhi"]
// let a = citys.unshift("goa")
// console.log(a)
// console.log(citys)


// push() - add element in last & return new lenght of array
// Pop() - remove last element & return same element wich is removed
// shify() - remove first element & return same element wich is removed
// unsify()- add first element & return new length of array


// IndexOf().......
//                0   1   2    3    4
// let numbers = [11, 22, 33, 44, "aman"]
// let aaa = numbers.indexOf("Aman")
// console.log(aaa)

// let bbb = numbers.indexOf(22)
// console.log(bbb)

// action -search the element & return its index number
// data return number if the element is not found it return -1


// includes().......
// action - search the element & return boolean if elements is found true elese false

// let ccc = numbers.includes("aman")
// console.log(ccc)

// let ddd = numbers.includes(55)
// console.log(ddd)


// reverse().......
// let abc = numbers.reverse()
// console.log(abc)


// concat().......
// action - joins the two array

// let y = [222, 333]
// let z = [444, 555]
// let x = z.concat(y)
// console.log(x)

// let w = y.concat(z)
// console.log(w)


//.......................................................//

// pogram 1.....

// let birthyear = [2000, 2004, 1990]
// let ages = [] //21,17,31
// for (let i = 0; i < 3; i++) {    //1 2 3
//     console.log(birthyear[i])
//     let age = 2021 - birthyear[i]  //31
//     console.log(age)
//     ages.push(age)
// }
// console.log(ages)

// let birthyear = [2000, 2002, 2004, 2006, 2008]
// let ages = []   //...(21,19,17,15,13)
// for (let i = 0; i < 5; i++) {
//     //console.log(birthyear[i])   //...(2000,2002,2004,2006,2008)
//     let age = 2021 - birthyear[i]
//     // console.log(age)   //...(21,19,17,15,13)
//     ages.push(age)
// }
// console.log(ages)


// pogram 2.....
// let numbers = [34, 55, 77, 23, 28]
// let above50=[]
// for (let i = 0; i < 5; i++) {
//     if(numbers[i]>50)
//    above50.push(numbers[i])
// }
// console.log(above50)

// let number = [11, 22, 33, 44, 55]
// let below30 = []
// for (let i = 0; i < 5; i++) {
//     if (number[i] < 30)
//         below30.push(number[i])
// }
// console.log(below30)


// pogram 3.....

// let u = [3, 4, 5]
// let sum = 0
// for (let i = 0; i < 3; i++) {
//     sum = sum + u[i]
// }
// console.log(sum)









