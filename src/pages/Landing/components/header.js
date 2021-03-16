import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: #02020D;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index:10;
`;

const Logo = styled.h1`
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-align: center;
    margin-left: 2rem;
    display: inline;
    font-size: 1.25rem;

    color: var(--text-secondary);
    letter-spacing: 0.3ch;
    

    background: linear-gradient(90deg,#ff8a00,#F25F29);
    text-shadow: none;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  margin-right: 50px;

  li:nth-child(2) {
    margin: 0px 50px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;

const Link = styled.a`
  color: white;
  font-family: 'Lato', sans-serif;
  font-size: 1.25rem;
  text-decoration: none;

  :hover {
    text-decoration: none;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${props => (props.open ? "91vh" : 0)};
  width: 100vw;
  background: #05031F;
  transition: height 0.4s ease-in-out;
  z-index:10;

  @media (min-width: 769px) {
    z-index:10;
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  z-index:10;

  li {
    opacity: ${props => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
    z-index:10;
  }

  li:nth-child(2) {
    margin: 50px 0px;
    z-index:10;
  }
`;

const Header = () => {
  const [toggle, toggleNav] = useState(false);
  return (
    <>
      <Nav>
        <Logo>Data annotated</Logo>
        <Menu>
          <Item>
            <Link href="/">
              Home
            </Link>
          </Item>
          <Item>
            <Link href="/">
              Features
            </Link>
          </Item>
          <Item>
            <Link href="/login">
              Login
            </Link>
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <Link href="/">
              Home
            </Link>
          </Item>
          <Item>
            <Link href="/">
              Features
            </Link>
          </Item>
          <Item>
            <Link href="/login">
              Login
            </Link>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default Header;
