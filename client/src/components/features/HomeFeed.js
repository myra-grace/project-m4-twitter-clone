import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "../../CurrentUserContext";
import MeowLittle from "../MeowLittle";
import MeowBig from "../MeowBig";



const HomeFeed = () => {
  const MAX_CHARACTERS = 250;
  const { currentUser } = useContext(CurrentUserContext);
  const [homeTweets, setHomeTweets] = useState({});
  const [characters, setCharactes] = useState(MAX_CHARACTERS);
  const [input, setInput] = useState("");

  async function handleTweet(event) {
    if (characters.length > MAX_CHARACTERS || characters.length < 1) {
      return
    } else {
    const response = await fetch(`/api/tweet`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        status: input
      })
    });
    try {
      const response = await fetch(`/api/me/home-feed`);
      const data = await response.json();
      setHomeTweets(data);
      setInput('');
    } catch {
      alert("re-load");
    }
    }
  }

  function handleKeyUpFunction(event) {
    let input = event.target.value;
    setCharactes(MAX_CHARACTERS - input.length);
    setInput(input);
  }

  useEffect(async () => {
    const response = await fetch(`/api/me/home-feed`);
    const data = await response.json();
    setHomeTweets(data);
  }, []);

  if (currentUser.profile !== undefined) {
    console.log("currentUser: ", currentUser.profile.handle);

    return (
      <div>
        <GeneralContainer>
          <div style={{ borderBottom: "4px solid #F3F3F3" }}>
            <Home>
              <h1 style={{ paddingLeft: "15px" }}>Home</h1>
            </Home>
            <MeowBox>
              <form>
                <InputContainer>
                <div>
                <DP src={currentUser.profile.avatarSrc} />
              </div>
                  <InputBox
                    value={input}
                    placeholder="What's happening?"
                    maxlength={MAX_CHARACTERS}
                    onChange={handleKeyUpFunction}
                  ></InputBox>
                </InputContainer>
                <CharacterMeow>
                  <p style={{ color: "grey" }}>{characters}</p>
                  <MeowButton type="button" onClick={handleTweet}>Meow</MeowButton>
                </CharacterMeow>
              </form>
            </MeowBox>
          </div>
          <div>
            {homeTweets.tweetIds &&
              homeTweets.tweetIds.map(id => {
                return (
                  <MeowLittle key={id} tweet={homeTweets.tweetsById[id]} onClick={MeowBig}/>
                );
              })}
          </div>
        </GeneralContainer>
      </div>
    );
  } else {
    return <p>Login</p>;
  }
};

//-------------------------------- STYLES ---------------------------------

const GeneralContainer = styled.div`
  border: 1px solid #f3f3f3;
`;

const Home = styled.div`
  border-bottom: 1px solid #f3f3f3;
`;

const MeowBox = styled.div`
  display: block;
  padding: 15px;
  padding-bottom: 0;
`;

const DP = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const InputContainer = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
`;

const InputBox = styled.textarea`
  border: none;
  padding: 18px;
  width: 100%;
  font-family: arial;

  align-items: fill;
  resize: none;

  :: placeholder {
    font-family: arial;
  }
`;

const CharacterMeow = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
`;

const MeowButton = styled.button`
  background-color: magenta;
  color: white;
  border: none;
  border-radius: 20px;
  margin-left: 15px;

  width: 100px;
  height: 40px;

  &:hover {
    cursor: pointer;
  }
`;

export default HomeFeed;
