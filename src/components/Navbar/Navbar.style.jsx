import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../styles/global";
import LogoIcon from "../../assets/logo.svg";

const handleSize = (size, largeOption, mediumOption, smallOption) => {
  switch (size) {
    case "large":
      return largeOption;
    case "small":
      return smallOption;
    default:
      return mediumOption;
  }
};

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 999;

  height: ${({ theme }) =>
    handleSize(theme.navbarSize, "80px", "60px", "40px")};

  display: flex;
  justify-content: center;
  align-items: center;

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
  font-size: ${({ theme }) =>
    handleSize(theme.navbarSize, "2.5rem", "2rem", "1.5rem")};
  font-weight: 800;

  cursor: pointer;

  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.08);
    color: ${({ theme }) => theme.accentOrange};
  }
`;

export const NavIcon = styled.div`
  background-image: url(${LogoIcon});
  margin-right: 0.8rem;

  width: ${({ theme }) => handleSize(theme.navbarSize, "70px", "53px", "35px")};
  height: ${({ theme }) =>
    handleSize(theme.navbarSize, "70px", "53px", "35px")};

  transition: all 0.5 ease;
  &:hover {
    transform: rotate(360deg);
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    display: flex;
    flex-direction: column;

    position: absolute;
    top: ${({ theme }) => handleSize(theme.navbarSize, "80px", "60px", "40px")};
    left: ${({ showMenu }) => (showMenu ? "0" : "-100%")};

    width: 100%;
    height: 100vh;
    padding: 0;

    background: linear-gradient(rgba(68, 68, 68, 0.3), rgba(68, 68, 68, 0.8));
    transition: all 0.5s ease;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  height: ${({ theme }) =>
    handleSize(theme.navbarSize, "80px", "60px", "40px")};

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const MenuLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  text-decoration: none;
  font-size: ${({ theme }) =>
    handleSize(theme.navbarSize, "1.2rem", "1.1rem", "1rem")};
  color: ${({ theme }) => theme.secondaryLight};
  background-color: ${({ theme, selected }) =>
    selected ? theme.primaryDark : "transparent"};

  padding: 1rem 2rem;
  height: 100%;

  transition: all 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.accentOrange};
  }
  &:active {
    color: ${({ theme }) => theme.accentYellow};
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    display: block;
    padding: 3rem;
    text-align: center;
    transition: all 0.2s ease;
  }
`;
