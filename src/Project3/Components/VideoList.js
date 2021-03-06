import React from 'react'
import VideoItem from './VideoItem'

function VideoList(props) {
    const renderList = props.videos.map(video => <VideoItem onVideoSelect={props.onVideoSelect} video={video} />)
    return (
        <div className="ui relaxed divided list">
            {renderList}
        </div>
    )
}

export default VideoList
