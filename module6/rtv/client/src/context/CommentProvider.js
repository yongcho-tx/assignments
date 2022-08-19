// import React, {useState } from 'react'
// import {userAxios} from './UserProvider'
// const CommentContext = React.createContext()




// function CommentProvider(props) {

//     const initComment = ""
//     const [comment, setComment] = useState(initComment)
//     const [comments, setComments] = useState([])

//     const { _id } = props


//     function addComment() {
//         userAxios.post(`/api/comment/${_id}`, {comment})
//         .then(res => {
//             setComments(prevComments => {
//                 return [...prevComments, res.data]
//             })
//         })
//         .catch(err => console.log(err.response.data.errMsg))
//     }




// return (
//         <CommentContext.Provider
//             value={{
//                 addComment,
//                 ...comment,
//                 setComment,
//                 setComments,
//                 ...comments
//             }}>
//             { props.children }
//         </CommentContext.Provider>
//     )
// }

// export { CommentContext, CommentProvider }