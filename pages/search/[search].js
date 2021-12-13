import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../src/components/Header/Header';
import EmptySearch from './EmptySearch';

const Search = () => {
  const router = useRouter();
  const { search } = router.query;
  let [searchData, setSearchData] = useState([]);

  return (
    <div>
      <Header />
      <h1>Results for {search}... </h1>

      <div>{searchData.length > 0 ? null : <EmptySearch />}</div>
    </div>
  );
};

export default Search;
