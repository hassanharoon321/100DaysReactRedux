import React from 'react';

function CommentDetails(props) {
    return (
        <div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.image}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.name}
                    </a>
                    <div className="metadata">
                        <span className="date">{props.timeAgo}</span>
                    </div>
                    <div className="text">
                        {props.comment}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentDetails
