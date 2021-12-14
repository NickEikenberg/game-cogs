import React from 'react';
import Header from '../src/components/Header/Header';
import Banner from '../src/components/Banner/Banner';
import Trending from '../src/components/Trending/Trending';
import Footer from '../src/components/Footer/Footer';
import Expensive from '../src/components/Expensive/Expensive';
import NewsletterBanner from '../src/components/NewsletterBanner.js/NewsletterBanner';

const index = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Trending />
      <Expensive />
      <NewsletterBanner />
      <Footer />
    </div>
  );
};

export default index;
