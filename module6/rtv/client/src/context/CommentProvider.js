import React, {useState} from 'react'
import axios from 'axios'
export const CommentContext = React.createContext()



const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})


export default function CommentProvider(props) {

function addComment(newComment) {
    userAxios.post("/api/comment", newComment)
    .then(res => {
        setUserState(prevState => ({
            ...prevState,
            comments: [...prevState.issues, res.data]
        }))
    })
    .catch(err => console.log(err.response.data.errMsg))
}



return (
        <CommentContext.Provider
            value={{

                addComment
            }}>
            { props.children }
        </CommentContext.Provider>
    )
}