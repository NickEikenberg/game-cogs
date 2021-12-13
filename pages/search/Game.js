import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Game = ({ game }) => {
  return (
    <div className="m-2">
      <Link href={`/games/${game.id}`} passHref>
        <Image
          src="https://images.igdb.com/igdb/image/upload/t_cover_big/nocover.png"
          alt="game cover"
          width={500}
          height={750}
        ></Image>
      </Link>
      <Link href="/" passHref>
        <button>{game.name}</button>
      </Link>
    </div>
  );
};

export default Game;
