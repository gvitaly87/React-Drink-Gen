import styled from "styled-components";

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

export const StyledBurger = styled.button`
  position: absolute;
  top: ${({ theme }) => handleSize(theme.navbarSize, "20px", "15px", "10px")};
  right: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: ${({ theme }) =>
    handleSize(theme.navbarSize, "2rem", "1.5rem", "1rem")};
  height: ${({ theme }) =>
    handleSize(theme.navbarSize, "2rem", "1.5rem", "1rem")};
  padding: 0;

  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1000;

  &:focus {
    outline: none;
  }

  div {
    width: ${({ theme }) =>
      handleSize(theme.navbarSize, "2rem", "1.5rem", "1rem")};
    height: ${({ theme }) =>
      handleSize(theme.navbarSize, "0.25rem", "0.2rem", "0.15rem")};
    background: ${({ theme, open }) =>
      open ? theme.primaryDark : theme.primaryLight};
    border-radius: 10px;
    transition: all 0.5s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  @media (min-width: ${({ theme }) => theme.tablet}) {
    display: none;
  }
`;
