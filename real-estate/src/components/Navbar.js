import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { FaBars } from "react-icons/fa";

export const Nav = styled.div`
  padding: 18px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export const Logo = styled(Link)`
  color: #fff;
  font-size: 28px;
  font-weight: 800;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  font-style: italic;
`;

export const MenuBars = styled(FaBars)`
  display: none;
  cursor: pointer;
  z-index: 50;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    color: #fff;
    font-size: 25px;
    font-weight: bold;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuLinks = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 15px;
  padding: 0 15px;
  margin-left: 5px;
  font-weight: bold;
`;
export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
function Navbar({ toggle }) {
  return (
    <Nav>
      <Logo to="/">VILLA'S</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
}

export default Navbar;
