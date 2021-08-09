import React, {useState, useEffect} from "react"
import axios from "axios"
const UglyContext = React.createContext()

const UglyContextProvider = props => {

const [uglyItem, setUglyItem] = useState([])
const [inputValues, setValues] = useState({
    title: "", 
    description: "",
    imgUrl: ""
})

    console.log("UglyContext is triggered")
    
    useEffect(() => {
        console.log("useEffect was called")
        getData()
    }, [])

    const getData = () => {
        axios.get("https://api.vschool.io/yong-cho/thing")
        .then(res => {
            console.log(res.data)
            setUglyItem(res.data.map(item => ({...item, isEdit: false})))
        })
        .catch(err => console.log(err))
    }

    const deleteUglyItem = (id, e) => {
        console.log("delete was clicked")
        console.log(e.target)
        axios.delete(`https://api.vschool.io/yong-cho/thing/${id}`)
        .then(res => {
            // getData()
            setUglyItem(prevThing => prevThing.filter(thing => thing._id !== id))
            console.log("res", res)
            })
        .catch(err => console.log(err))
    }

    const handleSubmit = e => {
        e.preventDefault()

        const newThing = {
            title: inputValues.title,
            description: inputValues.description,
            imgUrl: inputValues.imgUrl
        }
        axios.post(`https://api.vschool.io/yong-cho/thing/`, newThing)
        .then(res => {
            console.log(res.data)
            setUglyItem(prevPost => [...prevPost, res.data])

        })
        .catch(err => (console.log(err)))
        setValues({title:"", description: "", imgUrl: ""})
    }
 
    const handleChange = e => {
        const {name, value} = e.target
        setValues({...inputValues, [name]: value})
    }

    const toggleEdit = (id) => {
        let newArr = uglyItem.map(item => item._id === id ? {...item, isEdit: !item.isEdit} : item)
        return setUglyItem(newArr)
        
    }
    const editUgly = (id, e) => {
        e.preventDefault()
        axios.put(`https://api.vschool.io/yong-cho/thing/${id}`, {title: inputValues.title, description: inputValues.description})
        .then(res => {
            setUglyItem(prevThing => prevThing.map(thing => thing._id !== id ? thing : res.data))
            console.log("res", res)
        })
        .catch(err => console.log(err))
        setValues({title:"", description: "", imgUrl: ""})
    }

    return (
        <UglyContext.Provider value={{getData, deleteUglyItem, handleChange, handleSubmit, toggleEdit, editUgly, inputValues, uglyItem}}>
            {props.children}
        </UglyContext.Provider>
    )
}

export {UglyContext, UglyContextProvider}