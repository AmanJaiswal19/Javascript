let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let addButton = document.querySelector('#one')

// Info
// let fruits  = ["Mango","Banana","Grapes"]
// for(let i = 0 ; i < fruits.length ;i++){
//     createli(ulList,fruits[i])
// }

let liList = document.querySelectorAll('li') // [li,li,li]
for (let i = 0; i < liList.length; i++) {
    CreateButton(liList[i])
}

addButton.addEventListener('click', function () {
    let a = inputText.value
    let li = document.createElement('li') // <li></li>
    li.textContent = a // <li>Mango</li>
    CreateButton(li)
    ulList.appendChild(li)
    inputText.value = " "
})

/* <button class ="remove">Remove</button>
 <button class ="up">Up</button>
 <button class ="down">down</button> */

// Info
//  function createli(ul,text){
//      let li = document.createElement('li') // <li></li>
//      li.textContent = text  // <li>Text</li>
//      ul.appendChild(li)
//  }

function CreateButton(li) {
    let remove = document.createElement('button') //<button></button>
    remove.textContent = "Remove" ////<button>Remove</button>
    remove.classList = "remove" //<button class = "remove">Remove</button>
    li.appendChild(remove)

    let up = document.createElement('button') //<button></button>
    up.textContent = "Up"////<button>up</button>
    up.classList = "up" //<button class = "up">Up</button>
    li.appendChild(up)

    let down = document.createElement('button')
    down.textContent = "Down"
    down.classList = "down"
    li.appendChild(down)
}