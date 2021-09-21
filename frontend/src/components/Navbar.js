import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ShopifyLogo from "../assets/Shopify-Logo.wine.svg";
import { useAuth, logout } from "../auth";

const Navbar = () => {
  const [logged] = useAuth();

  const LoggedInLinks = () => {
    return (
      <>
        <Link to="/" style={TextStyle} onClick={() => logout()}>
          Logout
        </Link>

        <Link to="/images" style={TextStyle}>
          Images
        </Link>
      </>
    );
  };

  const LoggedOutLinks = () => {
    return (
      <>
        <Link to="/" style={TextStyle}>
          Home
        </Link>

        <Link to="/signup" style={TextStyle}>
          Sign Up
        </Link>

        <Link to="/login" style={TextStyle}>
          Login
        </Link>
      </>
    );
  };

  return (
    <NavContainer>
      <img src={ShopifyLogo} alt="shopify" />
      <LinkWrapper>
        {logged ? <LoggedInLinks /> : <LoggedOutLinks />}
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
  justify-content: space-evenly;
  align-items: center;
  margin-right: 2rem;
`;

const TextStyle = {
  textDecoration: "none",
  color: "white",
  fontSize: "1.5rem",
};

export default Navbar;
