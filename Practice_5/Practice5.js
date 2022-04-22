// console.log(Math.random()) // 0 to 0.9
// Math.random() * 6 // 0 to 5.99
// Math.floor(Math.random() * 6) // 0 to 5
// Math.floor(Math.random() * 6) + 1 // 1 to 6

// let randomNumber = Math.floor(Math.random() * 6 + 1)
// console.log(randomNumber)
// let userInput = prompt('Enter your number') // string

// if (userInput == randomNumber) {
//     console.log('your guess is correct')
// }
// else {
//     console.log('your guess is incorrect')
// }

//--------------------------------------------------------------------//

// Program 2 //

// let randomNumber2 = Math.floor(Math.random() * 6 + 1)
// console.log(randomNumber2)
// let userInput2;

// for (let i = 0; i < 3; i++) {
//     userInput2 = prompt('Enter Youe Number')
//     if (randomNumber2 == userInput2) {
//         console.log('your guess is correct')
//         break
//     }
// }

//-------------------------------------------------------------------//

// program 3 //

// let randomNumber3 = Math.floor(Math.random() * 6) + 1
// console.log(randomNumber3)
// let userInput3; // undefined

// while (randomNumber3 != userInput3) {
//     userInput3 = prompt('Enter your number between 1 to 6')
// }
// console.log('you guess the correct number')

//-----------------------------------------------------------------//

// Program 4 //

// let randomNumber4 = Math.floor(Math.random() * 6) + 1
// console.log(randomNumber4)
// let userInput4; // undefined
// let score = 0

// while (randomNumber4 != userInput4) {
//     userInput4 = prompt('enter your number betweeb 1 to 6')
//     score = score + 1
//     // score++
// }
// console.log('your gusse is correct ' + score + ' attempts')

//--------------------------------------------------------------------//

// Program 5 //

let randomNumber5 = Math.floor(Math.random() * 6) + 1
let userInput5;

while (true) {
    userInput5 = prompt('enter your number betweeb 1 to 6')
    if (userInput5 == randomNumber5) {
        console.log('your gusse is correct')
        break
    }
}





























