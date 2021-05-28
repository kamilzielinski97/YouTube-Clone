import axios from 'axios';

const KEY = 'AIzaSyDI1_5nGR-rw_4nZ2PmpYRHLpGMNuoy2i0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
