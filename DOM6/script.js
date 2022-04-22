// selecting the element by
// tagName 
// class 
// id 
// tagName[attribute='value']

// single -- document.quertySelector('li')
// multiple - doucment.quertSelectorAll('li')

let firstLi = document.querySelector('li') 
let listLi = document.querySelectorAll('li')
let buttonOne = document.querySelector('button')
console.log(firstLi)
console.log(listLi)
console.log(buttonOne)

buttonOne.addEventListener('click', () => {

    for (let i = 0; i < listLi.length; i++) {
        //ab[i].style.color = "green"
        if (i % 2 == 0) {
            listLi[i].style.color = "green"
        }
        else {
            listLi[i].style.color = "red"
        }
    }
})
