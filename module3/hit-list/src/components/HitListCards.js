import React, { Component } from "react"
import ListCard from "./ListCard"

class HitListCards extends Component {
    constructor() {
        super()
        this.state = {
            hitList: []
        }
    }
            componentDidMount() {
                fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
                    .then(res => res.json())
                    .then(data => {
                        this.setState({
                            hitList: data
                        })
                    })
                    .catch(err => console.log(err))
    }
        render() {
            const {hitList} = this.state
            const listCardComponent = hitList.map((list, index) => <ListCard key={list.image} index={index} card={list}/>)
            return (
                    <div className="main">
                        <header>
                            <img src="./corleone.png" alt="don corleone" className="header-img"/>
                            <h2>Don Corleone's Hit List</h2>
                        </header>
                            <div className="container">
                            {listCardComponent}
                            </div>
                    </div>   
                )
        }
   
}

export default HitListCards