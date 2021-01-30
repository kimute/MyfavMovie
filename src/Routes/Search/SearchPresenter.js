import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Notice from "../../Components/Notice";
import MoviePoster from "../../Components/MoviePoster";

// Presenterviewの役：search container からもらった値を画面上に表示

//css
const Container =styled.div`
   padding: 20px;
`;

const Form =styled.form`
   margin-bottom: 50px;
   width: 100%
`;

const Input =styled.input`
   all: unset;
   font-size: 28px;
   width: 100%;

`;

const SearchPresenter = ( {
    searchResult,
    searchQuery,
    error,
    loading,
    handleSubmit,
    updateQuery

} ) => (<Container>
    <Form onSubmit={handleSubmit}>
        <Input placeholder="Search Movies..." value={searchQuery} onChange={updateQuery}/>
    </Form>
    {loading ? (
     <Loader /> 
    ) : (
     <>
      {searchResult && searchResult.length > 0 && (<Section title="Search Results">{searchResult.map(movie =>(
          <MoviePoster 
          key={movie.id}
          id={movie.id}
          imageUrl={movie.poster_path} 
          title={movie.original_title} 
          rating={movie.vote_average}
          year={movie.release_date && movie.release_date.substring(0, 4)}
          isMovie={true}
        />
      ))}</Section>)}
      {error && <Notice color="#59dae2" text={error} />}
      {searchResult && searchResult.length === 0 && (<Notice text="not found !!!" color="#59dae2" />)}

    </>)}
</Container>
);

SearchPresenter.propTypes = {
    searchResult: PropTypes.array,
    searchQuery:PropTypes.string ,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired,
    handleSubmit:PropTypes.func.isRequired,
    updateQuery:PropTypes.func.isRequired
}
export default SearchPresenter;