// string? //

// Array, Object, Conditional, Loops, Functions, Spread, Rest, destru, DOM //

// let name = "Aman"
// console.log(typeof name)

// let city = "Nagpur"
// 0 1 2 3 4 5 //
// N a g p u r //
// console.log(city[0])

// for (let i = 0; i < city.length; i++) {
//     console.log(city[i])
// }

// for (let i = city.length - 1; i >= 0; i--) {
//     console.log(city[i])
// }

// everything in js is object
// object having property & method


// property --- Lenght

// let fruits = "mango"
// let a = fruits.length
// console.log(a)

// let name = "Rajkamal"
// let b = name.length
// console.log(b)


// Method // 
// in method action and return type //

// toLower case() //

// let city1 = "Pune"
// let c = city1.toLowerCase()
// console.log(c)

// let name = "JAYASHREE"
// let d = name.toLowerCase()
// console.log(d)


// toLowerCase() // 

// let city2 = "nagpur"
// let s = city2.toUpperCase()
// console.log(s)


// chaining method //

// let vegitable = "potato"
// let abc = vegitable.toUpperCase().toLowerCase().length
// console.log(abc)


// indexOf() //

// let coutry = "India"
// let z = coutry.indexOf('i')
// console.log(z)

// let x = coutry.indexOf('A')
// console.log(x)


// includes() //

// let city3 = "Nagpur Pune Mumbai Goa Delhi"
// let userInput = "Goa"
// let f = city3.includes('Goa')
// console.log(f)

// let e = city3.includes('Raipur')
// console.log(e)

// if (city3.includes(userInput)) {
//     console.log('city is available')
// }
// else {
//     console.log('city is not available')
// }

// if (city3.indexOf(userInput) >= 0) {
//     console.log('city is available')
// }
// else {
//     console.log('city is not available')
// }


// trimStart() //

// let state = " Goa"
// 0 1 2
// G o a
// console.log(state.length)
// let w = state.trimStart()
// console.log(w.length)
// console.log(w)


// trimEnd() //

// let state = "Goa "
// console.log(state.length)
// let h = state.trimEnd()
// console.log(h.length)
// console.log(h)


// trim() //

// let state = " Goa "
// console.log(state.length)
// let g = state.trim()
// console.log(g.length)
// console.log(g)

//--------------------------------------------------//

let city = "Nag pur"
let rev = ""

// for (let i = 0; i < city.length; i++) {
//     console.log(city[i])

//     if (city[i] !== " ") {
//         rev = rev + city[i]

// "" + p      // p
// p  + u      // pu
//     }
// }
// console.log(rev)


// for (let i = 0; i < city.length; i++) {
//     console.log(city[i])
//     if (city[i] !== " ") {
//         rev = city[i] + rev

//  p    + " " //==> p
//  u    +  p  // up
//  n     + up // nup
//  e     + nup // enup
//     }
// }
// console.log(rev)

// let k = "I am new to javascript"
// let kk = k.split(" ")
// console.log(kk)
// console.log(kk.join(" "))

// let name = "Rajkamal"
// let ab = name.split("a")
// console.log(ab)
// console.log(ab.join("a"))

//------------------------------------------------------//

let abc = "I am new to js".toLowerCase()
let count = 0
// print a, e, i, o, u
// for (let i = 0; i < abc.length; i++) {
//     if (abc[i] == "a" || abc[i] == "e" || abc[i] == "i" || abc[i] == "o" || abc[i] == "u") {
//         count = count + 1
//     }
// }
// console.log(count)

//------------------------------------------------------//

// for (let i = 0; i < abc.length; i++) {
//     switch (abc[i]) {
//         case "o":
//         case "O":
//         case "e":
//         case "E":
//         case "U":
//         case "u":
//         case "i":
//         case "I":
//         case "a":
//         case "A":
//             count += 1
//             break
//     }
// }
// console.log(count)

//---------------------------------------------//

// let a = "rajkamalinout"
// let s = {}
// for (let i = 0; i < a.length; i++) {
//     if (a[i] == "a" || a[i] == "e" || a[i] == "i" || a[i] == "o" || a[i] == "u") {
//         if (s[a[i]]) {
//             s[a[i]] = Number(s[a[i]]) + 1
//         }
//         else {
//             s[a[i]] = 1
//         }
//     }
// }
// console.log(s)

//---------------------------------------------------//

// let j = "atmosphere"
// let obj = {}
// for (let i = 0; i < j.length; i++) {
//     // console.log(i)
//     if (j[i] == "a" || j[i] == "e" || j[i] == "i" || j[i] == "o" || j[i] == "u") {
//         if (obj[j[i]]) {
//             obj[j[i]] = obj[j[i]] + 1
//         }
//         else {
//             obj[j[i]] = 1
//         }
//     }
// }
// console.log(obj)

//----------------------------------------------------//

// let j = "atmosphere"
// let as = j.split("").filter(function (el) {
//     return el == "a" || el == "e" || el == "i" || el == "o" || el == "u"
// })
// console.log(as)

//-------------------------------------------------//

// slice method //

// let month = "january"
// 0 1 2 3 4 5 6 
// j a n u a r y
//-7-6-5-4-3-2-1
// console.log(month.slice(1, 4))
// console.log(month.slice(1))
// console.log(month.slice(-3))
// console.log(month.slice(2, -3))
// console.log(month.slice(-5, -1))
// console.log(month.slice(-3, -5))

//----------------------------------------------//

let aj = "4a3b2c1d"
// print aaaabbbccd //
let result = ""
// console.log(Number("4"))  //"4" --- 4
// console.log(Number('i'))  // NaN
for (let i = 0; i < aj.length; i++) {
    if (Number(aj[i])) {
        result = result + aj[i + 1].repeat(Number(aj[i]))
    }
}
console.log(result)

//----------------------------------------------//

for (let i = 0; i < aj.length; i++) {
    if (Number(aj[i])) {
        for (let j = 0; j < Number(aj[i]); j++) {
            result = result + aj[i + 1]
        }
    }
}
console.log(result)











































































