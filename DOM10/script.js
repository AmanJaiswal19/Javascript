let ulList = document.querySelector('ul')
let button = document.querySelector('#one')
let inputtext = document.querySelector('input')

button.addEventListener('click', function () {
    let text = inputtext.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = text //<li>Chiku</li>
    CreateButton(newLi)
    ulList.appendChild(newLi)
})

ulList.addEventListener('click', function (event) {
    if (event.target.tagName == "BUTTON") {
        if (event.target.classList == "remove") {
            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }
        if (event.target.classList == "up") {
            let li = event.target.parentElement
            let prevLI = li.previousElementSibling
            let ul = prevLI.parentElement

            if (prevLI) {
                ul.insertBefore(li, prevLI)

            }
        }
        if (event.target.classList == "down") {
            let li = event.target.parentElement
            let nextLI = li.nextElementSibling
            let ul = nextLI.parentElement

            if (nextLI) {
                ul.insertBefore(nextLI, li)
            }

        }
    }

})

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

