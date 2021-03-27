import { Link } from 'react-router-dom';

import styled from 'styled-components';

const NavBarContainer = styled.div`
  display: flex;
  font-family: 'Press Start 2P', cursive;
  justify-content: space-between;
  margin-left: 4em;
`;

const Title = styled.h1`
  font-size: 4em;
`;

const NavLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin-right: 4em;
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <Title>RetroGames</Title>
      <NavLinksWrapper>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/store'>Shop</NavLink>
        <NavLink to='/cart'>Cart</NavLink>
      </NavLinksWrapper>
    </NavBarContainer>
  );
};

export default NavBar;
