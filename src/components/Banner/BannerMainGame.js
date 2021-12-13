import React from 'react';
import Image from 'next/image';

const BannerMainGame = ({ image, text }) => {
  return (
    <div id="main-game" className="w-3/4 relative">
      <Image src={image} width={1920} height={1080} alt={text}></Image>
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 w-full text-2xl h-1/6 flex items-center p-2">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default BannerMainGame;
