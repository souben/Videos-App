import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideosList from './VideosList';
import VideoDetails from './VideoDetails';



class App extends React.Component {
    state = {videos: [], selectedVideo: null}
 
    componentDidMount() {
        this.onSearchSubmit('developer community');
    }
    // We call this method every time the client submit the search
    onSearchSubmit = async term => {
            const response = await youtube.get( '/search', {
                params: { 
                    q: term
                }
            });

            this.setState({
                videos: response.data.items,
                selectedVideo: response.data.items[0]
             });
        };


    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    };

 
   render() {
       return (
            <div className="ui container">
                <SearchBar onSubmittingSearch={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">                       
                        <div className="eleven wide column">
                            <VideoDetails video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideosList videosList={this.state.videos} onVideoSelect={this.onVideoSelect}  />
                        </div>
                    </div>
                </div>  
            </div>
       );
    }


};

export default App;