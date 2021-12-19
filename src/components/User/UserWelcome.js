import React, { useContext } from 'react';
import { UserContext } from '../../../pages/_app';
import Link from 'next/link';

const UserWelcome = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div>
      <h1>
        Welcome {currentUser.email}! You can now shop for games or search for
        games to add to your collection.
      </h1>
      <Link href="/" passHref>
        <a>Home</a>
      </Link>
    </div>
  );
};

export default UserWelcome;
