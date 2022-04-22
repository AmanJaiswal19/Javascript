let headOne = document.querySelector('h1')
let buttonOne = document.querySelector('button')
let inputText = document.querySelector('input')

// console.log(headOne)
// console.log(buttonOne)
// console.log(inputText)

// buttonOne.addEventListener('click',function(){
//     let colorC = inputText.value
//     headOne.style.color = colorC
// })


buttonOne.addEventListener('mouseover',function(){
    let colorC = inputText.value
    headOne.style.color = colorC
})

