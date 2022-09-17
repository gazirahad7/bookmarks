/* eslint-disable class-methods-use-this */
import {
  addDoc, collection, deleteDoc, getDoc, getDocs, updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase';

const bookmarksCollectionRef = collection(db, 'bookmarks');

class BookmarksServices {
  getBookmarksList = () => getDocs(bookmarksCollectionRef);

  addList = (list) => addDoc(bookmarksCollectionRef, list);

  updateList = (id, list) => {
    const listRef = getDoc(collection(db, 'bookmarks', id));
    return updateDoc(listRef, list);
  };

  deleteList = (id) => deleteDoc(collection(db, 'bookmarks', id));

  searchList = (searchTerm) => getDocs(bookmarksCollectionRef.where('title', '==', searchTerm));
}

export default new BookmarksServices();
