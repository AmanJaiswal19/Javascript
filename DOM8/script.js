// <li></li>
// <li>Chiku<l/i>
// ul.append()

let buttonA = document.querySelector('#one')
let ulA = document.querySelector('ul')
let inputA = document.querySelector('input')

console.log(buttonA)
console.log(ulA)
console.log(inputA)

buttonA.addEventListener('click', function () {
    let fruit = inputA.value // string - mango 
    let newFruit = document.createElement('li')// <li></li>
    newFruit.textContent = fruit  // <li>Chiku</li>
    ulA.appendChild(newFruit)
})

// button
// button Text
// button class and value
// button - append li