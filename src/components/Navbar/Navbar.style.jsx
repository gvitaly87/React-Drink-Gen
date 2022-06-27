import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../styles/global";
import LogoIcon from "../../assets/logo.svg";

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 999;

  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.5rem;
  background: linear-gradient(rgba(68, 68, 68, 0.8), rgba(68, 68, 68, 0.3));
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;

  text-decoration: none;

  color: ${({ theme }) => theme.secondaryDark};
  font-size: 2.5rem;
  font-weight: 800;

  cursor: pointer;

  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.08);
  }
`;

export const NavIcon = styled.div`
  background-image: url(${LogoIcon});
  margin-right: 0.8rem;

  width: 75px;
  height: 75px;

  transition: all 0.5 ease;
  &:hover {
    transform: rotate(360deg);
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    display: flex;
    flex-direction: column;

    position: absolute;
    top: 80px;
    left: ${({ showMenu }) => (showMenu ? "0" : "-100%")};

    width: 100%;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.9);
    transition: all 0.5s ease;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  height: 80px;

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;
