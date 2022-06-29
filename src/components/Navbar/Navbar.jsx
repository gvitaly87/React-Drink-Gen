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

const NavMenuLink = ({ page, currentPage, setCurrentPage }) => {
  let pageLink;
  let pageLabel;

  if (page) {
    pageLink = `/${page}`;
    pageLabel =
      page.charAt(0).toUpperCase() + page.slice(1).replace(/-/gi, " ");
  } else {
    // Default Case
    pageLink = "/";
    pageLabel = "Home";
  }

  return (
    <MenuItem>
      <MenuLink
        to={pageLink}
        selected={pageLink === currentPage}
        onClick={() => setCurrentPage(pageLink)}
      >
        {pageLabel}
      </MenuLink>
    </MenuItem>
  );
};

const Navbar = ({ pages, displayHomeButton = true }) => {
  const [openNav, setOpenNav] = useState(false);
  const [currentPage, setCurrentPage] = useState("");

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={() => setCurrentPage("")}>
            <NavIcon />
            Mixer
          </NavLogo>
          <Menu showMenu={openNav} onClick={() => setOpenNav(false)}>
            {displayHomeButton ? (
              <NavMenuLink
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            ) : (
              <></>
            )}
            {pages.map((page, key) => (
              <NavMenuLink
                key={key}
                page={page}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            ))}
          </Menu>
          <BurgerIcon open={openNav} setOpen={setOpenNav}></BurgerIcon>
        </NavbarContainer>
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
  currentPage: PropTypes.string.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Navbar;
