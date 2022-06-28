import { useState } from "react";
import PropTypes from "prop-types";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  Menu,
  MenuItem,
  MenuLink,
} from "./Navbar.style";

import BurgerIcon from "./BurgerIcon";

const NavMenuLink = ({ page = "" }) => {
  let pageLink = `/${page}`;
  let pageLabel = page.charAt(0).toUpperCase() + page.slice(1);
  return (
    <MenuItem>
      <MenuLink to={pageLink}>{pageLabel}</MenuLink>
    </MenuItem>
  );
};

const Navbar = ({ pages, displayHomeButton = true }) => {
  const [openNav, setOpenNav] = useState(false);
  // const [currentPage, setCurrentPage] = useState('');

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            Mixer
          </NavLogo>
          <Menu showMenu={openNav} onClick={() => setOpenNav(false)}>
            {pages.map((page, key) => (
              <NavMenuLink key={key} page={page} />
            ))}
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

NavMenuLink.propTypes = {
  page: PropTypes.string,
};

export default Navbar;
