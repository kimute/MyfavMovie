import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
   :not(:last-child) {
       margin-bottom: 50px;
   }
`;

const Title = styled.div`
   font-size: 18px;
   font-weight: 600;

`;

const Grid = styled.div`
   margin-top: 25px;
   display: grid;
   grid-template-columns: repeat(auto-fill, 125px);
   grid-gap: 25px;
`;

//children :reserved react props (to put inside of div)
const Section = ({ title, children }) => (
    <Container>
        <Title>{title} <FontAwesomeIcon icon={faCompactDisc} spin/></Title>
    
        <Grid>{children}</Grid>
    </Container>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node), 
        PropTypes.node
    ])
}

export default Section;