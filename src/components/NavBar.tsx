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
  const [activeTab, setActiveTab] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const getLinkCls = (index: number) => {
    return (activeTab === index ? 'active-link' : '')
  };

  return (
    <NavContainer>
      <HamburgerIcon onClick={toggleSidebar}>&#9776;</HamburgerIcon>
      <NavList>
        <NavItem>
          <AnimatedLink to="/" onClick={() => setActiveTab(0)} className={getLinkCls(0)}>Home</AnimatedLink>
        </NavItem>
        <NavItem>
          <AnimatedLink to="/about" onClick={() => setActiveTab(1)} className={getLinkCls(1)}>About</AnimatedLink>
        </NavItem>
        <NavItem>
          <AnimatedLink to="/resources" onClick={() => setActiveTab(2)} className={getLinkCls(2)}>Resources</AnimatedLink>
        </NavItem>
        <NavItem>
          <AnimatedLink to="/speakers" onClick={() => setActiveTab(3)} className={getLinkCls(3)}>Speakers</AnimatedLink>
        </NavItem>
      </NavList>
      <Sidebar isOpen={isSidebarOpen}>
        <CloseIcon onClick={toggleSidebar}>&times;</CloseIcon>
        <SidebarList>
          <SidebarItem>
            <SidebarLink to="/" onClick={toggleSidebar} className={getLinkCls(0)}>
              Home
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="/about" onClick={toggleSidebar} className={getLinkCls(0)}>
              About
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="/resources" onClick={toggleSidebar} className={getLinkCls(0)}>
              Resources
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="/speakers" onClick={toggleSidebar} className={getLinkCls(0)}>
              Speakers
            </SidebarLink>
          </SidebarItem>
        </SidebarList>
      </Sidebar>
    </NavContainer>
  );
};
