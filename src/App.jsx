/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import BookmarksList from './components/BookmarksList';
import GlobalStyles from './components/styles/Global.styles';

import Searchbar from './components/Searchbar';
import SideNavbar from './components/SideNavbar';

function App() {
  return (
    <div className="App">
      <GlobalStyles />

      <SideNavbar />

      <BookmarksList>

        <h1>Bookmarks</h1>

        <Searchbar />
      </BookmarksList>
    </div>
  );
}

export default App;
