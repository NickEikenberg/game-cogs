import React, { useContext } from 'react';
import Header from '../../src/components/Header/Header';
import Footer from '../../src/components/Footer/Footer';
import { UserContext } from '../_app';
import { Collection, ForSale, Wantlist } from '../../src/components/User/Index';
import axios from 'axios';

const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  return (
    <div>
      <Header />
      <div className="m-10">
        <Collection />
        <ForSale />
        <Wantlist />
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
