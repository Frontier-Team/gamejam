import { useEffect, useState } from "react";
import {
  AnimatedLink,
  CloseIcon,
  HamburgerIcon,
  HomeLink,
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
  const [activeTab, setActiveTab] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const getLinkCls = (pathname: string) => {
    return activeTab === pathname ? "active-link" : "";
  };

  const getHomeLinkCls = (pathname: string) => {
    return activeTab === pathname ? "active-home-link" : "";
  };

  useEffect(() => {
    const isEdge = () => /Edg/.test(navigator.userAgent);
    const handlePageShow = (event: PageTransitionEvent) => {
      if (isEdge() && event.persisted) {
        window.location.reload();
      }
    };

    const updateActiveTab = () => {
      const currentPath = window.location.hash.replace("#", "") || "/";
      setActiveTab(currentPath);
    };

    window.addEventListener("hashchange", updateActiveTab);
    window.addEventListener("pageshow", handlePageShow);
    updateActiveTab();
    return () => {
      window.removeEventListener("hashchange", updateActiveTab);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  return (
    <NavContainer>
      <HomeLink
        href="/"
        onClick={() => setActiveTab("/")}
        className={getHomeLinkCls("/")}
      >
        GAMEJAM DUNDEE
      </HomeLink>
      <NavList>
        <NavItem>
          <AnimatedLink
            to='/'
            onClick={() => setActiveTab("/")}
            className={getLinkCls("/")}
          >
            Home
          </AnimatedLink>
        </NavItem>
        <NavItem>
          <AnimatedLink to='/schedule' onClick={() => setActiveTab('/schedule')} className={getLinkCls('/schedule')}>Schedule</AnimatedLink>
        </NavItem>
        <NavItem>
          <AnimatedLink
            to="/accessibility"
            onClick={() => setActiveTab("/accessibility")}
            className={getLinkCls("/accessibility")}
          >
            Accessibility
          </AnimatedLink>
        </NavItem>
        <NavItem>
          <AnimatedLink
            to="/speakers"
            onClick={() => setActiveTab("/speakers")}
            className={getLinkCls("/speakers")}
          >
            Speakers
          </AnimatedLink>
        </NavItem>
        <NavItem>
          <AnimatedLink
            to='/conduct'
            onClick={() => setActiveTab("/conduct")}
            className={getLinkCls("/conduct")}
          >
            Conduct
          </AnimatedLink>
        </NavItem>
        <NavItem>
          <AnimatedLink
            to="/map"
            onClick={() => setActiveTab("/map")}
            className={getLinkCls("/map")}
          >
            Map
          </AnimatedLink>
        </NavItem>
        <NavItem>
          <AnimatedLink
            to='/game'
            onClick={() => setActiveTab("/game")}
            className={getLinkCls("/game")}
          >
            Game
          </AnimatedLink>
        </NavItem>
      </NavList>
      <HamburgerIcon onClick={toggleSidebar}>&#9776;</HamburgerIcon>
      <Sidebar isOpen={isSidebarOpen}>
        <CloseIcon onClick={toggleSidebar}>&times;</CloseIcon>
        <SidebarList>
          <SidebarItem>
            <SidebarLink to="/" onClick={toggleSidebar}>
              Home
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to='/schedule' onClick={toggleSidebar}>
              Schedule
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="/accessibility" onClick={toggleSidebar}>
              Accessibility
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="/speakers" onClick={toggleSidebar}>
              Speakers
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to='/conduct' onClick={toggleSidebar}>
              Conduct
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="/map" onClick={toggleSidebar}>
              Map
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to='/game' onClick={toggleSidebar}>
              Game
            </SidebarLink>
          </SidebarItem>
        </SidebarList>
      </Sidebar>
    </NavContainer>
  );
};
