import React from 'react'

function Message(props) {
    return (
        <div className="ui message">
            <div className="header">{props.message}</div>
            <p>{props.para}</p>
        </div>
    )
}

export default Message;
