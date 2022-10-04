import './App.css';
import BookmarksList from './components/BookmarksList';
import Searchbar from './components/Searchbar';
import SideNavbar from './components/SideNavbar';
import GlobalStyles from './components/styles/Global.styles';
// import "./styles.scss"

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <SideNavbar />
      <BookmarksList>
        <Searchbar />
      </BookmarksList>
    </div>
  );
}

export default App;
