import React from 'react';
import VideoItem from './VideoItem'

const VideosList = ({ videosList }) => {
    const renderedList = videosList.map((video) => {
        return <VideoItem currentVideo={video}/>;
    });
    return  (
        <div className="ui relaxed divided list">
            <div className="item">
                {renderedList}
            </div>
        </div>
    )
}
export default VideosList;



