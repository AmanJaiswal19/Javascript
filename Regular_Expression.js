// String...//
// let Name = "Aman"
// let Name1 = 'Aman'
// let Name2 = `Aman`
// console.log(Name[0])
// console.log(Name1[0])
// console.log(Name2[0])

// let FullName = "Sakshi"
// FullName[0] = "A"
// FullName = "Aman"
// console.log(FullName)

// CharAt //

// FullName = "Aman"
// let a = FullName.charAt(2)
// console.log(a)  // a

// charCodeAt //

// FullName = "Aman"
// let b = FullName.charCodeAt(2)
// console.log(b)  // 97


// let statement = "I am new to Javascript"
// let countA = 0

// program 1 //

// for (let i = 0; i < statement.length; i++) {
//     if (statement[i] >= "A" && statement[i] <= "Z") {
//         countA = countA + 1
//     }
// }
// console.log(countA)


// program 2 //

// for (let i = 0; i < statement.length; i++) {
//     if (statement.charCodeAt(i) >= 65 && statement.charCodeAt(i) <= 90) {
//         countA = countA + 1
//     }
// }
// console.log(countA)


// program 3 //

// let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// number + number --- number
// number + string --- "string"
// string + number --- "string"
// string + string --- string 

// let a = "hello"
// let b = 10
// let c = 20
// console.log(a + b + c)   // "hello1020"
// console.log(b + c + a)   // "30hello"
// console.log(c + a + b)   // "20hello10"


// concatination //

// let FirstName = "Aman"
// let LastName = "Jaiswal"
// console.log("My FirstName is " + FirstName + " My LastName is " + LastName)
// console.log(`My FirstName is ${FirstName} and LastName is ${LastName}`)

// console.log(`${9 + 9}`)  // string return
// console.log(18)         // Number return

// let abc = "Aman belongs to the nagpur leaves in nagpur"
// let s = abc.replace('nagpur', 'pune')
// console.log(s)


// function replaceAll(sentence, word, replw) {
//     let arrayOne = sentence.split(' ')
//     console.log(arrayOne)
//     let as = arrayOne.map(function (el) {
//         if (el == word) {
//             return el = replw
//         }
//         else {
//             return el
//         }
//     })
//     console.log(as.join(' '))
// }
// replaceAll(abc, "nagpur", "pune")


// search //

// let as = "I am new to javascript"
// let jj = as.search("am")
// console.log(jj)

// let hh = as.search("new")
// console.log(hh)


// substring //

// let aj = "I am new to javascript"
// let ja = aj.substring(1, 5)
// console.log(ja)

// let sa = aj.substring(1)
// console.log(sa)


// slice and substring difference //

// let q = "A"
// let w = "Z"
// let r = "M"
// if (r >= q && r <= w) {
//     console.log("posible")
// }
// else {
//     console.log("not possible")
// }


// result = {}
// console.log(result['b'])

// if (undefined) {
//     console.log('hello')
// }
// else {
//     console.log('bye')
// }

//--------------------------------------------------------------------------//

// g --- global
// i --- sensetivecase

// let sentence = "I am aman I am new to javscript My fullname is aman jaiswal AMAN"
// let reg = /aman/gi
// let regA = /aman/i
// let aaa = reg.exec(sentence)
// let bbb = reg.exec(sentence)
// let ccc = reg.exec(sentence)
// let ddd = reg.exec(sentence)
// let eee = reg.exec(sentence)
// console.log(aaa)
// console.log(bbb)
// console.log(ccc)
// console.log(ddd)
// console.log(eee)

// let resultA = reg.exec(sentence)
// while (resultA) {
//     console.log(resultA)
//     resultA = reg.exec(sentence)
// }

// let hello = reg.test(sentence)
// console.log(hello)


// search , match , replace --- string //

// Search //
// returns the index of the first match.if not found returns -1 //

// let subjects = "Hindi Marathi English ENGLISH english ENGlish"
// let reg2 = /English/gi
// let z = subjects.search(reg2)
// console.log(z)

// Match //
// returns an array.returns null if no match is found //

// let y = subjects.match(reg2)
// console.log(y)

// Replace //
// rplace all the value in the string //

// let x = subjects.replace(reg2, "HINDI")
// console.log(x)


// let js = "I am learning javascript and I like javascript"
// let regExp = /javascript/gi
// let q = regExp.exec(js)
// console.log(q)

// let w = regExp.exec(js)
// console.log(w)

// let e = regExp.test(js)
// console.log(e)


// String --- Search, Match, Replace //

// let a = js.search(regExp)
// console.log(a)

// let s = js.match(regExp)
// console.log(s)

// let d = js.replace(regExp, "ABC")
// console.log(d)

//----------------------------------------------------//

let as = '0123456789'
let pattern = ""
for (let i = 0; i < as.length; i++) {
    if (as[i] != 5 && as[i] != 0) {
        pattern = pattern + String(10 - Number(as[i]))
        console.log(pattern)
    }
    else {
        val = Number(as[i]) === 0 ? 5 : 0
        pattern = pattern + val
    }
}
console.log(pattern)








































































