import React from 'react';
import Link from 'next/link';
import { RiArrowDownSFill } from 'react-icons/ri';

const NavLinks = () => {
  return (
    <div className="space-x-2 flex">
      <Link href="/" passHref>
        <button className="flex items-center">
          Explore <RiArrowDownSFill />
        </button>
      </Link>
      <Link href="/" passHref>
        <button className="flex items-center">
          Marketplace <RiArrowDownSFill />
        </button>
      </Link>
      <Link href="/" passHref>
        <button className="flex items-center h-full">
          Community <RiArrowDownSFill />
        </button>
      </Link>
    </div>
  );
};

export default NavLinks;
