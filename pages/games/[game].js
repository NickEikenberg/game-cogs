import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Header from '../../src/components/Header/Header';
import GameImage from '../../src/components/Games/GameImage';
import Footer from '../../src/components/Footer/Footer';

const Game = () => {
  const router = useRouter();
  const { game } = router.query;
  let [currentGame, setCurrentGame] = useState();

  useEffect(() => {
    const getGame = () => {
      let data = `fields name, cover.image_id, summary,rating,storyline,screenshots, artworks;\nwhere id = ${game};\n`;

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
    <div className="h-screen bg-gray-50">
      <Header />
      {currentGame ? (
        <div className="m-2 flex w-1/2">
          {/* {JSON.stringify(currentGame[0])} */}
          <div>
            <GameImage game={currentGame[0]} />
          </div>
          <div className="w-1/2 text-xs">
            <p>{currentGame[0].summary}</p>
          </div>
        </div>
      ) : (
        <h1>{`There doesn't seem to be anything here :(`}</h1>
      )}
      <Footer />
    </div>
  );
};

export default Game;
