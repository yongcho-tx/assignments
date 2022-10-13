import React from 'react'
import Auth from './Auth'


function Popup(props) {
  return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
            { props.children }
            <Auth />
        </div>
    </div>
  ) : ""
}

export default Popup