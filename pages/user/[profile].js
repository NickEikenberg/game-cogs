import React, { useContext } from 'react';
import Header from '../../src/components/Header/Header';
import { UserContext } from '../_app';
import { Collection, ForSale, Wantlist } from '../../src/components/User/Index';
import axios from 'axios';

const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  return (
    <div>
      <Header />
      <div className="m-10">
        <h1>Profile page for {currentUser.email}</h1>

        <Collection />
        <ForSale />
        <Wantlist />
      </div>
    </div>
  );
};

export default Profile;
