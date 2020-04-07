import React, {useEffect, useContext} from 'react';
import styled from 'styled-components';
import { CurrentUserContext } from "../../CurrentUserContext";
import MeowLittle from '../MeowLittle';


const Profile = () => {
  const {currentUser, status} = useContext(CurrentUserContext);
  const [meow, setMeow] = React.useState({});

  useEffect(() => {
    if(currentUser && currentUser.profile) {
      console.log('currentUser: ', currentUser.profile.handle);
      
      const runAsync = async () => {
        const response = await fetch(`/api/${currentUser.profile.handle}/feed`);
        const data = await response.json();
        setMeow(data);
        console.log("meow", data)
      }

      runAsync()
    }
  }, [status]);

  console.log('~~~~~~~~ ', meow.tweetsBtId);

    if (status == 'idle') {
      let current = currentUser.profile;
    return (
    <WholeContainer>
      <Wallpaper src={current.bannerSrc}/>

      <div>
        <DP src={current.avatarSrc}/>
      </div>
      
      <FollowContainer>
        <FollowButton>Follow</FollowButton>
      </FollowContainer>
      <DataContainer>
        <h1 style={{margin: '0'}}>{current.displayName}</h1>
        <GreyP>@{current.handle}</GreyP>
        <p>{current.bio}</p>
        <MoreData>
          <GreyP>📍 {current.location}</GreyP>
          <GreyP>📅 {current.joined}</GreyP>
        </MoreData>
        <FollowData>
          <GreyP><b style={{color: 'black'}}>{current.numFollowing}</b> Following</GreyP>
          <GreyP><b style={{color: 'black'}}>{current.numFollowers}</b> Followers</GreyP>
        </FollowData>
      </DataContainer>

      <NavContainer>
        <NavOptions>Meows</NavOptions>
        <NavOptions>Media</NavOptions>
        <NavOptions>Likes</NavOptions>
      </NavContainer>

      <div>
      { meow.tweetIds && meow.tweetIds.map(id => {
          return <MeowLittle key={id} tweet={meow.tweetsById[id]} />
        }) }
      </div>
    </WholeContainer>
    );
  } else {
    return (
    <p>Loading</p>
  )}
};

//-------------------------------- STYLES ---------------------------------

const WholeContainer = styled.div`
  display: block;
`;

const Wallpaper = styled.img`
  height: 280px;
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
  top: 160px;

  z-index: 1;
`;

const FollowContainer = styled.div`
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
  padding: 15px;
`;

const GreyP = styled.p`
  color: grey;
  margin-right: 15px;
`;

const MoreData = styled.div`
  display: flex;
  justify-content: left;
`;

const FollowData = styled.div`
  display: flex;
  justify-content: left;
`;

//-- FEATURES CONTAINER

const NavContainer = styled.div`
  display: flex;
`;

const NavOptions = styled.a`
  text-decoration: none;
  color: black;
  text-align: center;
  height: 40px;
  border-bottom: 2px solid #F3F3F3;
  flex-grow: 1;

  &:hover {
    cursor: pointer;
    color: magenta;
    border-bottom: 2px solid magenta;
  }
`;

export default Profile;