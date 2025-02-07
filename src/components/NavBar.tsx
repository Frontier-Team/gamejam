import { AnimatedLink, NavContainer, NavItem, NavList } from "./NavBar.styled";

const NavBar: React.FC = () => {
  return (
    <NavContainer>
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
      </NavList>
    </NavContainer>
  );
};

export default NavBar;
