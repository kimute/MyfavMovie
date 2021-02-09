import axios from "axios";

const My_Api_Key = process.env.REACT_APP_API_KEY; 
const api = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    params: {
        api_key:My_Api_Key,
        language: "en-US"
    }
});

//get JSON parameters from API
/*
APIから習得した値は以下のように使用 
　　HOME:
    - nowPlaying(): to show now playing movies
    - upcoming(): to show upcoming movies
    - popular(): to show popular movies

    MOVIE：
    -favorate():show favorate movie
    -unfavorate():show unfavorate movie

    SEARCH：
    - serach: to search movies by keyword

    - movieDetail():映画の詳細を表示n

*/
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

