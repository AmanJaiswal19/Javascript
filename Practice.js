// function addition(x, y) {
//     console.log(x + y)
//     return x + y
// }
// console.log(addition(12, 13))


// let addition2 = function (x, y) {
//     console.log(x + y)
//     return x + y
// }
// console.log(addition2(20, 20))


// let mul = (x, y) => {
//     console.log(x * y)
//     return x * y
// }
// let r = mul(5, 6)
// console.log(r)
// console.log(r + r)


// Comparison <, >, <=, >=, ==, != ,!== ,===

// console.log(6 < 8) //TRUE
// console.log(9 > 7) //TRUE
// console.log(9 == 9) //true
// console.log(5 <= 8)//true
// console.log(9 >= 2)//true
// console.log(7 != 8)//true
// console.log(9 !== 8)//true
// console.log(8 === 8)//true
// console.log('8' === 8)//false

// console.log(6 == '6') // only value check // true
// console.log(6 === '6') // Both value & type check // false


// logical-----AND OR NOT

// AND --- '&&'
// True  True = True
// True  False = False
// False  True = False
// False  False = False

// console.log(8 !== '8' && false)  // false
// console.log(5 === 5 && 7 != 7)  // false
// console.log(6 == '6' && !false)  // true


// OR --- '||'
// True  True = True
// True  False = True
// False  True = True
// False  False = False

// console.log(4 === 4 || 7 > 9)  // true
// console.log(5 * 2 < 10 || 7 >= 7) // true
// console.log(5 != '6' || 8 > 2)  // true


// NOT 
// console.log(!true)
// console.log(!false)


// Conditional Statement //

// no.ticket------- 5 === 5 %
// no.ticket------- 5 <> 10 === 10 %
// no.ticket------- 10 >=== 50 %

// numberofTickets = 5
// if (numberofTickets > 0 && numberofTickets <= 5) {
//     console.log('5% discount')
// }
// if (numberofTickets > 5 && numberofTickets <= 10) {
//     console.log('10% discount')
// }
// if (numberofTickets > 10) {
//     console.log('50% discount')
// }

// ***** //

numberofTickets = 10
if (numberofTickets > 0 && numberofTickets <= 5) {
    console.log('5% discount')
}
else if (numberofTickets > 5 && numberofTickets <= 10) {
    console.log('10% discount')
}
else if (numberofTickets > 10) {
    console.log('50% discount')
}









