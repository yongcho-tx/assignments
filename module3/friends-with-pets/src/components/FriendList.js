import React from "react"
import friendData from "./friendsArray"
import Friend from "./Friend"


function FriendList() {
    const friendComponent = friendData.map(friend => <Friend key={friend.age} friend={friend}/>)
    return (
        <div className="friend-card">
            {friendComponent}
        </div>
    )
}


export default FriendList