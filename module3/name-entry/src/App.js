import React, {Component} from "react"
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state ={
      name: "",
      namesList: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  handleChange(e) {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
    
  }
  handleSubmit(e) {
    e.preventDefault()
    console.log(e.target.name.value)
    this.setState(prevState => ({
         namesList: [...prevState.namesList, this.state.name]
      }))
    this.setState({
      name: ""
    })
  }
  render() {
    const namesListed = this.state.namesList.map(name=> <li>{name}</li>)
    return (
    <div>
        <form onSubmit={this.handleSubmit}>
          <input 
          type="text"
          value={this.state.name}
          name="name"
          placeholder="Name"
          onChange={this.handleChange}
          />
          <h1>{this.state.name}</h1>
          <button>Submit</button>
          <ol>
            {namesListed}
          </ol>
        </form>
    </div>
    )
  }

}

export default App;
