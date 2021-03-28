import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import Cartridge from './Cartridge';

const GameContainer = styled.div`
  max-width: 230px;
  margin: 1.5em;
  margin-bottom: 3em;
  background-color: #f4f5f7;
  padding: 1em;
  padding-left: 3em;
  padding-right: 3em;
  //box-shadow: 5px 5px #888888;
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
      <Link to={`/Store/${props.id}`}>
        <Cartridge coverart={props.art} />
      </Link>
      <GameInfo>
        <GameTitleWrapper>
          <Link to={`/Store/${props.id}`}>{props.game}</Link>
        </GameTitleWrapper>
        <GamePrice>${props.price}</GamePrice>
        <Button id={props.id} onClick={props.addToCart}>
          Add To Cart
        </Button>
      </GameInfo>
    </GameContainer>
  );
};

export default Game;
