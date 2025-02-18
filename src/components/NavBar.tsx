import { useState } from "react";
import {
  AnimatedLink,
  CloseIcon,
  HamburgerIcon,
  NavContainer,
  NavItem,
  NavList,
  Sidebar,
  SidebarItem,
  SidebarLink,
  SidebarList,
} from "./NavBar.styled";

export const NavBar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <NavContainer>
      <HamburgerIcon onClick={toggleSidebar}>&#9776;</HamburgerIcon>
      <NavList>
        <NavItem>
          <AnimatedLink to="/">Home</AnimatedLink>
        </NavItem>
        <NavItem>
          <AnimatedLink to="/about">About</AnimatedLink>
        </NavItem>
        <NavItem>
          <AnimatedLink to="/resources">Resources</AnimatedLink>
        </NavItem>
        <NavItem>
          <AnimatedLink to="/speakers">Speakers</AnimatedLink>
        </NavItem>
        <NavItem>
          <AnimatedLink to="/game">Game</AnimatedLink>
        </NavItem>
      </NavList>
      <Sidebar isOpen={isSidebarOpen}>
        <CloseIcon onClick={toggleSidebar}>&times;</CloseIcon>
        <SidebarList>
          <SidebarItem>
            <SidebarLink to="/" onClick={toggleSidebar}>
              Home
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="/about" onClick={toggleSidebar}>
              About
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="/resources" onClick={toggleSidebar}>
              Resources
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="/speakers" onClick={toggleSidebar}>
              Speakers
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="/game" onClick={toggleSidebar}>
              Speakers
            </SidebarLink>
          </SidebarItem>
        </SidebarList>
      </Sidebar>
    </NavContainer>
  );
};
