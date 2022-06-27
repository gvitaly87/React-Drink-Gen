import PropTypes from "prop-types";
import { StyledBurger } from "./BurgerIcon.style";

const BurgerIcon = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

BurgerIcon.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default BurgerIcon;
