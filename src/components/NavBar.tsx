import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

const NavContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.teal};
  padding: 1rem;
  width: 100%;
`;

const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-right: 1rem;
  flex-shrink: 0;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-weight: bold;
  font-family: "Pixelify Sans", sans-serif;

  &:hover {
    color: ${({ theme }) => theme.colors.lilac};
  }

  /* Optional: reduce font-size on smaller screens for better fit */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.9rem;
  }
`;

const NavBar: React.FC = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <StyledLink to="/">🏠</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/about">About</StyledLink>
        </NavItem>
        {/* Add additional nav items as needed */}
      </NavList>
    </NavContainer>
  );
};

export default NavBar;
