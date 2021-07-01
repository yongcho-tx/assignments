import React, {Component} from "react"
import RandomColor from "./RandomColor"
import axios from "axios"


class ColorGen extends Component {

  state = {
      color: []
    }

    componentDidMount() {
      this.fetchColors()
    }

    fetchColors = () => {
      axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(res => {
        console.log(res)
        const colors = res.data.colors
        console.log(colors)
        this.setState({color: colors})
      })
      .catch(err => console.log(err))
    }

    handleClick = () => this.fetchColors()

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
