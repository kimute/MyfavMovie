import React from 'react'
import HomePresenter from "./HomePresenter";
import { moviesApi } from "../../api";

//container Component for Home
export default class extends React.Component {
    state ={
        nowPlaying: null,
        upcoming: null,
        popular:null,
        error:null,
        loading: true
    };

    //API call
    async componentDidMount() {
        try {
            //change var. name : results to nowPlaying 
            const { 
                data: { results: nowPlaying } 
            } = await moviesApi.nowPlaying();
            const { 
                data: { results: upcoming } 
            } = await moviesApi.upcoming();
            const { 
                data: { results: popular } 
            } = await moviesApi.popular();
           
            this.setState( {
                nowPlaying,
                upcoming,
                popular
            } );
        } catch {
            this.setState({
                error: "Can't find movies"
            });
        }finally {
            this.setState({
                loading: false
            })

        }
    }

    render() {
        const { nowPlaying, upcoming, popular,error, loading } = this.state;
        return <HomePresenter 
                 nowPlaying={nowPlaying} 
                 upcoming={upcoming} 
                 popular={popular} 
                 error={error} 
                 loading={loading}
                 />
}
}