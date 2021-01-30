//container Component for Home
import React from "react";
import DetailPresenter from "./DetailPresnter";
import { moviesApi } from "../../api";


export default class extends React.Component {
    constructor(props) {
        super(props);
        const {
            location: { pathname }
        } = props;
        this. state = {
            result:null,     
            error:null,
            loading: true,
            isMovie: pathname.includes("/movie/")
        };
    } 
   
    //get id
    async componentDidMount() {
        const { 
            match: { 
                params: {id}
            },
            history: { push },
        } = this.props;
        const { isMovie } = this.state;
        const parsedId = parseInt(id);
        if(isNaN(parsedId)) {
            return push("/");
        }
        let result = null;
        try {
            if(isMovie) {
                /*const req = await moviesApi.movieDetail(parsedId);
                result = req.data;*/
                ({ data: result } = await moviesApi.movieDetail(parsedId));
            }       
        } catch {
            this.setState( { error: "Can't find !"} )
        } finally {
            this.setState ( { loading: false, result })
        }
    }

    render() {
        // see default props
        const { result, error, loading } = this.state;
        console.log(result);
        return <DetailPresenter result={result} error={error} loading={loading} />; 
    }
}