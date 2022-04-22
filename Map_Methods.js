// let aa = new String('laptop')
// let a = "laptop"
// console.log(aa)
// console.log(a)

// property //
// size --- Returns the number of elements in a Map //

// let map = new Map()
// console.log(map)
// console.log(map.size)

// method // 
// set --- Sets the value for a key in a Map //

// let a = new Map()
// a.set('Aman', 'Jaiswal')
// console.log(a)

// Boolean as a key //
// let b = new Map()
// b.set('true', 'he is married')
// console.log(b)

// number as a key //
// let c = new Map()
// c.set(19, 'aman')
// console.log(c)

// array as a key //
// let d = new Map()
// d.set(['pen', 'blue'], 'book')
// console.log(d)

// object as a key //
// let e = new Map()
// e.set({ name: 'Aman', surname: 'Jaiswal' }, 'details')
// console.log(e)

// get --- Gets the value for a key in a Map //

// let a = new Map()
// a.set('Aman', 'Jaiswal')
// console.log(a)
// console.log(a.get("Aman"))

// let b = new Map()
// b.set('true', 'he is married')
// console.log(b)

// let c = new Map()
// c.set(19, 'aman')
// console.log(c)
// console.log(c.get(19))

// let d = new Map()
// d.set(['pen', 'blue'], 'book')
// console.log(d)
// console.log(d.get(['pen', 'blue']))  ***error***

// let e = new Map()
// e.set({ name: 'Aman', surname: 'Jaiswal' }, 'details')
// console.log(e)
// console.log(e.get(name))   ***error***

// delete --- Removes a Map element specified by the key //

// map.set(1, 'first');
// map.set(2, 'second');
// console.log(map.delete(2))

// has --- Returns true if a key exists in a Map //

// let fruits=("apples","banana")
// fruits.delete("apples");
// fruits.has("apples");
// console.log(fruits)

//--------------------------------------------------------//

// Set //

let array = [12, 33, 44, 55, 66, 66]
console.log(array)

// new set --- remove duplite array //

setAB = new Set(array)
console.log(setAB)

console.log(Array.from(setAB))
let setA = new Set([22, 33, 44, 55, 22, 33, 44])
console.log(setA)

// add //

let setB = new Set([22, 33, 44, 55, 22, 33, 44])
console.log(setB.add(13))

// clear //

let setC = new Set([22, 33, 44, 55, 22, 33, 44])
setC.clear()
console.log(setC)






