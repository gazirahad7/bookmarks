/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ReactComponent as Add } from '../assets/icons/add.svg';
import { ReactComponent as Delete } from '../assets/icons/delete.svg';
import { useBookmarksContext } from '../hooks/useBookmarksContext';
import BookmarksServices from '../services/bookmarks.services';
import MyLoader from './MyLoader';
import Searchbar from './Searchbar';
import { CollationContainer } from './styles/Containers.styles';
import { SideBarIcon, SideBarLi } from './styles/Elements.styles';
import Update from './Update';

export default function BookmarksList() {
  const { bookmarks, dispatch } = useBookmarksContext();
  const [searchData, setSearchData] = React.useState([]);
  const [loader, setLoader] = React.useState(true);
  const getBookmarks = async () => {
    const data = await BookmarksServices.getBookmarksList();
    dispatch({ type: 'SET_BOOKMARKS', payload: data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) });
    setLoader(false);
  };

  const actionHandler = async (id) => {
    await BookmarksServices.deleteList(id);
    toast.success('Deleted successfully');
    getBookmarks();
  };
  const [searchItem, setSearchItem] = React.useState('');
  const handleSearch = (data) => {
    setSearchItem(data);

    const isSearchData = bookmarks.filter((item) => item.title.toLowerCase().includes(searchItem.toLowerCase().trim()
    || item.category.toLowerCase().includes(searchItem.toLowerCase().trim())));
    // setSearchData(isSearchData);

    if (isSearchData.length === 0 || searchItem === '') {
      setSearchData(bookmarks);
    } else if (isSearchData.length > 0) {
      setSearchData(isSearchData);
    }
  };
  //
  React.useEffect(() => {
    getBookmarks();
    handleSearch(searchItem);
  }, []);

  console.log('Render... BookmarksList');
  return (
    <div className="main">

      <ToastContainer />
      <div className="main-container">
        <Searchbar getSearchData={handleSearch} />
        Bookmark list
        <CollationContainer>
          {/* <MyLoader /> */}

          { loader && <MyLoader /> }

          {
          searchData.length === 0 ? (

            bookmarks.map((el) => (
              <div className="bookmark-el" key={el.id}>
                <a href={el.url} target="_blank" key={el.id} rel="noreferrer">
                  <SideBarLi key={el.id} className="item">
                    <SideBarIcon>
                      <Add />
                    </SideBarIcon>
                    <span className="text nav-text">{el.title}</span>
                  </SideBarLi>
                </a>
                <div className="action-btn">
                  <Update id={el.id} />
                  <Delete className="action-icon" id={el.id} onClick={() => actionHandler(el.id)} />
                </div>
              </div>

            ))

          )
            : (

              searchData.map((el) => (
                <div className="bookmark-el" key={el.id}>
                  <a href={el.url} target="_blank" key={el.id} rel="noreferrer">
                    <SideBarLi key={el.id} className="item">
                      <SideBarIcon>
                        <Add />
                      </SideBarIcon>
                      <span className="text nav-text">{el.title}</span>
                    </SideBarLi>
                  </a>
                  <div className="action-btn">
                    <Update className="action-icon" id={el.id} />
                    <Delete className="action-icon" id={el.id} onClick={() => actionHandler(el.id)} />
                  </div>
                </div>

              ))
            )

}
        </CollationContainer>
      </div>
    </div>
  );
}
