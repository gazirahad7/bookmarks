import React from 'react';
import { ReactComponent as AddIcon } from '../assets/icons/add-item.svg';
import { ReactComponent as Search } from '../assets/icons/search.svg';
import AddList from './AddList';

// eslint-disable-next-line react/prop-types
export default function Searchbar({ getSearchData }) {
  const [data, setData] = React.useState([]);
  const handleSearch = (e) => {
    setData(e.target.value);
    getSearchData(data);
  };
  return (
    <div className="search-cont">
      <div className="searchbar">
        <input type="text" placeholder="Search" onChange={handleSearch} />
        <div className="search-icon">
          <Search />
        </div>
      </div>
      <div className="add-icon">
        <AddList icon={<AddIcon />} />
      </div>
    </div>
  );
}
