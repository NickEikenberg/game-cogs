import React from 'react';
import Image from 'next/image';

const GameImage = ({ game }) => {
  return (
    <div>
      <Image
        src={
          game.hasOwnProperty('cover')
            ? `https://images.igdb.com/igdb/image/upload/t_1080p/${game.cover.image_id}.jpg`
            : `https://images.igdb.com/igdb/image/upload/t_cover_big/nocover.png`
        }
        alt={game.name}
        width={500}
        height={750}
      ></Image>
    </div>
  );
};

export default GameImage;
