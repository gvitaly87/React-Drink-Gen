import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    height: 100vh;
    text-rendering: optimizeLegibility;
    font-family:  ${({ theme }) => theme.textFont};
  }

  
  h1, h2, h3, h4, h5, h6 {
        font-family:  ${({ theme }) => theme.headingFont};
  }

  a, p, span, li {
    font-family: ${({ theme }) => theme.textFont};
  }

  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;

  }

  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
  }

  div {
    text-align: center;
  }
  small {
    display: block;
  }
  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 50px;
  max-width: 1300px;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0 10px;
  }
  @media (max-width: ${({ theme }) => theme.tablet}) {
    padding: 0 30px;
  }
  @media (min-width: ${({ theme }) => theme.laptop}) {
    max-width: 1500px;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    max-width: 1800px;
    padding: 0 30px;
  }
`;
