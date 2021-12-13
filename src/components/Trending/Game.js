import React from 'react';
import Image from 'next/image';

const Game = ({ img, name }) => {
  return (
    <div className="flex flex-col w-1/4 px-2">
      <div>
        <Image src={img} alt="" width={500} height={750}></Image>
      </div>
      <div>
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default Game;
