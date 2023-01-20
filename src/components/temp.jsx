import Tags from '@yaireo/tagify/dist/react.tagify';
import React from 'react';
import { ReactComponent as AddIcon } from '../assets/icons/add-item.svg';
import { ReactComponent as Search } from '../assets/icons/search.svg';
import { categorySuggestions } from '../data';
import AddList from './AddList';

const baseTagifySettings = (maxTags) => ({
  blacklist: [],
  maxTags: maxTags || 5,
  backspace: 'edit',
  placeholder: 'type something',
  editTags: 1,
  dropdown: {
    enabled: 0,
  },
  callbacks: {},
});
const settings = (sugg, maxTags, handleChange) => ({
  ...baseTagifySettings(maxTags),
  whitelist: sugg,
  callbacks: {
    add: handleChange,
    remove: handleChange,
    blur: handleChange,
    edit: handleChange,
    invalid: handleChange,
    click: handleChange,
    focus: handleChange,
    'edit:updated': handleChange,
    'edit:start': handleChange,
  },
});

// eslint-disable-next-line react/prop-types
export default function Searchbar({ getSearchData }) {
  const [data, setData] = React.useState([]);
  const handleSearch = (e) => {
    alert('search');
    setData(e.target.value);
    getSearchData(data);
    console.log('data', data);
  };

  const handleChangeCategory = (e) => {
    console.log('e', e.detail.tagify.value.map((item) => item.value));

    setData(e.detail.tagify.value.map((item) => item.value));
    getSearchData(data);
    console.log('data', data);
  };

  return (
    <div className="search-cont">
      <div className="searchbar">
        <Tags name="tags" type="text" settings={settings(categorySuggestions, 5, handleChangeCategory)} onChange={handleChangeCategory} />
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
