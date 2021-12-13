import React from 'react';
import Header from '../src/components/Header/Header';
import Banner from '../src/components/Banner/Banner';
import Trending from '../src/components/Trending/Trending';
import Footer from '../src/components/Footer/Footer';

const index = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Trending />
      <Footer />
    </div>
  );
};

export default index;
