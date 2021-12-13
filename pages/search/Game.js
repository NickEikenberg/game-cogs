import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Game = ({ game }) => {
  return (
    <div className="m-2">
      <Link href={`/games/${game.id}`} passHref>
        <Image
          src={
            game.hasOwnProperty('cover')
              ? `https://images.igdb.com/igdb/image/upload/t_1080p/${game.cover.image_id}.jpg`
              : `https://images.igdb.com/igdb/image/upload/t_cover_big/nocover.png`
          }
          alt="game cover"
          width={500}
          height={750}
        ></Image>
      </Link>
      <Link href="/" passHref>
        <button>{game.name}</button>
      </Link>
      {JSON.stringify(game.cover)}
    </div>
  );
};

export default Game;
