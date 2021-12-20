import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../../../pages/_app';

const Collection = () => {
  const { currentUser } = useContext(UserContext);
  const gameIdArray = currentUser.collection.split(',');
  const collection = gameIdArray.filter((x) => x !== '');

  useEffect(() => {
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
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getCollectionGames();
  }, [collection]);

  return (
    <div>
      <h1 className="text-3xl">My Collection</h1>

      {currentUser.collection.length > 0 ? (
        collection.map((game) => <h1 key={game}>{game}</h1>)
      ) : (
        <h1>
          Your collection is empty. Search for a game to add it to your
          collection.
        </h1>
      )}
    </div>
  );
};

export default Collection;
