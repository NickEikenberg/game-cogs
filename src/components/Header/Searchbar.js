import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocus, setSearchFocus] = useState(false);

  useEffect(() => {
    searchQuery.length > 0 ? console.log(searchQuery) : null;
  }, [searchQuery]);

  const changeFocus = () => {
    setSearchFocus(true);
  };

  const searchBtn = React.createRef();

  return (
    <div className="relative text-black">
      <input
        className="border border-gray-300 rounded-md pl-4 pr-8 py-1 focus:outline-none"
        name="search"
        placeholder="Search"
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={changeFocus}
        onKeyPress={(e) =>
          e.key === 'Enter' ? searchBtn.current.click() : null
        }
      />
      <Link href={`/search/${searchQuery}`} passHref>
        <button className="absolute right-1 top-0 mt-2 mr-2" ref={searchBtn}>
          <FaSearch />
        </button>
      </Link>
    </div>
  );
};

export default Searchbar;
