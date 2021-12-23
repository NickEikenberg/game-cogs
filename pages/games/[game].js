import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { UserContext } from '../_app';
import Header from '../../src/components/Header/Header';
import GameImage from '../../src/components/Games/GameImage';
import Screenshots from '../../src/components/Games/Screenshots';
import Artwork from '../../src/components/Games/Artwork';
import Platforms from '../../src/components/Games/Platforms';
import Footer from '../../src/components/Footer/Footer';

const Game = () => {
  const { currentUser } = useContext(UserContext);

  const router = useRouter();
  const { game } = router.query;
  const [currentGame, setCurrentGame] = useState();
  const [gameArtworks, setGameArtworks] = useState();
  const [gameScreenshots, setGameScreenshots] = useState();
  const [platforms, setPlatforms] = useState();

  useEffect(() => {
    const getGame = () => {
      let data = `fields name, cover.image_id, summary,rating,storyline,screenshots.url, platforms.name, release_dates.human, storyline, artworks.url;\nwhere id = ${game};\n`;

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
          console.log(response.data);
          const { artworks, screenshots, platforms } = response.data[0];

          setGameArtworks(artworks);
          setGameScreenshots(screenshots);
          setPlatforms(platforms);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getGame();
  }, [game]);

  //TODO TURN THESE THREE FUNCTIONS INTO ONE

  const addGameToList = (listName) => {
    // const axios = require('axios');
    // const FormData = require('form-data');
    // let data = new FormData();
    // data.append('email', currentUser.email);
    // data.append(listName, currentGame[0].id);

    // let config = {
    //   method: 'patch',
    //   url: `http://localhost:8000/api/useraccount/${currentUser.id}/games`,

    //   data: data,
    // };

    // axios(config)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    return;
  };

  // const addToCollection = () => {
  //   if (currentUser.collection) {
  //     if (currentUser.collection.includes(currentGame[0].id)) {
  //       console.log('game already in collection');
  //     } else {
  //       currentUser.collection += ',' + currentGame[0].id + ',';
  //       console.log('game added');
  //     }
  //   }
  // };

  // const addToForSale = () => {
  //   if (currentUser.forsale) {
  //     if (currentUser.forsale.includes(currentGame[0].id)) {
  //       console.log('Game already for sale');
  //     } else {
  //       currentUser.forsale += ',' + currentGame[0].id + ',';
  //       console.log('game now for sale');
  //     }
  //   }
  // };

  // const addToWantlist = () => {
  //   if (currentUser.wantlist) {
  //     if (currentUser.wantlist.includes(currentGame[0].id)) {
  //       console.log('Game already for in your Want List');
  //     } else {
  //       currentUser.wantlist += ',' + currentGame[0].id + ',';
  //       console.log('game now in want list');
  //     }
  //   }
  // };

  return (
    <div className="bg-gray-50 flex flex-col">
      <Header />
      {currentGame ? (
        <div className="flex">
          <div className="m-2 flex flex-col w-2/3" id="game-main">
            <div className="flex">
              <div className="m-2">
                <GameImage game={currentGame[0]} />
              </div>
              <div className="w-2/3 text-xs m-2">
                <p>{currentGame[0].summary}</p>
              </div>
            </div>
            <div className="my-4">
              <h1>RELEASE DATE</h1>
              <p className="text-sm">{currentGame[0].release_dates[0].human}</p>
            </div>
            {platforms && <Platforms platforms={platforms} />}
          </div>

          <div className="w-1/3 m-2" id="game-stats">
            <div className="text-left font-bold border-b-2">
              <h1>Info for {currentGame[0].name}</h1>
            </div>
            <div className="flex space-x-2 m-1 justify-evenly">
              <button onClick={() => addGameToList('collection')}>
                Add to Collection
              </button>
              <button onClick={() => addGameToList('wantlist')}>
                Add to Wantlist
              </button>
            </div>

            <div className="text-left font-bold border-b-2">
              <h1 className="flex justify-between items-center">
                Marketplace{' '}
                <span className="font-thin text-xs">
                  27 for sale from $28.99
                </span>
              </h1>
            </div>
            <div className="flex space-x-2 m-1 justify-evenly">
              <button>Find a Copy</button>
              <button onClick={() => addGameToList('forsale')}>
                Sell Your Copy
              </button>
            </div>

            <div className="text-left font-bold border-b-2">
              <h1 className="flex justify-between items-center">Statistics</h1>
            </div>
            <div className="flex flex-col m-1">
              <p>
                Have: <span className="text-blue-600">306</span>
              </p>
              <p>
                Want: <span className="text-blue-600">306</span>
              </p>
            </div>

            <div className="text-left font-bold border-b-2">
              <h1 className="flex justify-between items-center">Screenshots</h1>
              {gameScreenshots && (
                <Screenshots screenshots={gameScreenshots || []} />
              )}
            </div>

            <div className="text-left font-bold border-b-2">
              <h1 className="flex justify-between items-center">Artwork</h1>
              {gameArtworks && <Artwork artworks={gameArtworks || []} />}
            </div>
          </div>
        </div>
      ) : (
        <h1>{`Loading...`}</h1>
      )}
      <Footer />
    </div>
  );
};

export default Game;
