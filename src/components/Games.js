import styled from 'styled-components';
import Game from './Game';

const StoreWrapper = styled.div`
  display: flex;
  margin: 3em;
  margin-top: 10em;
`;

const StoreNav = styled.div`
  min-width: 15em;
  height: fit-content;
  padding: 1em;
  padding-top: 2em;
  padding-bottom: 5em;
  background-color: rgba(234, 237, 237, 0.9);
`;

const GamesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-left: 1em;
  background-color: rgba(234, 237, 237, 0.9);
`;

const Games = ({ gameList, addToCart }) => {
  // const getAuthToken = async () => {
  //   const CLIENT_ID = 'evknl888erg1xzt70stxxpd2b1hkq8';
  //   const CLIENT_SECRET = '5qj3ns8ms1hukiv6sv1737wgar8hp2';
  //   const url = `https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`;
  //   const res = await fetch(url, {
  //     method: 'POST',
  //   });
  //   const data = await res.json();
  //   return data.access_token;
  // };

  // const fetchGameData = async () => {
  //   const CLIENT_ID = 'evknl888erg1xzt70stxxpd2b1hkq8';
  //   const access_token = 'vvu0euen5xrzwcic7z4yn327p9wpgx';
  //   const endpoint = 'games'
  //   const path = `/v4/${endpoint}`
  //   const baseUrl = `https://api.igdb.com`;
  //   const res = await fetch(`${baseUrl}${path}`, {
  //     method: 'POST',
  //     header: {
  //       'Client-ID': CLIENT_ID,
  //       'Authorization': `Bearer ${access_token}`,
  //       'Accept': 'application/json',
  //     },
  //     body: 'fields *;',
  //   });
  //   const data = await res.json();
  //   return data;
  // };

  return (
    <StoreWrapper>
      <StoreNav>
        <ul>
          GAMES
          <li>NES</li>
          <li>SNES (COMMING SOON)</li>
          <li>N64 (COMMING SOON)</li>
          <li>GAMECUBE (COMMING SOON)</li>
        </ul>
      </StoreNav>
      <GamesContainer>
        {gameList.map((game) => {
          return (
            <Game
              key={game.id}
              id={game.id}
              game={game.game}
              art={game.box_art}
              price={game.price}
              addToCart={addToCart}
            />
          );
        })}
      </GamesContainer>
    </StoreWrapper>
  );
};

export default Games;
