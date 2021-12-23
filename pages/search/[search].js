import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../../src/components/Header/Header';
import EmptySearch from './EmptySearch';
import Game from '../../src/components/Games/Game';
import axios from 'axios';

const Search = () => {
  const router = useRouter();
  const { search } = router.query;
  let [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const getGame = () => {
      let data = `search "${search}";\nfields name, cover.image_id;`;

      let config = {
        method: 'post',
        url: 'https://peaceful-tor-54406.herokuapp.com/https://api.igdb.com/v4/games',
        headers: {
          'Client-ID': 'dmlu2pmbd2wc14ke1ooh3on7cmnxr9',
          Authorization: 'Bearer yrehr7e8zvm73i51nafp0w0c8d74ra',
          'Content-Type': 'text/plain',
        },
        data: data,
      };

      axios(config)
        .then((response) => {
          setSearchData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getGame();
  }, [search]);

  return (
    <div>
      <Header />
      <h1>Results for {search} </h1>
      <div id="results" className="flex flex-wrap">
        {searchData.length > 0
          ? searchData.map((game) => {
              return (
                <div key={game.id} className="w-1/4">
                  <Game game={game} />
                </div>
              );
            })
          : null}
      </div>

      <div>{searchData.length > 0 ? null : <EmptySearch />}</div>
    </div>
  );
};

export default Search;
