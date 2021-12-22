import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../../../pages/_app';
import Game from '../../../pages/search/Game';
import { RiArrowDownSFill } from 'react-icons/ri';

const Collection = () => {
  const { currentUser } = useContext(UserContext);
  const [collectionData, setCollectionData] = useState([]);
  const [hideCollection, setHideCollection] = useState(true);

  useEffect(() => {
    const gameIdArray = currentUser.collection.split(',');
    const collection = gameIdArray.filter((x) => x !== '');
    const getCollectionGames = () => {
      let data = `fields name, cover.image_id;\nsort rating desc;\nwhere id = (${collection.join(
        ', '
      )});\n`;

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
          setCollectionData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getCollectionGames();
  }, [currentUser]);

  return (
    <div>
      <div className="flex">
        <h1 className="text-3xl">My Collection</h1>
        <button
          className="text-3xl"
          onClick={() => setHideCollection(!hideCollection)}
        >
          <RiArrowDownSFill />
        </button>
      </div>
      {hideCollection && (
        <div className="flex flex-wrap">
          {currentUser.collection.length > 0 ? (
            collectionData.map((game) => {
              return (
                <div key={game.id} className="w-1/4">
                  <Game game={game} />
                </div>
              );
            })
          ) : (
            <h1>
              Your collection is empty. Search for a game to add it to your
              collection.
            </h1>
          )}
        </div>
      )}
    </div>
  );
};

export default Collection;
