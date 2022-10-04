/* eslint-disable react/jsx-key */
// import fetchFavicon from '@meltwater/fetch-favicon';
import React from 'react';
import { ReactComponent as Add } from '../assets/icons/add.svg';
import { ReactComponent as Edit } from '../assets/icons/edit.svg';
import { useBookmarksContext } from '../hooks/useBookmarksContext';
import BookmarksServices from '../services/bookmarks.services';
import Model from './Model';
import Searchbar from './Searchbar';
import { CollationContainer } from './styles/Containers.styles';
import { SideBarIcon, SideBarLi } from './styles/Elements.styles';

/* function showFavicon(url) {
  fetchFavicon(url)
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
} */
export default function BookmarksList() {
  const { bookmarks, dispatch } = useBookmarksContext();
  // const [bookmarks, setBookmarks] = useState([]);
  const getBookmarks = async () => {
    const data = await BookmarksServices.getBookmarksList();
    // dispatch(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    dispatch({ type: 'SET_BOOKMARKS', payload: data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) });
  };

  React.useEffect(() => {
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
            <a href={el.url} target="_blank" key={el.id} rel="noreferrer">

              <SideBarLi key={el.id} className="item">

                <div className="action-btn">
                  <Edit />
                  <Edit />

                </div>
                <SideBarIcon>
                  {
                    <Add />

                    // show favicon  form el url
                    // <img src={showFavicon(el.url)} alt="favicon" />

                }
                </SideBarIcon>
                <span className="text nav-text">{el.title}</span>

              </SideBarLi>

            </a>
          ))}

        </CollationContainer>
      </div>
    </div>
  );
}
