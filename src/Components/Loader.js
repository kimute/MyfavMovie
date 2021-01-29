import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
   height: 100vh;
   width: 100vw;
   display: flex;
   justify-content: center;
   font-size: 28px;
   margin-top: 20px;
`;

export default () => (
    <Container>
        <span>
        <FontAwesomeIcon icon={faSpinner} spin />
        </span>
    </Container>
);