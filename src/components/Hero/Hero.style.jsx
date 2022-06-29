import styled from "styled-components";
import HeroBgImage from "../../assets/hero_home.jpg";

export const HeroContainer = styled.main`
  background-image: linear-gradient(
      to top right,
      rgba(11, 10, 10, 0.38),
      rgba(11, 10, 10, 0.19)
    ),
    url(${HeroBgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 74vh;
  @media only screen and (max-width: 1600px) {
    height: 85vh;
  }
`;
