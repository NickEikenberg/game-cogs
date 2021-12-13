import React, { useState, useEffect } from 'react';
import Game from './Game';

const Trending = () => {
  return (
    <section className="bg-black text-white p-6">
      <h1 className="text-2xl">Trending Releases</h1>
      <div className="flex flex-wrap" id="games">
        <Game
          img={'https://images.igdb.com/igdb/image/upload/t_1080p/co2lis.png'}
          name={'Def Jam: Fight For NY'}
        />
        <Game
          img={'https://images.igdb.com/igdb/image/upload/t_1080p/co1x77.png'}
          name={'Halo 2'}
        />
        <Game
          img={'https://images.igdb.com/igdb/image/upload/t_1080p/co2z8n.png'}
          name={'Katamari Damacy'}
        />
        <Game
          img={'https://images.igdb.com/igdb/image/upload/t_1080p/co29pn.png'}
          name={'Metal Gear Solid 3: Snake Eater'}
        />
        <Game
          img={'https://images.igdb.com/igdb/image/upload/t_1080p/co1nmw.png'}
          name={'Half-Life 2'}
        />
        <Game
          img={'https://images.igdb.com/igdb/image/upload/t_1080p/co2lb9.png'}
          name={'Grand Theft Auto: San Andreas'}
        />
        <Game
          img={'https://images.igdb.com/igdb/image/upload/t_1080p/co209h.png'}
          name={'Need For Speed: Underground 2'}
        />
        <Game
          img={'https://images.igdb.com/igdb/image/upload/t_1080p/co2nc6.png'}
          name={'Spider-Man 2'}
        />
      </div>
    </section>
  );
};

export default Trending;
