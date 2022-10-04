import React from 'react';

import { ReactComponent as Search } from '../assets/icons/search.svg';

import AddList from './AddList';

export default function Searchbar() {
  return (

    <div className="search-cont">
      <div className="searchbar">
        <input type="text" placeholder="Search" />
        <div className="search-icon">
          <Search />
        </div>
      </div>

      <div className="add-icon">

        <AddList />
      </div>

    </div>

  );
}
