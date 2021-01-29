import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Notice from "../../Components/Notice";
import MoviePoster from "../../Components/MoviePoster";

const Container = styled.div`
   padding:20px;
`;

const HomePresenter = ( {
    nowPlaying,
    upcoming,
    popular,
    error,
    loading,

} ) => loading ? ( 
    <Loader />
) : (
<Container>
    {nowPlaying && nowPlaying.length > 0 && ( 
    <Section title="Now playing">
        {nowPlaying.map(movie => (
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
    {popular && popular.length > 0 && ( 
    <Section title="Popular Movies">
        {popular.map(movie => (
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
    {upcoming && upcoming.length > 0 && ( 
    <Section title="Upcoming Movies">
        {upcoming.map(movie => (
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
    {error && <Notice color="#e74c3c" text={error} />}
</Container>
);

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    upcoming:PropTypes.array ,
    popular:PropTypes.array,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired
}
export default HomePresenter;