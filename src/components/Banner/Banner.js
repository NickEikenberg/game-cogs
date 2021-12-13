import React from 'react';
import Image from 'next/image';
import BannerMainGame from './BannerMainGame';
import BannerSideGame from './BannerSideGame';
import BannerSideGame2 from './BannerSideGame2';
import BannerSideGame3 from './BannerSideGame3';

const Banner = () => {
  return (
    <div className="bg-black text-white p-6 flex space-x-2">
      <BannerMainGame
        image={'https://images.igdb.com/igdb/image/upload/t_original/ar7to.jpg'}
        text={'Alan Wake 2 Announced'}
      />
      <div id="banner-games" className="w-1/4 space-y-2">
        <BannerSideGame
          image={
            'https://images.igdb.com/igdb/image/upload/t_original/ar85o.jpg'
          }
          text={'It Takes Two wins game of the year'}
        />
        <BannerSideGame2 text={'Killer 7, an underrated classic'} />
        <BannerSideGame3
          text={'Enter the world of Revachol in Disco Elysium'}
        />
      </div>
    </div>
  );
};

export default Banner;
