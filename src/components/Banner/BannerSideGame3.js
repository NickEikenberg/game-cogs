import React from 'react';
import Image from 'next/image';

const BannerSideGame3 = ({ image, text }) => {
  return (
    <div className="relative">
      <Image
        src="https://images.igdb.com/igdb/image/upload/t_original/ar4m5.jpg"
        alt={text}
        width={1920}
        height={1080}
      ></Image>
      <p className="absolute bottom-0 bg-black bg-opacity-50 w-full flex items-center p-2">
        {text}
      </p>
    </div>
  );
};

export default BannerSideGame3;
