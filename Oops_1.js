// Oops
// Encapsulation
// Polymorphism
// Inheritance
// Abstraction

// object literal //
let Biodata = {
    Name: 'Aman',
    Surname: 'Jaiswal',
    age: 31,
    AadNo: 1912,
    display: function () {
        console.log(this.Name)
    }
}
Biodata.display()
console.log(Biodata.Surname)
console.log(Biodata.AadNo)

//----------------------------------------------------------------//

// using class //
class Person {
    constructer(nm, sn, ag) {
        this.Name = nm,
            this.Surname = sn,
            this.age = ag
    }
    display() {
        console.log(this.Name)
    }
}
let Details = new Person('Aman', 'Jaiswal', 31)
Details.display()
console.log(Details)

//------------------------------------------------------------------//

//function constructor //
let Details2 = function (nm, sn, ag) {
    this.nm = nm,
        this.sn = sn,
        this.ag = ag,
        this.display = function () {
            console.log(this.nm)
        }
}
let sakshi = new Details2('Sakshi', 'Jaiswal', 31)
let aman = new Details2('Aman', 'Jaiswal', 31)

//----------------------------------------------------------------//

// Prototype
// Every object in javascript has _proto_
// console.log(sakshi._proto_ === Details2.prototype)












