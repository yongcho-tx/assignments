
// Gets the Todo's from the DB
function getData() {
    axios.get("https://api.vschool.io/yong_cho/todo")
    .then(res => listData(res.data))
    .catch(err => console.log(err))
}


// Lists the Todo Titles to the Dom

function listData(data) {

    clearList()

    data.forEach(item => {
        
        const id = item._id
        const todoList = document.querySelector('.todolist')
        const h2 = document.createElement('h2')
        h2.textContent = item.title
        todoList.appendChild(h2)
    
        if(item.imgUrl !== null && item.imgUrl !== undefined) {
            const img = document.createElement('img')
            img.src = item.imgUrl
            todoList.appendChild(img)
        }

        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.style.transform = "scale(2)"
        checkbox.style.marginLeft = "2em"
        checkbox.style.marginRight = "2em"
        todoList.appendChild(checkbox)

        checkbox.addEventListener('change', (e) => {
            e.preventDefault()
                if(checkbox.checked) {

                    h2.style.textDecoration = 'line-through'
                    const updates = {completed: true } 
                
        axios.put('https://api.vschool.io/yong_cho/todo'+id, updates)
            .then(res => console.log(res))
            .catch(err => console.log(err))
                } else {
                   h2.style.textDecoration = 'none'
                   
                   const updatesTwo = {
                       completed: false
                   }

        axios.put('https://api.vschool.io/yong_cho/todo'+id, updatesTwo)
            .then(res => console.log(res))
            .catch(err => console.log(err))     
                }     
        })
    
        const button = document.createElement('button')
        button.textContent = 'Delete'
        button.style.transform = "scale(1.2)"
        todoList.appendChild(button)
        button.addEventListener('click', (e) => {
            e.preventDefault()
            axios.delete('https://api.vschool.io/yong_cho/todo/'+id)
                .then(res => getData())
                .catch(err => console.log(err))
        })

     })
}

// Clears re-populated list
function clearList() {
    const el = document.querySelector('.todolist')
    while(el.firstChild) {
        el.removeChild(el.firstChild)
    }
}

getData()

const todoForm = document["todos"]

// Post data into DB
todoForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }

    todoForm.title.value = ""
    todoForm.price.value = ""
    todoForm.description.value = ""
    todoForm.imgUrl.value = ""
    
    axios.post('https://api.vschool.io/yong_cho/todo', newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
})