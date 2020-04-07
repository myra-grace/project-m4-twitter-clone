import React, {useContext} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { NavLink } from 'react-router-dom';
import { COLORS } from './constants';
import styled from 'styled-components';

import HomeFeed from "./components/features/HomeFeed";
import Bookmarks from "./components/features/Bookmarks";
import TweetDetails from "./components/features/TweetDetails";
import Notifications from "./components/features/Notifications";
import Profile from "./components/features/Profile";
import { CurrentUserContext } from "./CurrentUserContext";
import { ReactComponent as Logo } from '../src/assets/logo.svg'


//----------------------------------------------------------------------------

const App = (props) => {
  const {currentUser, status} = useContext(CurrentUserContext);
  if(Object.keys(currentUser) !== 0){
    console.log('currentUser.profile: ', currentUser.profile);
}
  
  return (
    <Router>
      <MyCentre>
        <NavBar>
          <MyLogo>
            <Logo/>
          </MyLogo>
          <MyUl>
            <li style={{margin: "20px 0"}}>
              <Link to ="/" style={MyLink}>🏠 Home</Link>
            </li>
            <li style={{margin: "20px 0"}}>
              <Link to ="/profile/Id" style={MyLink}>🙂 Profile</Link>
            </li>
            <li style={{margin: "20px 0"}}>
              <NavigationLink to ="/notifications" style={MyLink}>🔔 Notifications</NavigationLink>
            </li>
            <li style={{margin: "20px 0"}}>
              <Link to ="/bookmarks" style={MyLink}>📚 Bookmarks</Link>
            </li>
            {/* <li style={{margin: "20px 0"}}>
              <Link to ="/tweet/:tweetId" style={{ textDecoration: 'none' }}>Tweet</Link>
            </li> */}
          </MyUl>
          <MyButton>Meow</MyButton>
        </NavBar>

        <ContentContainer>
        <Switch>
          <Route path="/bookmarks">
            <Bookmarks />
          </Route>

          <Route path="/tweet/:tweetId">
            <TweetDetails />
          </Route>

          <Route path="/notifications">
            <Notifications />
          </Route>

          <Route path="/:profileId">
            <Profile />
          </Route>

          <Route path="/">
            <HomeFeed />
          </Route>

          <Route path="/*" render={() => <div>404</div>} />
        </Switch>
        </ContentContainer>
      </MyCentre>
    </Router>
  )
};

//-------------------------------- STYLES ---------------------------------

const MyCentre = styled.div`
  background: rgb(63,171,251);
  background: linear-gradient(0deg, rgba(63,171,251,1) 0%, rgba(198,70,252,1) 100%);

  display: flex;
  justify-content: center;
`;

const MyLogo = styled.div`
  text-align: center;
`;

// MAKE THE NAV BAR ALWAYS PRESENT EVEN WHEN SCROLLING.
const NavBar = styled.nav`
  background-color: rgba(255, 255, 255, 0.3);
  padding: 15px;
`;

const MyButton = styled.button`
  height: 40px;
  width: 100%;
  color: white;
  background-color: magenta;
  border-radius: 30px;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const ContentContainer = styled.div`
  background-color: white;
  width 70%;
`;

const MyUl = styled.ul`
  list-style-type: none;
  margin-right: 40px;
`;

const NavigationLink = styled(NavLink)`
  color: black;
  textDecoration: none;
  fontWeight: bold;

  &.active {
    color: ${COLORS.primary};
  }

  &:hover {
    cursor: 'pointer',
    color: 'magenta',
  }
`;

const MyLink = {
  color: 'black',
  textDecoration: 'none',
  fontWeight: 'bold',

  // &:hover {
  //   cursor: 'pointer',
  //   color: 'magenta',
  // }
};


  // position: absolute;
  // top: 0;
  // bottom: 0;
  // left: 0;
  // right: 0;
  // margin: auto;

// const Wrapper = styled(UnstyledButton)`
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   outline: none;

//   &:after {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     border-radius: 50%;
//     opacity: 0;
//     background-color: ${p => p.circleColor};
//   }

//   &:focus:after,
//   &:hover:after {
//     opacity: 0.12;
//   }
// `;

//-------------------------------- EXPORTS --------------------------------

export default App;
