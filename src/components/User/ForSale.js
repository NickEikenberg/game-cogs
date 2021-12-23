import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../../../pages/_app';
import Game from '../Games/Game';
import { RiArrowDownSFill } from 'react-icons/ri';

const ForSale = () => {
  const { currentUser } = useContext(UserContext);
  const [forSaleData, setForSaleData] = useState([]);
  const [hideList, setHideList] = useState(true);

  useEffect(() => {
    const gameIdArray = currentUser.forsale.split(',');
    const forSale = gameIdArray.filter((x) => x !== '');
    const getForSaleGames = () => {
      let data = `fields name, cover.image_id;\nsort rating desc;\nwhere id = (${forSale.join(
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
          setForSaleData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getForSaleGames();
  }, [currentUser]);

  return (
    <div>
      <div className="flex">
        <h1 className="text-3xl">For Sale</h1>
        <button className="text-3xl" onClick={() => setHideList(!hideList)}>
          <RiArrowDownSFill />
        </button>
      </div>

      {hideList && (
        <div className="flex flex-wrap">
          {currentUser.forsale.length > 0 ? (
            forSaleData.map((game) => {
              return (
                <div key={game.id} className="w-1/4">
                  <Game game={game} />
                </div>
              );
            })
          ) : (
            <h1>
              You have no games listed for sale. Select a game from your
              collection to list it.
            </h1>
          )}
        </div>
      )}
    </div>
  );
};

export default ForSale;
