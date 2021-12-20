import React, { useContext } from 'react';
import Link from 'next/link';
import { UserContext } from '../../../pages/_app';

const UserIcon = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      <Link href={`/user/${currentUser.email}`} passHref>
        <button>UserIcon</button>
      </Link>
    </div>
  );
};

export default UserIcon;
