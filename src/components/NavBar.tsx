import { useEffect, useState } from 'react';
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
} from './NavBar.styled';

export const NavBar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const getLinkCls = (pathname: string) => {
    return (activeTab === pathname ? 'active-link' : '')
  };

  useEffect(() => {
    const isEdge = () => /Edg/.test(navigator.userAgent);
    const handlePageShow = (event: PageTransitionEvent) => {
      if (isEdge() && event.persisted) {
        window.location.reload();
      }
    };

    const updateActiveTab = () => {
      const currentPath = window.location.hash.replace('#', '') || '/';
      setActiveTab(currentPath);
    };
  
    window.addEventListener('hashchange', updateActiveTab);
    window.addEventListener('pageshow', handlePageShow);
    updateActiveTab();
    return () => {
      window.removeEventListener('hashchange', updateActiveTab);
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, []);

  return (
    <NavContainer>
      <HamburgerIcon onClick={toggleSidebar}>&#9776;</HamburgerIcon>
      <NavList>
        <NavItem>
          <AnimatedLink to='/' onClick={() => setActiveTab('/')} className={getLinkCls('/')}>Home</AnimatedLink>
        </NavItem>
        <NavItem>
          <AnimatedLink to='/about' onClick={() => setActiveTab('/about')} className={getLinkCls('/about')}>About</AnimatedLink>
        </NavItem>
        <NavItem>
          <AnimatedLink to='/resources' onClick={() => setActiveTab('/resources')} className={getLinkCls('/resources')}>Resources</AnimatedLink>
        </NavItem>
        <NavItem>
          <AnimatedLink to='/speakers' onClick={() => setActiveTab('/speakers')} className={getLinkCls('/speakers')}>Speakers</AnimatedLink>
        </NavItem>
        <NavItem>
          <AnimatedLink to="/map">Map</AnimatedLink>
        </NavItem>
      </NavList>
      <Sidebar isOpen={isSidebarOpen}>
        <CloseIcon onClick={toggleSidebar}>&times;</CloseIcon>
        <SidebarList>
          <SidebarItem>
            <SidebarLink to='/' onClick={toggleSidebar}>
              Home
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to='/about' onClick={toggleSidebar}>
              About
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to='/resources' onClick={toggleSidebar}>
              Resources
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to='/speakers' onClick={toggleSidebar}>
              Speakers
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="/map" onClick={toggleSidebar}>
              Map
            </SidebarLink>
          </SidebarItem>
        </SidebarList>
      </Sidebar>
    </NavContainer>
  );
};
