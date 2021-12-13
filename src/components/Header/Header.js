import React from 'react';
import Searchbar from './Searchbar';
import NavLinks from './NavLinks';
import UserIcon from './UserIcon';
import UserLinks from './UserLinks';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex items-center justify-between text-white bg-gray-800 p-3 w-full">
      <Link href="/" passHref>
        <button className="text-3xl">GameCogs</button>
      </Link>
      <Searchbar />
      <NavLinks />
      {/* <UserIcon /> */}
      <UserLinks />
    </div>
  );
};

export default Header;
