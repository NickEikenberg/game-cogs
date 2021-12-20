import React, { useContext } from 'react';
import Header from '../../src/components/Header/Header';
import { UserContext } from '../_app';
import { Collection, ForSale, Wantlist } from '../../src/components/User/Index';

const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  return (
    <div>
      <Header />
      <h1>Profile page for {currentUser.email}</h1>
      {console.log(currentUser)}
      <Collection />
      <ForSale />
      <Wantlist />
    </div>
  );
};

export default Profile;
