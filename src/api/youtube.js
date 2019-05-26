import axios from 'axios';

const KEY = 'AIzaSyDOJ-2qf-tk-Q0EugHfBd8TWHG263UKOAY';


export default axios.create(
    {
        baseURL : 'https://www.googleapis.com/youtube/v3',
        params: { 
            part: 'snippet',
            maxResults: 5,
            key: KEY
        } 
    });