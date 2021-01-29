import axios from "axios";

const My_Api_Key = process.env.REACT_APP_API_KEY; 
const api = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    params: {
        api_key: My_Api_Key,
        language: "en-US"
    }
});
//api.get("movie/popular");

export const moviesApi = {
    nowPlaying:() =>api.get("movie/now_playing"),
    upcoming:() => api.get("movie/upcoming"),
    popular:() => api.get("movie/popular"),
    //movie detail
    movieDetail: id => api.get(`movie/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    search: term => api.get("search/movie", {
        params: {
            query:encodeURIComponent(term)
        }
    }),
    favorate:() =>api.get("movie/top_rated"),
    unfavorate:() => api.get("search/movie", {
        params: {
            query:encodeURIComponent("horror")
        }
    }) 
};

