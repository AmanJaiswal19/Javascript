// map.......

// let birthyear = [2000, 1990, 1989]
// let u = birthyear.map(function (el, index, arr) {
//         return 2021 - el
//     })
// console.log(u)

// let aa = [11, 22, 33, 44, 55, 66, 77]
// let bb = aa.map(function (el, index, arr) {
//     return el + 2
// })
// console.log(bb)

// let number = [1, 2, 3, 4, 5]
// let c = number.map(function (el, index, arr) {
//         return el - 2
//     })
// console.log(c)

// let numbers = [11, 22, 33, 44, 55]
// let aa = numbers.map(function (el, index, arr) {
//         return el < 50
//     })
// console.log(aa)

// let numbers = [11, 22, 33, 44, 55]
// let aa = numbers.map(function (el, index, arr) {
//         return el > 50
//     })
// console.log(aa)


// filter.......

// let numbers = [11, 22, 33, 44, 55]
// let aa = numbers.filter(function (el, index, arr) {
//     return el > 50
// })
// console.log(aa)

// let numbers = [11, 22, 33, 44, 55]
// let aa = numbers.filter(function (el, index, arr) {
//     return el < 50
// })
// console.log(aa)

// let names = ["aman", "sakshi", "poorva", "amol", "ram"]
// let cc = names.filter(function (el, index, arr) {
//     return el.length == 6
// })
// console.log(cc)

// let transac = [22, 33, 44, -22, 23, 44, -400, 55, -500]
// let withdrawal = transac.filter(function (el) {
//     return el < 0
// })
// console.log(withdrawal)

// let transac = [22, 33, 44, -22, 23, 44, -400, 55, -500]
// let deposite = transac.filter(function (el) {
//     return el > 0
// })
// console.log(deposite)


// reduse.......

// let numbers = [11, 22, 33, 44, 55]
// let bb = numbers.reduce(function (acc, el, index, arr) {
//     return acc + el
// }, 0)
// console.log(bb)


// forEach.......

// let names = ["chinmay", "aman", "sakshi"]
// names.forEach(function (el, index, arr) {
//     console.log("welcome" + el + "!")
// })

// let names = ["chinmay", "aman", "sakshi"]
// names.forEach(function (el, index, arr) {
//     console.log("-" + el + "-")
// })


// find.......
// first occurance which matches the value.

// let numbers = [22, 33, 44, 55, 66, 77, 22, 33, 44, 55]
// let zz = numbers.find(function (el, index, arr) {
//     return el > 50
// })
// console.log(zz)

// let numbers = [22, 33, 44, 55, 66, 77, 22, 33, 44, 55]
// let zz = numbers.find(function (el, index, arr) {
//     return el < 50
// })
// console.log(zz)


// findIndex.......
// index of element which matches the value.


// let numbers = [22, 33, 44, 55, 66, 77, 22, 33, 44, 55]
// let zz = numbers.findIndex(function (el, index, arr) {
//     return el > 50
// })
// console.log(zz)

// let numbers = [22, 33, 44, 55, 66, 77, 22, 33, 44, 55]
// let zz = numbers.findIndex(function (el, index, arr) {
//     return el < 50
// })
// console.log(zz)


// every.......

// let numbers = [22, 33, 44, 55, 66, 77, 22, 33, 44, 55]
// let aaa = numbers.every(function (el, inde, arr) {
//     return el < 50
// })
// console.log(aaa)

// let numbers = [22, 33, 44, 55, 66, 77, 22, 33, 44, 55]
// let aaa = numbers.every(function (el, inde, arr) {
//     return el > 20
// })
// console.log(aaa)


// some.......
// boolean(eighter true or false)

// let numbers = [22, 33, 44, 55, 66, 77, 22, 33, 44, 55]
// let xx = numbers.some(function (el, index, arr) {
//     return el > 20
// })
// console.log(xx)


// let numberss = [22, 33, 44, 55, 66, 77, 22, 33, 44, 55]
// let xxx = numbers.some(function (el, index, arr) {
//     return el < 20
// })
// console.log(xxx)

// flat.......

// let n = [[1, 2, 3], [2, 3, 4,], [3, 4, 5]]
// let s = n.flat()
// console.log(s)

// let abc = [["aman", "shyam"], ["kisan", "amol"], ["ram", "raj"]]
// let ddd = abc.flat()
// console.log(ddd)

// sort.......

// let city = ["abhisha", "poorva", "bimal", "ram"]
// city.sort()
// console.log(city)

// let city1 = ["abhisha", "poorva", "bimal", "ram"]
// city1.sort().reverse()
// console.log(city1)

// join.......

// let ac = ["chinmay", "deshpande", "7709192441"]
// let ca = ac.join('/')
// console.log(ca)


// indexOf, push, pop, shift, unshift, includes, concat, reverse, foreach,
// filter, map, reduce, every, some, find, findindex, flat, join, sort

// slice.......
//                0   1   2   3   4   5   6   7
// let numbers = [11, 22, 33, 44, 55, 66, 77, 88]
//               -8   -7  -6  -5  -4  -3  -2  -1
// let h = numbers.slice(3)
// console.log(h)

// let a = numbers.slice(1, 5)
// console.log(a)

// let c = numbers.slice(2, 6)
// console.log(c)

// let d = numbers.slice(-5, 6)
// console.log(d)

// let e = numbers.slice(-7, -2)
// console.log(e)

// let f = numbers.slice(-2)
// console.log(f)

// let g = numbers.slice(-2, -7)
// console.log(g)


// fill.......

// let numbers = [11, 22, 33, 44, 55, 66, 77, 88]
// let x = numbers.fill("@", 1, 3)
// console.log(x)

// let numbers = [11, 22, 33, 44, 55, 66, 77, 88]
// let y = numbers.fill("@", 1)
// console.log(y)


// splice

// let aa = ["chinmay", "sarika", "poorva", "shraddha", "somya"]
// let bb = aa.splice(3, 2, "abhisha", "komal")
// console.log(bb)
// console.log(aa)


// pop()
// Remove the element from last
// Returns the element wich is removed

// push()
// Adds new element to the first
// Returns the element wich is add

// shift()
// Removes the first element from array
// Returns the element wich is remove

// unshift()

// indexOf()
// includes()
// reverse()
// sort()

// concat()
// join()

// forEach()
// map()
// filter()
// reduse()
// every()
// some()
// find()
// findindex()
// flat

// slice()
// fill()
// splice()









































