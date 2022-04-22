/* <h1 class="one" id="two" name="nm" archit="as">HeadingOne</h1>


<button>Change Color</button> */

let headingTag = document.querySelector('h1')
let headinngClass = document.querySelector('.one')
let headingId = document.querySelector('#two')
let headAttr = document.querySelector('h1[name="nm"]')
let buttonOne = document.querySelector('button')
console.log(buttonOne)

// tagName[attribute = "value"]
// console.log(headingTag)
// console.log(headinngClass)
// console.log(headingId)
// console.log(headAttr)
// console.log(headingTag.textContent)
//headingId.textContent = "Aman" 

document.write("<h2>HeadingTwo</h2>")
buttonOne.addEventListener('click', function () {
    headingId.textContent = "Aman"
    headingId.style.color = "purple"
    headingId.style.backgroundColor = "yellow"
})


// javascript


// we can create element
// we can update element ---(text change)
// we delete element 
// we can retrive element (tagName, class , id , attribute)
// we can change html element text 
// we update , add m retrive, delete attribute of html element

let person2 = {
    fullName: "chinmay deshpabde",
    age: 12,
    parent: {
        father: "shirish",
        mother: "kanchan"
    },
    skills: [
        {
            python: "python3"
        },
        {
            javascript: "Es6"
        },
        {
            operatingSytem: {
                macos: "serria",
                windows: "11"
                // linux:12
            }
        }
    ]

}

person2.parent.mother = "nandini"
person2.skills[2].operatingSytem.linux = 12
person2.skills[1].javascript = "ES2017"
person2.skills[2].operatingSytem.windows = 12
console.log(person2)
console.log(person2)


// let person = {
//     age:12
// }

// person.age = 13
// console.log(person.age)
// delete person.age
// person['city'] = "pune"