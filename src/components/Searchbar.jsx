import React from 'react';
import { ReactComponent as AddIcon } from '../assets/icons/add-item.svg';
import { ReactComponent as Search } from '../assets/icons/search.svg';
import { tagsSuggestions } from '../data';
import AddList from './AddList';

// eslint-disable-next-line react/prop-types
export default function Searchbar({ getSearchData }) {
  const [data, setData] = React.useState('');
  const handleSearch = (e) => {
    setData(e.target.value);
    getSearchData(data);
    console.log('data', data);
  };
  const onSearch = (searchTerm) => {
    setData(searchTerm);
    getSearchData(searchTerm);
    // our api to fetch the search result
    console.log('search ', searchTerm);
  };
  return (
    <div className="search-cont">
      <div className="searchbar">
        <input type="text" placeholder="Search" value={data} onChange={handleSearch} />
        <div className="search-icon">
          <Search />
        </div>
        <div className="dropdown">
          {
          tagsSuggestions.filter((item) => {
            const searchTerm = data.toLowerCase();
            const itemTerm = item.toLowerCase();

            return (
              searchTerm && itemTerm.startsWith(searchTerm) && searchTerm !== itemTerm

            );
          })
            .slice(0, 5)
            .map((item) => (
              <div
                className="dropdown-item"
                key={item}
                onClick={() => onSearch(item)}
              >
                {item}
              </div>
            ))

        }
        </div>
      </div>
      <div className="add-icon">
        <AddList icon={<AddIcon />} />
      </div>

    </div>

  );
}
