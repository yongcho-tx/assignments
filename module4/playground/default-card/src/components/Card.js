import React, {useEffect} from "react"

function Card(props) {
    useEffect(() => console.log("Card Default Props " + typeof(Card.defaultProps.background) ), [])
  
      
        let styles = {
            background: props.cardColor,
            height: props.height?props.height:150,
            width: props.width?props.width: 150,
            border: props.border?props.border: "2px solid black"
        }

        return (
            <div style={styles}>console.log({styles.background})</div>
        )
    }
Card.defaultProps = {
    background: "blue",
    height: 150,
    width: 150,
    border: "2px solid black"
}

export default Card