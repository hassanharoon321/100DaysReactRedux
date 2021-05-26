import React from 'react'
import "./VideoItem.css";

function VideoItem(props) {
    return (
        <div className="item video-item" onClick={()=>props.onVideoSelect(props.video)}>
            <img alt={props.video.snippet.title} src={props.video.snippet.thumbnails.medium.url} className="ui image" />
            <div className="content">
                <div className="header">{props.video.snippet.title}</div>
            </div>
        </div>
    )
}

export default VideoItem
