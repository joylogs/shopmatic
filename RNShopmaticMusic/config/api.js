import axios from 'axios'

const getTopAlbums = async () => {

    let result = await axios({
      method: 'get',
      url: 'https://itunes.apple.com/us/rss/topalbums/limit=100/json',
    });

    const responseData = result.data;
    // console.log(responseData.feed.entry);
    if (!responseData) {
        const error = responseData.error;
        return {
          error: error
        };
      }
    //   console.log('This is called from api.js', (responseData.feed.entry))
      return responseData.feed.entry;
  };


  export { 
    getTopAlbums
  }