import React from 'react';
import styled from 'styled-components';


// Component for the row of icons along the bottom

const Comment = () => {


    return(
null
    )
};

const Repost = () => {


    return(
null
    )
};

const Like = () => {


    return(
null
    )
};

const Bookmark = () => {


    return(
null
    )
};

const MeowAction = (props) => {
    let like = ''
    let reTweet = ''

    if (props.liked == true) {
        like = '💖'
    } else {
        like = '❤'
    }

    if (props.reTweeted == true) {
        reTweet = '🔂'
    } else {
        reTweet = '🔁'
    } 

    return(
        <ActionContainer>
            <Container>🗨</Container>
            <Container>{reTweet}</Container>
            <Container>{like}</Container>
            <Container>📚</Container>
        </ActionContainer>
    )
};

//-------------------------------- STYLES ---------------------------------

const ActionContainer = styled.div`
  background-color: purple;

  display: flex;
  justify-content: space-between;
`;

const Container = styled.button`
    background-color: white;
    border: none;
    text-align: center;
    flex-grow: 1;

    &:hover {
    cursor: pointer;
    color: magenta;
    }
`;


export default MeowAction;