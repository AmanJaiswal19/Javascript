//<p class ="para" id ="idpara" name ="nm">Paragraph</p>

// tagName

let a = document.querySelector('p')
console.log(a)

console.log(a.textContent)
// update
a.textContent = "Aman"
a.style.color = "orange"
a.style.height = "100px"
a.style.width = "100px"
a.style.background ="blue"

// object -->

// property 

// method --

// let h = [11,22,33]
// h.length

 // className
 // let b = document.querySelector('.para')
 // console.log(b)

 // id 
 // let c = document.querySelector('#idpara')
 // console.log(c)

 // generalFormula :- tagName[attribute=value]
// let p = document.querySelector('p[name="nm"]')
// console.log(p)






// // Object 

// let person = {

//     fullName:"chinmay deshpande",
//     age:12,
//     parents:{
//         father:"shirish",
//         mother:"kanchan"
//     },
//     skills:["python","java"],

//     style:{
//             color:{
//                 fe:"yellow",
//                 be:"red"
//             },

//             heigth:"100px"
//     }

//     ,
//     marks :[12,33,55]

// }
// // retrive

// person.style.color.fe = "green"
// console.log(person.parents.mother)
// console.log(person['parents']['father'])
// console.log(person.skills.length)

// person.parents.mother = "kanachan s"
// console.log(person)
// person.skills.push('javascript')
// console.log(person)

// person.city = ["nagpur","pune"]
// console.log(person)

// person.city.unshift("jaipur")
// console.log(person)
// console.log(person.city.length)

// // reduce


// let h = person.marks.reduce(function(acc,el){
//     return acc + el
// },0)

// console.log(h)







// console.log(person.fullName)
// console.log(person['fullName'])
// console.log(person.parents)
// console.log(person.skills)


