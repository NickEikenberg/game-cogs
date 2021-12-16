import React from 'react';
import Link from 'next/link';

const UserLinks = () => {
  return (
    <div className="space-x-2">
      <Link href="/user/login" passHref>
        <button>Login</button>
      </Link>
      <Link href="/user/register" passHref>
        <button>Register</button>
      </Link>
    </div>
  );
};

export default UserLinks;
