import React, { Component } from "react"


const h2Style = {
    fontSize: "40px"
}

class Die extends Component {
    
    render() {
        return (
                <div className="die-container">
                    <div className="die">
                        <img src={this.props.die.url} alt={this.props.i}></img>
                    </div>
                    
                    <h2>{this.props.die.num}</h2>
                </div>
        )
        }
    }

export default Die