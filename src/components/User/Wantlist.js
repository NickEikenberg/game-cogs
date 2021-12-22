import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../../../pages/_app';
import Game from '../../../pages/search/Game';
import { RiArrowDownSFill } from 'react-icons/ri';

const Wantlist = () => {
  const { currentUser } = useContext(UserContext);
  const [wantlist, setWantlist] = useState([]);
  const [hideList, setHideList] = useState(true);

  useEffect(() => {
    const gameIdArray = currentUser.wantlist.split(',');
    const userWantList = gameIdArray.filter((x) => x !== '');

    const getWantlistGames = () => {
      let data = `fields name, cover.image_id;\nsort rating desc;\nwhere id = (${userWantList.join(
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
          setWantlist(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getWantlistGames();
  }, [currentUser]);

  return (
    <div>
      <div className="flex">
        <h1 className="text-3xl">Want List</h1>
        <button onClick={() => setHideList(!hideList)} className="text-3xl">
          <RiArrowDownSFill />
        </button>
      </div>

      {hideList && (
        <div className="flex flex-wrap">
          {currentUser.wantlist.length > 0 ? (
            wantlist.map((game) => {
              return (
                <div key={game.id} className="w-1/4">
                  <Game game={game} />
                </div>
              );
            })
          ) : (
            <h1>
              Your Want List is empty. Search for a game to add it to this
              section.
            </h1>
          )}
        </div>
      )}
    </div>
  );
};

export default Wantlist;
