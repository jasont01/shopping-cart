import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import Cartridge from './Cartridge';

const GameContainer = styled.div`
  max-width: 230px;
  margin: 1.5em;
  margin-bottom: 3em;
  background-color: lightgrey;
  padding: 1em;
`;

const GameInfo = styled.div`
  text-align: center;
`;

const GameTitleWrapper = styled.div`
  margin-top: 2.5em;
  margin-bottom: 0;
  font-size: 1.1em;
  height: 2em;
`;

const GamePrice = styled.h4`
  margin-top: 0.5em;
  margin-bottom: 0.7em;
`;

const Game = (props) => {
  return (
    <GameContainer>
      <Cartridge coverart={props.art} />
      <GameInfo>
        <GameTitleWrapper>
          <Link to={`/Store/${props.id}`}>{props.game}</Link>
        </GameTitleWrapper>
        <GamePrice>${props.price}</GamePrice>
        <Button>Add To Cart</Button>
      </GameInfo>
    </GameContainer>
  );
};

export default Game;
