
// const xhr = new XMLHttpRequest()
//         //method   //url                          //async?
// xhr.open("GET", 'https://api.vschool.io/pokemon', true)
// xhr.send()

// // xhr.onload = () => {
// //     console.log(`Data Loaded: ${xhr.status} ${xhr.response}`)
// // }




// xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4 && xhr.status === 200) {
//         const JSONdata = xhr.responseText
//         const data = JSON.parse(JSONdata)
//         console.log(data)
//         showData(data.objects[0].pokemon)
//     }
// }


// function showData(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         const h1 = document.createElement('h1')
//         const p = document.createElement('p')
//         h1.textContent = `Pokemon Name: ${arr[i].name}`
//         p.textContent = `Detail: ${arr[i].resource_uri}`
//         document.body.appendChild(h1)
//         document.body.appendChild(p)
//     }
  
// }

//fetch method
// fetch("https://api.vschool.io/pokemon")
//     .then(res => res.json())
//     .then(res => {
        
//         for(let i = 0; i < res.objects[0].pokemon.length; i++){
//             const h1 = document.createElement('h1')
//             h1.textContent = res.objects[0].pokemon[i].name
//             document.body.appendChild(h1)
//         }
        
//     })
//     .catch(err => console.log(err))

// const xhr = new XMLHttpRequest()

// xhr.open("GET", 'https://api.vschool.io/pokemon', true)
// xhr.send()

// xhr.onreadystatechange = () => {
//     if(xhr.readyState === 4 && xhr.status === 200) {
//         const jsonData = xhr.responseText
//         const data = JSON.parse(jsonData)
//         pokeList(data.objects[0].pokemon)
//     }
// }

// const pokeList = (arr) => {
//     arr.forEach(poke => {
       
//     const h1 = document.createElement('h1')
//     const p = document.createElement('p')
//     h1.textContent = `Pokemon Name: ${poke.name}`
//     p.textContent = `Pokemon Detail: ${poke.resource_uri}`
//     document.body.appendChild(h1)
//     document.body.appendChild(p)
    
//     })
// }



const poke = document.getElementById('poke')
const xhr = new XMLHttpRequest()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const jsonData = xhr.responseText
        const parsed = JSON.parse(jsonData)
        const pokemon = parsed.objects[0].pokemon
        pokemon.map(pok => poke.innerHTML += `<h1>Name ${pok.name}</h1> <p>Details ${pok.resource_uri}</p>`)
        console.log(pokemon)
    }
}

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()