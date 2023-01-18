import axios from 'axios';
const KEY ='AIzaSyCiRhMxLlAxTT7n-YBnsJvQkZeCM4bsfak';

export default axios.create({
   baseURL : 'https://www.googleapis.com/youtube/v3',
   params :{

    part : 'snippet',
    maxResults : 20,
    key : KEY

   }
})