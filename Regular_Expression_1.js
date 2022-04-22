// let a = "I am Learning JavaScript JAVASCRIPT JAVAscript javaSCRIPT JaVaScRiPt"
// console.log(typeof a)

// let regOne = /JavaScript/gi
// let b = regOne.exec(a)
// console.log(b)

// let c = regOne.exec(a)
// console.log(c)

// let d = regOne.exec(a)
// console.log(d)

// let e = regOne.exec(a)
// console.log(e)

// let f = regOne.exec(a)
// console.log(f)

//-----------------------------------------------------------------//

// test() //
// If string match, it returns true, otherwise it returns false.

// let a = "I am Learning JavaScript JAVASCRIPT JAVAscript javaSCRIPT JaVaScRiPt"
// let regOne = /JavaScript/gi
// if (regOne.test(a)) {
//     console.log('pass')
// }
// else {
//     console.log('fail')
// }

//------------------------------------------------------------------//

// search() //
// matches a string against a regular expression returns the index of the first match returns.
// if no match found return -1 //

// let z = "I am Learning JavaScript JAVASCRIPT JAVAscript javaSCRIPT JaVaScRiPt"
// let regTwo = /JavaScipt/gi

// let as = z.search(regTwo)
// console.log(as)

//--------------------------------------------------------------------------------//

// replace //

// let x = "I am Learning JavaScript JAVASCRIPT JAVAscript javaSCRIPT JaVaScRiPt"
// let regThree = /JavaScript/gi
// let a = x.replace(regThree, "JS")
// console.log(a)

//---------------------------------------------------------------------//

// Metacharcters //
// ^ ---  matches any string with n at the beginning of it // 
// $ ---  matches any string with n at the end of it // 

// let asj = "apple a day keeps doctor away"
// regOne = /^Apple/gi
// regTwo = /away$/

// if (regOne.test(asj)) {
//     console.log('pass')
// }
// else {
//     console.log('fail')
// }

// if (regTwo.test(asj)) {
//     console.log('pass')
// }
// else {
//     console.log('fail')
// }

// . --- matches any character, except newline or other line terminators //

// let city = "nagpur"
// regThree = /.gp/

// if (regThree.test(city)) {
//     console.log('pass')
// }
// else {
//     console.log('fail')
// }

// * --- matches any string that contains zero or more occurrences of n //

// let vegetables = "Tomato"
// regFour = /to*/

// if (regFour.test(vegetables)) {
//     console.log('pass')
// }
// else {
//     console.log('fail')
// }

// ? --- matches any string that contains zero or one occurrences of n //

// let name = "aman"
// regFive = /a?ma?n/

// if (regFive.test(name)) {
//     console.log('pass')
// }
// else {
//     console.log('fail')
// }

//-----------------------------------------------------------------------//

// groups //

// [] --- specifies matches for the characters inside the brackets
// Brackets can define single characters, groups, or character spans //

// let aj = "laptop"
// let regSix = /l[a-za-z]p/
// console.log(regSix.test(aj))

// let sa = "laptop"
// let regSeven = /l[a-z][0-9]p/
// console.log(regSeven.test(sa))

// let jj = "laptop"
// let regEight = /l[a-z][0-9abc]p/
// console.log(regSeven.test(jj))

//------------------------------------------------------------------//

let x = "JavaScript JAVASCRIPT JAVAscript javaSCRIPT JaVaScRiPt"
let regOne = /JavaScript/gi
let a = "I am Learning JavaScript"
console.log(regOne.test(a))

let regTwo = /[abc][a-z][a][0-9mno]/
let y = "aman"
let test = regTwo.test(y)
console.log(test)

let regThree = /[ABC][CDE][DEF]/
let z = "GHJADEWSX"
let aa = regThree.test(z)
console.log(aa)

let regFour = /[A-Z][0-9][0-9]/
let b = "My name is AK47"
console.log(regFour.test(b))

let regFive = /[0-9abc][a][A-Za-z]/g
let c = "I can do it a1an"
console.log(c.match(regFive))
console.log(regFive.test(c))

let regSix = /[^a-z][a-z][0-9]/g
let d = "what is your jo b8 nam e1"
console.log(d.match(regSix))
console.log(regSix.test(d))

let regSeven = /^[a-z][xyz]/
let e = "my name is Ram"
console.log(regSeven.test(e))

let regEight = /[a-z][a-z]$/
let f = "my name is RAM"
console.log(regEight.test(f))

let regNine = /la*top/   // top
let g = "laptop"
console.log(regNine.test(g))











