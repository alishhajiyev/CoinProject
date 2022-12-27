import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Container,Logo, Hamburger, Close, Main } from "./HeaderStyles";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [toggle, setToggle] = useState(false);
  const closeMenu = () => {
    setToggle(false);
  };
  return (
    <Container>
      <Main>
        <Logo to="/">
          <img height={"40px"} style={{"borderRadius": "10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSILcWyBGbjCc61e2NVwKAPPfscF1r3Yf2Stg&usqp=CAU" alt="coin"></img>
        </Logo>
        {!isMobile ? (
          <>
            <Navbar closeMenu={closeMenu} />
          </>
        ) : toggle ? (
          <>
            <Close onClick={() => setToggle(!toggle)} />
            <Navbar closeMenu={closeMenu} />
          </>
        ) : (
          <>
            <Hamburger onClick={() => setToggle(!toggle)} />
          </>
        )}
      </Main>
    </Container>
  );
};

export default Header;
