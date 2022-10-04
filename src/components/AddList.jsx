/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import Tags from '@yaireo/tagify/dist/react.tagify';
import React from 'react';
import { ReactComponent as AddIcon } from '../assets/icons/add-item.svg';
import { categorySuggestions, tagsSuggestions } from '../data';
import { useBookmarksContext } from '../hooks/useBookmarksContext';
import BookmarksServices from '../services/bookmarks.services';
import Model from './Model';
import { Label } from './styles/Elements.styles';

export default function AddList() {
  const { dispatch } = useBookmarksContext();
  const [show, setShow] = React.useState(false);

  const [title, setTitle] = React.useState('');
  const [url, setUrl] = React.useState('');
  const [category, setCategory] = React.useState(null);
  const [tags, setTags] = React.useState([]);
  // Tagify settings object
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
  const handleChangeCategory = (e) => {
    // console.log(e.type, ' ==> ', e.detail.tagify.value.map((item) => item.value));
    setCategory(e.detail.tagify.value.map((item) => item.value));
  };
  const handleChangeTags = (e) => {
    // console.log(e.type, ' ==> ', e.detail.tagify.value.map((item) => item.value));
    setTags(e.detail.tagify.value.map((item) => item.value));
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!title || !url || !category || !tags) {
    //   alert('Please fill all the fields');
    //   return;
    // }
    const list = {
      title,
      url,
      category,
      tags,
    };
    try {
      const response = await BookmarksServices.addList(list);
      const data = await BookmarksServices.getBookmarksList();
      if (response.id) {
        dispatch({ type: 'SET_BOOKMARKS', payload: data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) });
      }
      // check response success or not
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <button type="button" onClick={() => setShow(true)}>
        <AddIcon />
      </button>
      <Model open={show} close={() => setShow()}>
        <div className="add-list-cont">
          <form onSubmit={handleSubmit}>
            <h3>Add new bookmark</h3>
            <div>
              <Label>Title</Label>
              <input type="text" placeholder="Add title" onChange={(e) => setTitle(e.target.value)} value={title} />
            </div>
            <div>
              <Label>Past URL</Label>
              <input type="text" placeholder="past url" onChange={(e) => setUrl(e.target.value)} value={url} />
            </div>
            <div>
              <Label>Category</Label>
              <Tags name="tags" settings={settings(categorySuggestions, 1, handleChangeCategory)} />
            </div>
            <div>
              <Label>Tags</Label>
              <Tags name="tags" settings={settings(tagsSuggestions, 5, handleChangeTags)} />
            </div>
            <div />
            <button className="btn" type="submit">Add</button>
          </form>
        </div>
      </Model>
    </div>
  );
}
