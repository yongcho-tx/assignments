import React, {Component} from "react"
import RandomColor from "./RandomColor"
import axios from "axios"


class ColorGen extends Component {
  constructor() {
    super()
    this.state = {
      color: [],
    }
    this.handleClick = this.handleClick.bind(this)
  }

    componentDidMount() {
      axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(res => res.data)
      .then(data => {
        this.setState({
          color: data.colors
        })
      })
      .catch(err => console.log(err))
    }
    handleClick() {
      axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(res => res.data)
      .then(data => {
        this.setState({ 
          color: data.colors
      })
    })
  }
  render() {
    const {color} = this.state
    const randomColorComponent = color.map(col => <RandomColor key={col.id} ranColors={col}/>)
    return (
      <div>
        {randomColorComponent}
        <button onClick={this.handleClick}>Change Color</button>
      </div>
    )
  }
}

export default ColorGen
