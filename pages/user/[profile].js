import React, { useContext } from 'react';
import Header from '../../src/components/Header/Header';
import { UserContext } from '../_app';

const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  return (
    <div>
      <Header />
      <h1>Profile page for {currentUser.email}</h1>
    </div>
  );
};

export default Profile;
