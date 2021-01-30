import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


// show details
// css
const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
`;
// for backgroud image blur
const Backdrop = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-image: url(${props => props.bgImage});
   background-position: center center;
   background-size: cover;
   filter: blur(4px);
   opacity: 0.5;
   z-index: 0;
`;

const Content = styled.div`
   display: flex;
   width: 100%;
   position: relative;
   height: 100%;
   z-index: 1;
`;

const Cover = styled.div`
   width: 30%;
   background-image: url(${props => props.bgImage});
   background-position: center center;
   background-size: cover;
   height: 100%;
   border-radius: 5px;
`;

const Data = styled.div`
   width: 70%;
   margin-left: 10px;
`;
const Title = styled.h3`
   font-size: 32px;
   margin-bottom: 10px;
`;

const InfoContainer = styled.div`
   margin 18px 0;
`;

const InfoItem = styled.span``;

const Divider = styled.span`
   margin: 0 10px;
`;
const HomePage = styled.a`
   color:#59dae2;
   &:hover {
       color: crimson;
   }
`;

const OverView = styled.p`
   font-size: 14px;
   opacity: 0.8;
   line-height: 2;
   widh:48%;
`;

const VideoView = styled.div`
   margin-top:50px;
`;

const DetailPresenter = ( { result, error, loading } ) => 
    loading ? (
        <Loader />
    ) : (
      <Container>
          <Backdrop 
            bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
          />
          <Content>
              <Cover bgImage={ result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : require("../../assets/default.png")}/>
              <Data>
                  <Title>{result.original_title ? result.original_title : result.original_name}</Title>
                  <InfoContainer>
                      <InfoItem>
                          {result.release_date.substring(0, 4)}
                      </InfoItem>
                      <Divider>・</Divider>
                      <InfoItem>
                          {result.runtime} min.
                      </InfoItem>
                      <Divider>・</Divider>
                      <InfoItem>
                          {result.genres && result.genres.map((genre, index) =>
                             index === result.genres.length -1 ? genre.name : `${genre.name} /`)}
                      </InfoItem>
                      <Divider>・</Divider>
                      <InfoItem>
                          <HomePage>
                          <a href={result.homepage}>
                              {result.production_companies[0].name }</a>
                          </HomePage>
                        </InfoItem>
                        <Divider>・</Divider>
                      <InfoItem>
                      <span role="img" aria-label="rating">
                <FontAwesomeIcon icon={faStar}/>
                </span> {result.vote_average} / 10
                      </InfoItem>
                  </InfoContainer>
                  <OverView>{result.overview}</OverView>
                  <VideoView>
                  <ReactPlayer url={`https://www.youtube.com/watch?v=${result.videos.results[0].key}`} playing controls />
                  </VideoView>
              </Data>
          </Content>
      </Container>
    );

DetailPresenter.propTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    loading:PropTypes.bool.isRequired
};

export default DetailPresenter;
