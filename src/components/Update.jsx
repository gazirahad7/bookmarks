/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import Tags from '@yaireo/tagify/dist/react.tagify';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ReactComponent as Edit } from '../assets/icons/edit.svg';
import { categorySuggestions, tagsSuggestions } from '../data';
import { useBookmarksContext } from '../hooks/useBookmarksContext';
import BookmarksServices from '../services/bookmarks.services';
import Model from './Model';
import { Label } from './styles/Elements.styles';

export default function Update({ id }) {
  const { dispatch } = useBookmarksContext();
  const [show, setShow] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [url, setUrl] = React.useState('');
  const [category, setCategory] = React.useState(null);
  const [tags, setTags] = React.useState([]);

  const getBookmark = async (listID) => {
    const data = await BookmarksServices.singleList(listID);
    /*  console.log('xxxxx', data.data().title);
    console.log('yyyy', data.data().tags);
    setTitle(data._document.data.value.mapValue.fields.title.stringValue);
    setUrl(data._document.data.value.mapValue.fields.url.stringValue);
    setCategory(data._document.data.value.mapValue.fields.category.arrayValue.values.map((item) => item.stringValue));
    setTags(data._document.data.value.mapValue.fields.tags.arrayValue.values.map((item) => item.stringValue)); */

    setTitle(data.data().title);
    setUrl(data.data().url);
    setCategory(data.data().category);
    setTags(data.data().tags);
  };

  // Tagify settings object
  const baseTagifySettings = (maxTags) => ({
    blacklist: [],
    maxTags: maxTags || 5,
    backspace: 'edit',
    placeholder: '',
    editTags: 1,
    dropdown: {
      enabled: 0,
    },
    callbacks: {},
  });
  const handleChangeCategory = (e) => {
    setCategory(e.detail.tagify.value.map((item) => item.value));
  };
  const handleChangeTags = (e) => {
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
    if (!title || !url || !category || !tags) {
      toast.error('Please fill all the fields');
      return;
    }
    const list = {
      title,
      url,
      category,
      tags,
    };
    try {
      await BookmarksServices.updateList(id, list);
      const data = await BookmarksServices.getBookmarksList();
      dispatch({ type: 'SET_BOOKMARKS', payload: data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) });
      toast.success('Updated successfully');
      setShow(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getBookmark(id);
  }, [id]);
  console.log('Render... Update');
  return (
    <div>
      <button type="button" onClick={() => setShow(true)}>
        <Edit className="action-icon" />
      </button>
      <Model open={show} close={() => setShow(false)}>
        <div className="add-list-cont">
          <form onSubmit={handleSubmit}>
            <h3>Update Bookmarks</h3>
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
              <Tags name="tags" settings={settings(categorySuggestions, 1, handleChangeCategory)} initialValue={[category]} />
            </div>
            <div>
              <Label>Tags</Label>
              <Tags name="tags" settings={settings(tagsSuggestions, 5, handleChangeTags)} initialValue={[tags]} />
            </div>

            <button className="btn" type="submit">Update</button>
          </form>
        </div>
      </Model>
    </div>
  );
}
