import React from 'react'
import './PostCard.css'

const PostCard = (props) => {

    return(
        <div className="cardContainer" onClick={props.onClick}>
            <div className="cardArea">
                <div className="cardUser">
                <p>{props.username}</p>
                </div>
                <div className="cardText">
                <p>{props.text}</p>
                </div>
                <div className="cardSidebar">
                <p>Vários botões</p>
                </div>
            </div>
        </div>
    )
}

export default PostCard