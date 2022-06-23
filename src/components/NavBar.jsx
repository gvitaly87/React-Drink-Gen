import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SplitScreen } from "./SplitScreen";

import LogoImage from "../assets/logo.svg";

const NavBarContainer = styled.nav`
  width: 100vw;
  height: 80px;
  background-color: black;
  display: flex;
  flex-direction: column;
`;

const NavBarLinkContainer = styled.div`
  display: flex;
`;

const NavBarLink = styled(Link)`
  color: white;
  margin: 10px;
  font-family: Ariel, Helvetica, sans-serif;
  text-decoration: none;
`;

// const RightNavigation = () => {
//   return <p>Right</p>;
// };

const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;

export const NavBar = () => {
  const [displayNavBarLinks, setDisplayNavBarLinks] = useState(false);

  return (
    <NavBarContainer>
      <SplitScreen leftWeight={1} rightWeight={3}>
        <Logo src={LogoImage}></Logo>
        <NavBarLinkContainer>
          <NavBarLink to="/">Home</NavBarLink>
          <NavBarLink to="/gallery">Gallery</NavBarLink>
        </NavBarLinkContainer>
      </SplitScreen>
    </NavBarContainer>
  );
};
