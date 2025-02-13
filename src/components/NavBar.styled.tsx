import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.teal};
  padding: 2rem;
  width: 100%;
  position: relative;
`;

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const NavItem = styled.li`
  margin: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 1rem;
  }
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

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: block;
  }

  &:hover,
  &:focus {
 color: ${({ theme }) => theme.colors.lilac};
`;

export const Sidebar = styled.div<{ isOpen: boolean }>`
  z-index: 1;
  height: 100%;
  width: ${({ isOpen }) => (isOpen ? "220px" : "0")};
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.teal}CC;
  backdrop-filter: blur(10px);
  overflow-x: hidden;
  transition: 0.3s;
  padding-top: 60px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const CloseIcon = styled.div`
 color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 20px;
  right: 25px;
  font-size: 2rem;
  cursor: pointer;

  &:hover,
  &:focus {
 color: ${({ theme }) => theme.colors.lilac};
`;

export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SidebarItem = styled.li`
  text-align: center;
  margin: 1rem 0;
`;

export const SidebarLink = styled(Link)`
  color: ${({ theme }) => theme.colors.turquoise};
  text-decoration: none;
  font-family: "Pixelify Sans", sans-serif;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.lilac};
  }
`;
