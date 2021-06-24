// const axios = require('axios');

// const { default: axios } = require("axios")

// const { default: axios } = require("axios")

// axios.get('https://api.vschool.io/yong_cho/todo/').then(response => console.log(response.data)).catch(error => console.log(error))
// https://unsplash.com/photos/EgL0EtzL0Wc

const todoForm = document.todoform

// todoForm.addEventListener('submit', (e) => {
//     e.preventDefault()

//     let newTodo = {
//         title: todoForm.title.value, // this one is the only thing that is actually required
//         description: todoForm.description.value,
//         imgUrl: todoForm.imgUrl.value
//     };


//     axios.post('https://api.vschool.io/yong_cho/todo/', newTodo)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))

// })

// axios.get("https://api.vschool.io/yong_cho/todo")
//     .then(response => {
//         response.data.forEach(item => {
//             const h1 = document.createElement('h1')
//             h1.textContent = item.title
//             document.body.appendChild(h1)

//         })
//     }).catch(error => console.log(error))

// const button = document.getElementById('delete-button')
// button.addEventListener('click', () => {
// axios.delete("https://api.vschool.io/yong_cho/todo/60a6b17dee6f8d3fc3fed936")
// .then(response => console.log(response))
// .catch(error => console.log(error))

// })


// ==========Update Data===========
// const updates = {
//     description: "Put Item 1"
// }
// axios.put("https://api.vschool.io/yong_cho/todo/60a6b186ee6f8d3fc3fed938", updates)
//     .then(res => console.log(res.data))
//     .catch(err => console.llg(err))

    // axios.get("https://api.vschool.io/yong_cho/todo/")
    // .then(response => console.log(response.data))
    // .catch(error => console.log(error))

