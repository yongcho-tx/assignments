import React, {Component} from "react"
import Square from "./Square"
import "../styles.css"

const whiteArr =  ["white", "white", "white", "white"]
const blackArr = ["black", "black", "black", "black"]

class Buttons extends Component {
    constructor() {
        super()
        this.state = {
            colors: whiteArr
        }
        this.smallColor = this.smallColor.bind(this)
        this.partyColor = this.partyColor.bind(this)
        this.leftBlue = this.leftBlue.bind(this)
        this.rightBlue = this.rightBlue.bind(this)
        this.bigDJOne = this.bigDJOne.bind(this)
        this.bigDJTwo = this.bigDJTwo.bind(this)
        this.bigDJThree = this.bigDJThree.bind(this)
        this.bigDJFour = this.bigDJFour.bind(this)
    }
    componentDidUpdate() {
        console.log(`State:  [${this.state.colors[0]}, ${this.state.colors[1]}, ${this.state.colors[2]}, ${this.state.colors[3]}]`)
    }
    smallColor = () => {
        this.setState(this.state.colors[0] === "white"
            ? {colors: [...blackArr]}
            : {colors: [...whiteArr]}
        )
    }
    partyColor = () => { 
        this.setState({
            colors: [this.state.colors[0], this.state.colors[1], "purple", "purple"]
        })
    }
    leftBlue = () => {
        this.setState({
            colors: [this.state.colors[0], this.state.colors[1], "blue", this.state.colors[3]]
    })
    }
    rightBlue = () => {
        this.setState({
            colors: [this.state.colors[0], this.state.colors[1], this.state.colors[2], "blue"]
    })
    }
    bigDJOne = () => {
        this.setState({
            colors: ["green", this.state.colors[1], this.state.colors[2], this.state.colors[3]]
        })
    }
    bigDJTwo = () => {
        this.setState({
            colors: [this.state.colors[0], "red", this.state.colors[2], this.state.colors[3]]
        })
    }
    bigDJThree = () => {
        this.setState({
            colors: [this.state.colors[0], this.state.colors[1], "gray", this.state.colors[3]]
        })
    }
    bigDJFour = () => {
        this.setState({
            colors: [this.state.colors[0], this.state.colors[1], this.state.colors[2], "aqua"]
        })
    }
  
    render() {
        const squares = this.state.colors.map(color => <Square key={Math.random() * this.state.colors.length} color={color}/>)
        return (
            <div className="dj-squares">
                {squares}
                <button onClick={this.smallColor}>DJ Small</button>
                <button onClick={this.partyColor}>Party DJ</button>
                <button onClick={this.leftBlue}>Left Blue</button>
                <button onClick={this.rightBlue}>Right Blue</button>
                <button onClick={this.bigDJOne}>Big DJ One</button>
                <button onClick={this.bigDJTwo}>Big DJ Two</button>
                <button onClick={this.bigDJThree}>Big DJ Three</button>
                <button onClick={this.bigDJFour}>Big DJ Four</button>
            </div>
        )
    }

}


export default Buttons