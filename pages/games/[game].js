import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Header from '../../src/components/Header/Header';

const Game = () => {
  const router = useRouter();
  const { game } = router.query;
  let [currentGame, setCurrentGame] = useState();

  useEffect(() => {
    const getGame = () => {
      let data = `fields name, cover.image_id, summary,rating,storyline;\nwhere id = ${game};\n`;

      let config = {
        method: 'post',
        url: 'https://peaceful-tor-54406.herokuapp.com/https://api.igdb.com/v4/games/',
        headers: {
          'Client-ID': 'dmlu2pmbd2wc14ke1ooh3on7cmnxr9',
          Authorization: 'Bearer yrehr7e8zvm73i51nafp0w0c8d74ra',
          'Content-Type': 'text/plain',
        },
        data: data,
      };

      axios(config)
        .then((response) => {
          setCurrentGame(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getGame();
  }, [game]);

  return (
    <div>
      <Header />
      {JSON.stringify(currentGame)}
      {currentGame ? <h1>Show page for {currentGame[0].name}</h1> : null}
    </div>
  );
};

export default Game;
