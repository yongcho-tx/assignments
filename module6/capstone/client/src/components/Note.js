import axios from 'axios'
import { DrugContext } from '../context/DrugProvider.js'


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