import axios from 'axios';

/** base url to make requests to the movie database (initials of the url that remains fixed and does not change) **/
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});


export default instance;