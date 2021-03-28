import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from './Button';

const GameDetailWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 3em;
  background-color: rgba(234, 237, 237, 0.9);
  border-radius: 15px;
`;

const BoxArtWraper = styled.div`
  margin: 5em;
`;

const BoxArt = styled.img`
  max-width: 400px;
  height: auto;
`;

const GameDetails = styled.div`
  margin: 5em;
`;

const GameDetail = ({ match, addToCart }) => {
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setGameData(await fetchData(match.params.id));
    };
    getData();
  }, [match.params.id]);

  const fetchData = async (id) => {
    const res = await fetch('../game_list.json');
    const data = await res.json();
    return await data.find((entry) => entry.id === id);
  };

  return (
    <GameDetailWrapper>
      <BoxArtWraper>
        <BoxArt src={`../${gameData.box_art}`} alt='' />
      </BoxArtWraper>
      <GameDetails>
        <h1>{gameData.game}</h1>
        <p>Description...</p>
        <p>Screenshots...</p>
        <p>{gameData.price}</p>
        <Button id={gameData.id} onClick={addToCart}>
          Add To Cart
        </Button>
      </GameDetails>
    </GameDetailWrapper>
  );
};

export default GameDetail;
