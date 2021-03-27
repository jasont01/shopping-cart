import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Game from './Game';

const GamesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 3em;
  margin-top: 10em;
`;

const Games = () => {
  const [gamesList, setGamesList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      setGamesList(await fetchData());
    };
    getList();
  }, []);

  const fetchData = async () => {
    const res = await fetch('./game_list.json');
    const data = await res.json();
    return data;
  };

  return (
    <GamesContainer>
      {gamesList.map((game, indx) => {
        return (
          <Game
            key={indx}
            id={indx}
            game={game.game}
            art={game.box_art}
            price={game.price}
          />
        );
      })}
    </GamesContainer>
  );
};

export default Games;
