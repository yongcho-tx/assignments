import React, { Component } from "react"
import Die from "./Die"

const buttonStyle = {
    width: "12em",
    height: "5em",
    marginLeft: "2em",
}

class DiceBox extends Component {
    constructor() {
        super()
        this.state =  {
           numbers: [ 
            {url: "./die1.png", num: 1}, 
            {url: "./die2.png", num: 2},
            {url: "./die3.png", num: 3},
            {url: "./die4.png", num: 4},
            {url: "./die5.png", num: 5}
           ]
        }
        this.state.roll = this.roll.bind(this)
    }

    randomNum = () => Math.ceil(Math.random() * 6)

    roll = (e) => {
        e.preventDefault()
        let dice1 = this.randomNum()
        let dice2 = this.randomNum()
        let dice3 = this.randomNum()
        let dice4 = this.randomNum()
        let dice5 = this.randomNum()
        this.setState(
            {  
                numbers: [
                    {url: `./die${dice1}.png`, num: dice1 }, 
                    {url: `./die${dice2}.png`, num: dice2 }, 
                    {url: `./die${dice3}.png`, num: dice3 }, 
                    {url: `./die${dice4}.png`, num: dice4 }, 
                    {url: `./die${dice5}.png`, num: dice5 }
                ]
            })
    }

    render() {
        
        const dieComponent = this.state.numbers.map((num, i) => <Die key={Math.random() * num.url.length} index={i} die={num}/>)
        return (
            <div className="container">
                   {dieComponent}
                <button onClick={this.roll} style={buttonStyle}>Roll Dice</button>
            </div>
        )
    }
}

export default DiceBox