import React from 'react';
import Game from '../Trending/Game';

const Expensive = () => {
  return (
    <section className="p-6">
      <h1 className="text-2xl">Most Expensive Games Sold This Month</h1>
      <div className="flex flex-wrap" id="games">
        <Game
          img={'https://images.igdb.com/igdb/image/upload/t_1080p/co1ydc.png'}
          name={'Marvel Vs. Capcom 2: New Age of Heroes'}
        />
        <Game
          img={'https://images.igdb.com/igdb/image/upload/t_1080p/co1ovs.png'}
          name={'Haunting Ground'}
        />
        <Game
          img={'https://images.igdb.com/igdb/image/upload/t_1080p/co31km.png'}
          name={'Kuon'}
        />
        <Game
          img={'https://images.igdb.com/igdb/image/upload/t_1080p/co1oxy.png'}
          name={'ObsCure'}
        />
        <Game
          img={'https://images.igdb.com/igdb/image/upload/t_1080p/co2ji2.png'}
          name={'Futurama'}
        />
        <Game
          img={'https://images.igdb.com/igdb/image/upload/t_1080p/co1ozi.png'}
          name={'Rule of Rose'}
        />
        <Game
          img={'https://images.igdb.com/igdb/image/upload/t_1080p/co2stk.png'}
          name={'God Hang'}
        />
        <Game
          img={'https://images.igdb.com/igdb/image/upload/t_1080p/co3dks.png'}
          name={'Berserk Millennium Empire Arc: Chapter of the Holy Demon War'}
        />
      </div>
    </section>
  );
};

export default Expensive;
