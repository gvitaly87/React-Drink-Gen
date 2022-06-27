import { useState } from "react";
import PropTypes from "prop-types";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  Menu,
  MenuItem,
} from "./Navbar.style";

import BurgerIcon from "./BurgerIcon";

const Navbar = ({ pages, displayHomeButton = true }) => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            Mixer
          </NavLogo>
          <Menu showMenu={openNav} onClick={() => setOpenNav(false)}>
            <MenuItem></MenuItem>
          </Menu>
        </NavbarContainer>
        <BurgerIcon open={openNav} setOpen={setOpenNav}></BurgerIcon>
      </Nav>
    </>
  );
};

Navbar.propTypes = {
  pages: PropTypes.array.isRequired,
  displayHomeButton: PropTypes.bool,
};

export default Navbar;
