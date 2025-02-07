import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.teal};
  padding: 2rem;
  width: 100%;
`;

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;
`;

export const NavItem = styled.li`
  margin: 0.5rem;
  flex-shrink: 0;
`;

export const AnimatedLink = styled(Link)`
  color: ${({ theme }) => theme.colors.teal};
  text-decoration: none;
  font-weight: bold;
  font-family: "Pixelify Sans", sans-serif;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.turquoise};
  border: 2px solid ${({ theme }) => theme.colors.turquoiseShade};
  box-shadow: 0 4px 0 ${({ theme }) => theme.colors.turquoiseShade},
    0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.lilac};
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.lilacShade};

    box-shadow: 0 4px 0 ${({ theme }) => theme.colors.lilacShade},
      0 4px 6px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1rem;
  }
`;
