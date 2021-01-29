import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// for show movie poster

const Container = styled.div`
    font-size: 12px;
`;
const Image = styled.div`
    background-image: url(${props => props.bgUrl});
    height:180px;
    background-size: cover;
    border-radius: 4px;
    background-position: center center;
    transition:opacity 0.2s ease-in-out;
`;
const Rating = styled.div`
    bottom: 5px;
    right: 5px;
    position: absolute;
    opacity:0;
    transition: opacity 0.1s linear;
`;
const ContainerForImage = styled.div`
    margin-bottom: 6px;
    position: relative;
    &:hover {
        ${Image} {
            opacity: 0.2;
        }
        ${Rating} {
            opacity: 1;
            span {
                color: yellow;
            }
        }
    }
`;
const Title = styled.div`
    display: block;
    margin-bottom:3px;
`;
const Year = styled.div`
    font-size: 11px;
    color: #59dae2;
`;
//src/assets/default.png
const MovePoster = ( {id, imageUrl, title, rating, year, isMovie = false} ) => (
<Link to={isMovie? `/movie/${id} `:`/`}>
    <Container>
        <ContainerForImage>
            <Image 
              bgUrl={ 
                imageUrl 
                ? `https://image.tmdb.org/t/p/w300${imageUrl}`
                : require("../assets/default.png") } />
            <Rating>
                <span role="img" aria-label="rating">
                <FontAwesomeIcon icon={faStar}  />
                </span>{" "}
                {rating}/10
            </Rating>
        </ContainerForImage>
        <Title>{title.length >18 ? `${title.substring(0, 18)}...`: title}</Title>
        <Year>{year}</Year>
    </Container>
</Link>
);


MovePoster.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string
}

export default MovePoster;