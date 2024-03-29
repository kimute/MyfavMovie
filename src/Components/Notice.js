import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// send a message when find nothing or occur error
//エラーメッセージ表示機能

// css
const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  color: ${props => props.color};
`;

const Notice =( { text, color} ) => (
    <Container>
        <Text color={color}>{text}</Text>
    </Container>
);

Notice.propTypes = {
    text:PropTypes.string.isRequired,
    color:PropTypes.string.isRequired
};

export default Notice;