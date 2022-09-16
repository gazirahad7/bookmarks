import React from 'react';

import { ReactComponent as Search } from '../assets/icons/search.svg';

export default function Searchbar() {
  return (

    <div className="searchbar">
      <input type="text" placeholder="Search" />
      <div className="search-icon">
        <Search />
      </div>
    </div>

  );
}
