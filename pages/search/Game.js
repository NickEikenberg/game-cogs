import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Game = ({ game }) => {
  const [currentGame, setCurrentGame] = useState();

  useEffect(() => {
    game !== undefined ? setCurrentGame(game) : null;
  }, [game]);

  return (
    <div className="m-2">
      <Link href={`/games/${currentGame.id}`} passHref>
        <Image
          src={
            currentGame.hasOwnProperty('cover')
              ? `https://images.igdb.com/igdb/image/upload/t_1080p/${currentGame.cover.image_id}.jpg`
              : `https://images.igdb.com/igdb/image/upload/t_cover_big/nocover.png`
          }
          alt="game cover"
          width={500}
          height={750}
          className="cursor-pointer"
        ></Image>
      </Link>
      <Link
        href={`/games/${currentGame.id}`}
        passHref
        className="cursor-pointer"
      >
        <button>{currentGame.name}</button>
      </Link>
    </div>
  );
};

export default Game;
