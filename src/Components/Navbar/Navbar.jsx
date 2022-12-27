import React from "react";
import { Container, Items, Item } from "./NavbarStyles";
import SmallCart from "../SmallCart/SmallCart";

const Navbar = ({ closeMenu }) => {
  return (
    <Container>
      <Items>
        <Item to="/" onClick={() => closeMenu()}>
          All
        </Item>
        <Item to="/bullion" onClick={() => closeMenu()}>
          Bullion
        </Item>
        <Item to="/exclusive" onClick={() => closeMenu()}>
          Exclusive
        </Item>
        <Item to="/commemorative" onClick={() => closeMenu()}>
          Commemorative
        </Item>
        <Item to="/cart">
          <SmallCart />
        </Item>
      </Items>
    </Container>
  );
};

export default Navbar;
