import React from 'react';
import VideoItem from './VideoItem'

const VideosList = ({ videosList, onVideoSelect }) => {
    const renderedList = videosList.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>;
    });
    return  (
        <div className="ui relaxed divided list">
                {renderedList}
        </div>
    )
}
export default VideosList;