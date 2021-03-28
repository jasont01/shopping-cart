import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

const HomeWrapper = styled.div`
  margin-top: 60vh;
  text-align: center;
  font-size: 2em;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Link to='/store'>
        <Button>Enter Store</Button>
      </Link>
    </HomeWrapper>
  );
};

export default Home;
