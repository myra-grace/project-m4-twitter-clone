import React, {useContext} from 'react';
import styled from 'styled-components';
// import { CurrentUserContext } from "../../CurrentUserContext";
import MeowAction from './MeowActions';

//Make tweet component

const MeowLittle = (props) => {
    const {
        author,
        isLiked,
        isRetweeted,
        retweetFrom,
        timestamp,
        status,
    } = props.tweet;

    return (
    <MeowContainer>
        {/* <Shared>🔂 {retweetFrom.handle}</Shared> */}
      <DP src={author.avatarSrc}/>
      <MiddleContainer>
        <DataContainer>
          <UserName>{author.displayName}</UserName>
          <UserHandle>@{author.handle}</UserHandle>
          <Date>{timestamp}</Date>
        </DataContainer>
        <p>{status}</p>
        <MeowAction liked={isLiked} retweeted={isRetweeted} />
      </MiddleContainer>
    </MeowContainer>
    ) 
};

//-------------------------------- STYLES ---------------------------------

const MeowContainer = styled.div`
  padding: 15px;
  border-top: 1px solid #F3F3F3;
  border-bottom: 1px solid #F3F3F3;

  display: flex;
  align-content: flex-start;
`;

const Shared = styled.p`
  background-color: yellow;
  color: grey;
  padding: 0;
  margin: 0;
`;

const DP = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }
`;

const MiddleContainer = styled.div`
  padding-left: 15px;
  display: flex;
  flex-direction: column;
`;

const DataContainer = styled.div`
  display: flex;
  align-content: center;
`;

// MAKE LINKS FETCHES
const UserName = styled.a`
  text-decoration: none;
  font-weight: bold;
  padding-right: 15px;

  &:hover {
    cursor: pointer;
  }
`;

const UserHandle = styled.a`
  text-decoration: none;
  color: grey;
  padding-right: 15px;

  &:hover {
    cursor: pointer;
  }
`;

const Date = styled.p`
  text-decoration: none;
  color: grey;
  padding: 0;
  padding-right: 15px;
  margin: 0;
`;


export default MeowLittle;