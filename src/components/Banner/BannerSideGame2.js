import React from 'react';
import Image from 'next/image';

const BannerSideGame2 = ({ image, text }) => {
  return (
    <div className="relative">
      <Image
        src="https://images.igdb.com/igdb/image/upload/t_cover_big/co1owa.png"
        alt={text}
        width={1920}
        height={1080}
      ></Image>
      <p className="absolute bottom-0 bg-black bg-opacity-50">{text}</p>
    </div>
  );
};

export default BannerSideGame2;
