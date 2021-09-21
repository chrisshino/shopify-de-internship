import React from "react";
import styled from "styled-components"
// import Link from "react-router-dom"
import shopifyLogo from '../assets/index.jpeg'


const NavContainer = styled.div`
  display: flex;
  background-color: lightGreen;
  width: 100%;
`;


const Navbar = () => {
  return(
    <NavContainer>
      <img src="../assets/index.jpeg" />
    </NavContainer>
  )
};

export default Navbar;
