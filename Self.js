// let a = 2
// const b = 4
// var c = 6
// console.log(a + b + c)

// let variable is block scope
// It can be updated but cannot be re-declared into the scope.

// const variable is block scope
// It cannot be updated or re-declared into the scope.

// var variable is functional scope.
// It can be updated and re-declared into the scope.

// let s = 5 + "9"
// console.log(s)

// let x = 10
// let y = "20"
// console.log(x + y)

//-------------------------------------------------------------------//

// iterview coding quetion //

// let arr = [1, 2, 4, 5]
// target elemnt is = 5
// find the index of elements whose 
// sum is = 5 in the given array

//--------------------------------------------------------------------//

// let a = 'wednsday is good day'
// Make it like b='yadsndew si doog yad'

// let b = ''
// for (let i = 0; i <= a.length - 1; i++) {
//     b = a[i] + b
// }
// console.log(b)

// let c = b.split(' ')
// console.log(c)

// let d = c.reverse()
// console.log(d)
// console.log(d.join(' '))

//----------------------------------------------------------------------//

// Find Remainder of a no. Without using '%'

//---------------------------------------------------------------------//

// print Array?
// let num = [11, 22, 33, 44, 55]
// console.log(num)

//----------------------------------------------------------------------//

// loop ?
// let city = ['Nagpur', 'Pune', 'Mumbai', 'Delhi']
// for (let i = 0; i < city.length; i++) {
//     console.log(city[i])
// }

//----------------------------------------------------------------------//

// riverse loop?
// let city2 = ['Nagpur', 'Pune', 'Mumbai', 'Delhi']
// for (let i = city2.length - 1; i >= 0; i--) {
//     console.log(city2[i])
//     console.log(i)
// }
//---------------------------------------------------------------------//

// loop in object //

// let details = {
//     name: 'Aman',
//     city: 'Nagpur',
//     rollNo: 19,
//     skills: ['C++', 'JS']
// }
// for (let key in details) {
//     console.log(key, details[key])
// }

//----------------------------------------------------------------------//

// let details = {
//     name: 'Aman',
//     city: 'Nagpur',
//     rollNo: 19,
//     skills: ['C++', 'JS']
// }
// Retrive
// console.log(details.name)
// console.log(details['city'])

// Add
// details.lang = 'Hindi'
// details['age'] = 19
// console.log(details)

// Update
// details.rollNo = 23
// details['name'] = 'saskhi'
// console.log(details)

// Delete
// delete details.city
// delete details['rollNo']
// console.log(details)

//-----------------------------------------------------------------------//

// print even or odd num?
// for (let i = 1; i <= 20; i++) {
//     if (i % 2) {
//         console.log(i,'num is even')
//     }
//     else {
//         console.log(i,'num is odd')
//     }
// }

//-----------------------------------------------------------//

// let obj = {
//     name: "Aman",
//     rollNo: 19,
//     skill: ['JS', 'Pyathon']
// }
// obj.skill.push('C++')
// console.log(obj)

// let obj1 = [{
//     aadharNo: 123,
//     rollNo: 23
// },
// {
//     aadharNo: 123,
//     rollNo: 23
// }]
// obj1[0].lang = 'hindi'
// obj1[1].lang = 'hindi'
// console.log(obj1)

//----------------------------------------------------------//

// obj literal

// let details = {
//     name: 'Aman',
//     age: 31,
//     city: 'Nagpur',
//     display: function () {
//         console.log(this.name)
//     }
// }
// details.display()

//-----------------------------------------------------------//

// obj by class

// class Person {
//     constructor(name, age, city) {
//         this.name = name
//         this.age = age
//         this.city = city
//     }
//     display() {
//         console.log(this.name)
//     }
// }
// let Delails = new Person('Aman', 31, 'Nagpur')
// Delails.display()
// console.log(Delails)

//-----------------------------------------------------------------//

// obj by function constructor

// let Obj = function (name, age, city) {
//     this.name = name,
//         this.age = age,
//         this.city = city;
//     this.display = function () {
//         console.log(this.name)
//     }
// }
// let aman = new Obj('Aman', 31, 'Nagpur')
// console.log(aman)

//-----------------------------------------------------------//

// Quetion: - We have 11 no.in input like
// input: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110
// we need in output : 110, 10, 100, 20, 90, 30, 80, 40, 70, 50, 60


// let arrInput = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110]

// let arrOut = []

// let kk = (Math.ceil(arrInput.length / 2))
// console.log(kk)

// let i = 0;
// while (i < kk) {
//     arrOut.push(arrInput.pop());
//     arrOut.push(arrInput[i]);
//     i++;
// }
// console.log(arrOut)

// if (kk % 2 == 0) {
//     arrOut.pop();
//     console.log(arrOut);
// } else {
//     console.log(arrOut);
// }
// [110, 10, 100, 20, 90, 30, 80,  40, 70, 50, 60]

//-------------------------------------------------------------//

// 1.Reversal of String. 

// let colours = ['Red', 'Blue', 'Green', 'Pink', 'Yellow']
// for (let aa = colours.length - 1; aa >= 0; aa--) {
//     console.log(colours[aa])
// }

//----------------------------------------------------------//

// 2.Reverse each word of a string

// let name = 'Rajkamal'
// for (let bb = name.length - 1; bb >= 0; bb--) {
//     console.log(name[bb])
// }

//-------------------------------------------------------------//

// 3.String palindrome   ***Not

// function palindrome(str) {
//     var len = str.length;
//     var mid = Math.floor(len/2);
//     for ( var i = 0; i < mid; i++ ) {
//       if (str[i] !== str[len - 1 - i])

// let car = 'Audi'
// let len = car.length
// console.log(len)

// let as = Math.floor(len / 2)
// console.log(as)

// for (let i = 0; i < as; i++) {
//     if (car[i] !== car[len - 1 - i])
//         console.log(car[i])
// }

// let names = 'rajkamal'
// let nm = names.length
// console.log(nm)

// let aj = Math.floor(nm / 2)
// console.log(aj)

//---------------------------------------------------//

// 4.Duplicate elements in an array

// let arr = [11, 22, 33, 11, 44, 55, 22, 66, 33]
// let ss = arr.filter(function (el, index) {
//     return arr.indexOf(el) == index
// })
// console.log(ss)

// let names = ['Ram', 'Shyam', 'Ram', 'Ajay', 'Vijay', 'Shyam']
// let nm = names.filter(function (el, index) {
//     return names.indexOf(el) == index
// })
// console.log(nm)

//------------------------------------------------------//

// 5. Second largest element in an array

// let names = ['Aman', 'Sakshi', 'Shikha', 'Ashish']



// 6. Anagram program
// 7. Find missing number in an array
// 8. Find the first repeated character in the given string
// 9. Easy Star pattern programs
// 10. Reverse string with preserving position of spaces
// 11. Segregate binary 0 and 1 array
// 12. Matrix multiplication in java
// 13. Swap two numbers with out using third variable
// 14. Armstrong number
// 15. Factorial program
// 16. Palindrome number
// 17. Fibonacci series
// 18. Prime numbers


// Que in mindtrees
// 1. framework of cypress
// 2. what is the use of this or why we use 
// 3. how you handle excection in cypress
// 4. print riverse String
// 5. how you join "wel come"

let s = 'welcome to the mindtree'
for(let i=s.length-1;i>=0;i--){
    console.log(s)
}

let s = "well come to meindtree"
for(let i=s.length-1;i>=0;i--){
  console.log(s)
}

let s ="well come"

s.bind











































