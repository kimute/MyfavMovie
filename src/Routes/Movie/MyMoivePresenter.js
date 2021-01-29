import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import MoviePoster from "../../Components/MoviePoster";

const Container = styled.div`
   padding:20px;
`;

const MyMoviePresenter = ( {
    favorate,
    unfavorate,
    error,
    loading,

} ) => loading ? ( 
    <Loader />
) : (
<Container>
    {favorate && favorate.length > 0 && ( 
    <Section title="My Favorate Movie">
        {favorate.map(movie => (
            <MoviePoster 
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path} 
              title={movie.original_title} 
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            />
        ))}
    </Section>
    )}
    {favorate && favorate.length > 0 && ( 
    <Section title="My UnFavorate Movie">
        {unfavorate.map(movie => (
            <MoviePoster 
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path} 
              title={movie.original_title} 
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            />
        ))}
    </Section>
    )}
</Container>
);

MyMoviePresenter.propTypes = {
    favorate: PropTypes.array,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired
}
export default MyMoviePresenter;

