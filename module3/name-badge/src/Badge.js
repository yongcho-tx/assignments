import React from "react"


function Badge (props) {
    const isBackgroundGray = 'true'
    console.log(props.badgeItems.firstName)
    console.log(props.index, "Index of Badge" + props.index + 1)
        return( 
                <li className="badge-li">
                        <h2 className="badge-header" style={{background: props.index % 2 === 0 ? "red" : "blue"}}>{props.badgeItems.badge}:</h2>
                        <h3 className="name">Name: {props.badgeItems.firstName} {props.badgeItems.lastName}</h3>
                        <h3 className="phone">Phone: {props.badgeItems.phone}</h3>
                        <h3 className="pob">Place of Birth: {props.badgeItems.pob}</h3>
                        <h3 className="fav-food">Favorite Food: {props.badgeItems.favFood}</h3>
                        <h3 className="e-mail">Email: {props.badgeItems.eMail}</h3>
                        <p className="about">{props.badgeItems.about}</p>
                </li>
    )
}

export default Badge