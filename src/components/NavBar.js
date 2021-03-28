import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Cart } from '@styled-icons/bootstrap/Cart';

const NavBarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2em;
  padding-left: 4em;
  background-color: rgba(234, 237, 237, 0.9);
`;

const Title = styled.div`
  font-family: 'Press Start 2P', cursive;
  font-size: 4em;
  border: solid 5px;
`;

const NavLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  margin-right: 3em;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 2em;
  margin-top: 0.5em;
  & svg {
    //margin-top: -0.5em;
  }
  & span {
    font-size: 0.7em;
    margin-left: -1.5em;
  }
`;

const NavBar = ({ cartSize }) => {
  return (
    <NavBarContainer>
      <Title>
        <Link to='/'>RetroGames</Link>
      </Title>
      <NavLinksWrapper>
        <NavLink to='/store'>Shop</NavLink>
        <NavLink to='/cart'>
          <Cart width='1.7em' />
          <span>{cartSize}</span>
        </NavLink>
      </NavLinksWrapper>
    </NavBarContainer>
  );
};

export default NavBar;
