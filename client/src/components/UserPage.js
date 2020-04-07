import React, {useEffect, useContext} from 'react';
import styled from 'styled-components';
import { CurrentUserContext } from "../../CurrentUserContext";
import MeowLittle from '../MeowLittle';

// WHEN CLICK ANOTHER USER SENDS TO THIS PAGE

const UserPage = () => {
  const {clickedUser} = // CLICKED USER INFO
  const [meow, setMeow] = React.useState({});

  useEffect(() => {
    if(clickedUser && clickedUser.profile) {
      console.log('clickedUser: ', clickedUser.profile.handle);
      
      const runAsync = async () => {
        const response = await fetch(`/api/${clickedUser.profile.handle}/feed`);
        const data = await response.json();
        setMeow(data);
        console.log("meow", data)
      }

      runAsync()
    }
  }, [status]);

    return (
    <WholeContainer>
      <Wallpaper src={user.bannerSrc}/>

      <div>
        <DP src={user.avatarSrc}/>
      </div>
      
      <FollowContainer>
        <FollowButton>Follow</FollowButton>
      </FollowContainer>
      <DataContainer>
        <h1 style={{margin: '0'}}>{user.displayName}</h1>
        <GreyContainer>
            <GreyP>@{user.handle}</GreyP>
            <GreyFollows>Follows you</GreyFollows>
        </GreyContainer>
        <p>{user.bio}</p>
        <MoreData>
          <GreyP>📍 {user.location}</GreyP>
          <GreyP>📅 {user.joined}</GreyP>
        </MoreData>
        <FollowData>
          <GreyP><b style={{color: 'black'}}>{user.numFollowing}</b> Following</GreyP>
          <GreyP><b style={{color: 'black'}}>{user.numFollowers}</b> Followers</GreyP>
        </FollowData>
      </DataContainer>

      <NavContainer>
        <NavOptions>Meows</NavOptions>
        <NavOptions>Media</NavOptions>
        <NavOptions>Likes</NavOptions>
      </NavContainer>

      <ContentContainer>
      { meow.tweetIds && meow.tweetIds.map(id => {
          return <MeowLittle key={id} tweet={meow.tweetsById[id]} />
        }) }
      </ContentContainer>
    </WholeContainer>
    );
};

//-------------------------------- STYLES ---------------------------------

const WholeContainer = styled.div`
  background-color: yellow;

  display: block;
`;

const Wallpaper = styled.img`
  height: 215px;
  width: 100%;
  object-fit: cover;
`;

const DP = styled.img`
  width: 200px;
  height: 200px;
  border: 2px solid white;
  border-radius: 50%;
  margin: 15px;

  position: absolute;
  top: 100px;

  z-index: 1;
`;

const FollowContainer = styled.div`
  background-color: violet;
  text-align: right;
  height: 100px;
`;

const FollowButton = styled.button`
  background-color: transparent;
  border: 2px solid magenta;
  border-radius: 20px;
  margin: 15px;

  width: 100px;
  height: 40px;

  &:hover {
    cursor: pointer;
    background-color: magenta;
  }
`;

//-- DATA CONTAINER --

const DataContainer = styled.div`
  background-color: green;
  margin: 15px;
`;

const GreyContainer = styled.div`
  background-color: blue;
`;

const GreyP = styled.p`
  color: grey;
  margin-right: 15px;
`;

const GreyFollows = styled.p`
  background-color: #F3F3F3;
  color: grey;
  margin-right: 15px;
`;

const MoreData = styled.div`
  background-color: purple;

  display: flex;
  justify-content: left;
`;

const FollowData = styled.div`
  background-color: gold;

  display: flex;
  justify-content: left;
`;

//-- FEATURES CONTAINER

const NavContainer = styled.div`
  background-color: magenta;

  display: flex;
`;

const NavOptions = styled.a`
  background-color: white;
  text-decoration: none;
  color: black;
  text-align: center;
  flex-grow: 1;

  &:hover {
    cursor: pointer;
    color: magenta;
  }
`;

//--

const ContentContainer = styled.div`
  background-color: silver;
`;

export default UserPage;