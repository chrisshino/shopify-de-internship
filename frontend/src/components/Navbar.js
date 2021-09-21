import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ShopifyLogo from "../assets/Shopify-Logo.wine.svg";


const Navbar = () => {
  return (
    <NavContainer>
      <img src={ShopifyLogo} alt="shopify"/>
      <LinkWrapper>
        <Link to="/" style={TextStyle}>
          Home
        </Link>

        <Link to="/signup" style={TextStyle}>
          Sign Up
        </Link>

        <Link to="/login" style={TextStyle}>
          Login
        </Link>

        <Link to="/images" style={TextStyle}>
          Images
        </Link>
      </LinkWrapper>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  display: flex;
  background-color: #5e8e3e;
  width: 100%;
  justify-content: space-around;
  height: 100px;
`;

const LinkWrapper = styled.ul`
  display: flex;
  width: 60%;
  justify-content: space-between;
  align-items: center;
  margin-right: 2rem;
`;

const TextStyle = {
  textDecoration: "none",
  color: "white",
  fontSize: "1.5rem",
};

export default Navbar;
