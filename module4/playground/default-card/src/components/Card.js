import React, {useEffect} from "react"
import PropTypes from "prop-types"

function Card(props) {
    useEffect(() => console.log("Card Default Props " + typeof(Card.defaultProps.background) ), [])
  
      
        let styles = {
            background: props.cardColor,
            height: props.height,
            width: props.width,
            border: props.border
        }

        return (
            <div style={styles}>Color HEX Code:<br /> {styles.background}</div>
        )
    }

Card.propTypes = {
    cardColor: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
}

Card.defaultProps = {
    cardColor: "blue",
    height: 150,
    width: 150,
    border: "2px solid black"
}

export default Card