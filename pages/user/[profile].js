import React, { useContext } from 'react';
import Header from '../../src/components/Header/Header';
import { UserContext } from '../_app';
import { Collection, ForSale, Wantlist } from '../../src/components/User/Index';
import axios from 'axios';

const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const getUser = () => {
    axios
      .get('localhost:3000/api/useraccount/39')
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  getUser();

  return (
    <div>
      <Header />
      <h1>Profile page for {currentUser.email}</h1>

      <Collection />
      <ForSale />
      <Wantlist />
    </div>
  );
};

export default Profile;
