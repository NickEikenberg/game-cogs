import React from 'react';
import Link from 'next/link';

const UserLinks = () => {
  return (
    <div className="space-x-2">
      <Link href="/user/login" passHref>
        <button>Login</button>
      </Link>
      <Link href="/user/register" passHref>
        <button className="bg-black text-white rounded-md px-2 py-1 border-black hover:bg-white hover:text-black transition duration-200">
          Register
        </button>
      </Link>
    </div>
  );
};

export default UserLinks;
