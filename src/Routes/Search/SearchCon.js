//container Component for Home
import React from 'react'
import SearchPresenter from "./SearchPresenter";
import { moviesApi } from "../../api";

export default class extends React.Component {
    state ={
        searchResult: null,
        searchQuery: "",
        error:null,
        loading: false
    };

    updateQuery = event =>{
        const { 
            target: { value }
        } = event;
        this.setState( {
            searchQuery: value
        });
    }

    handleSubmit = event =>{
        event.preventDefault();
        const { searchQuery } = this.state;
        if(searchQuery !==""){
            this.searchByQuery();
        }
    };
    // searchByQuery:入力したキーワード(searchQuery)から検査する関数
    searchByQuery = async () => {
        const { searchQuery } = this.state;
        this.setState({ loading:true })
        try {
            const { 
                data: { results: searchResult }
            } = await moviesApi.search(searchQuery);
            this.setState( {
                searchResult
            });
        } catch {
            this.setState({ error: "Can't find result "});
        } finally {
            this.setState( { loading: false} );
        }
    };

    render() {
        const { searchResult, searchQuery, error, loading } = this.state;
        return <SearchPresenter 
                 searchResult={searchResult} 
                 searchQuery={searchQuery}  
                 error={error} 
                 loading={loading}
                 handleSubmit={this.handleSubmit}
                 updateQuery={this.updateQuery}
                 />
    }
}