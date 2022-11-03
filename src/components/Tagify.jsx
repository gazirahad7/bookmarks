/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import Tags from '@yaireo/tagify/dist/react.tagify';
import React, { useRef } from 'react';
import Select from 'react-select';
import { ReactComponent as AddIcon } from '../assets/icons/add-item.svg';
import { useBookmarksContext } from '../hooks/useBookmarksContext';
import BookmarksServices from '../services/bookmarks.services';
import Model from './Model';
import { Label } from './styles/Elements.styles';

//

// import Switch from "@yaireo/ui-switch"

// Tagify settings object
const baseTagifySettings = {
  blacklist: [],
  maxTags: 6,
  backspace: 'edit',
  placeholder: 'type something',
  editTags: 1,
  dropdown: {
    enabled: 0,
  },
  callbacks: {},
};

const suggestions = [
  'apple',
  'banana',
  'cucumber',
  'dewberries',
  'elderberry',
  'farkleberry',
  'grapes',
  'hackberry',
  'imbe',
  'jambolan',
  'kiwi',
  'lime',
  'mango',
  'nectarine',
  'orange',
  'papaya',
  'quince',
  'raspberries',
  'strawberries',
  'tangerine',
  'ugni',
  'voavanga',
  'watermelon',
  'xigua',
  'yangmei',
  'zucchini',
];
const settings = {
  ...baseTagifySettings,
  whitelist: suggestions,
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
};

// console.log("InitialValue", initialValue);
//
const categoryOptions = [

  { value: 'facebook', label: 'Facebook' },
  { value: 'youtube', label: 'Youtube' },
  { value: 'linkedin', label: 'Linkedin' },
];
const tagsOptions = [

  { value: 'html', label: '#HTML' },
  { value: 'css', label: '#CSS' },
  { value: 'js', label: '#JS' },
];

export default function AddList() {
  //
  const tagifyRef = useRef();

  //
  const { dispatch } = useBookmarksContext();
  const [show, setShow] = React.useState(false);

  const [title, setTitle] = React.useState('');
  const [url, setUrl] = React.useState('');
  const [category, setCategory] = React.useState(null);
  const [tags, setTags] = React.useState([]);

  // get multiple selected tags an array

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!title || !url || !category || !tags) {
    //   alert('Please fill all the fields');
    //   return;
    // }
    // get input values as name

    console.log('tags', tags);
    const list = {
      title,
      url,
      category: category.value,
      tags: tags.map((tag) => tag.value),
    };
    console.log(list);

    try {
      const response = await BookmarksServices.addList(list);

      const data = await BookmarksServices.getBookmarksList();

      console.log(response.id);
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

            <Tags
              name="tags"
              tagifyRef={tagifyRef}
              settings={settings}

              onChange={(e) => setTags(e.detail.tagify.value)}
              placeholder="type tags"
            />

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

              <Select className="ctm-focus" defaultValue={category} name="category" onChange={setCategory} options={categoryOptions} />
            </div>

            <div>
              <Label>Tags</Label>

              <Select defaultValue={tags} name="tags" isMulti />
            </div>

            <div />

            <button className="btn" type="submit">Add</button>
          </form>
        </div>

      </Model>
    </div>
  );
}
