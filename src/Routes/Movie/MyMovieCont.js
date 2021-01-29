import React from 'react'
import MoviePresenter from "./MyMoivePresenter";
import { moviesApi } from "../../api";

export default class extends React.Component {
    state ={
        favorate: null,
        unfavorate: null,
        error:null,
        loading: true
    };
    //API call
    async componentDidMount() {
        try {
            //change var. name : results to nowPlaying 
            const { 
                data: { results: favorate } 
            } = await moviesApi.favorate();
            const { 
                data: { results: unfavorate } 
            } = await moviesApi.unfavorate();
            //throw Error();
            //setState
            this.setState( {
                favorate,
                unfavorate
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
        const { favorate, unfavorate, error, loading } = this.state;
        //console.log(this.state);
        return <MoviePresenter 
                 favorate={favorate} 
                 unfavorate={unfavorate} 
                 error={error} 
                 loading={loading}
                 />
    }
}