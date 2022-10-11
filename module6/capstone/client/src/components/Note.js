import axios from 'axios'
import { UserContext } from '../context/UserProvider.js'


function Note(props) {
    console.log("render")

    const { notes } = props

    return (
        <div>
            <h3> { notes } </h3>
        </div>
    )
}

export default Note