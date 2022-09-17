/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import { ReactComponent as Add } from '../assets/icons/add.svg';
import { ReactComponent as Facebook } from '../assets/icons/facebook.svg';
import BookmarksServices from '../services/bookmarks.services';
import Searchbar from './Searchbar';
import { CollationContainer } from './styles/Containers.styles';
import { SideBarIcon, SideBarLi } from './styles/Elements.styles';

import Model from './Model';

export default function BookmarksList() {
  const [bookmarks, setBookmarks] = useState([]);
  const getBookmarks = async () => {
    const data = await BookmarksServices.getBookmarksList();
    setBookmarks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getBookmarks();
  }, []);
  return (
    <div className="main">
      <div className="main-container">

        <Searchbar />
        <Model />
        Bookmark list
        <CollationContainer>

          {bookmarks.map((el) => (

            <SideBarLi className="item">

              <SideBarIcon>
                {
                  el.category === 'Facebook' ? <Facebook /> : <Add />
                }
              </SideBarIcon>
              <span className="text nav-text">{el.title}</span>

            </SideBarLi>

          ))}

        </CollationContainer>
      </div>
    </div>
  );
}
