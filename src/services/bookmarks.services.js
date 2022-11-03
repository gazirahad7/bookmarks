/* eslint-disable class-methods-use-this */
import {
  addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where
} from 'firebase/firestore';
import { db } from '../firebase';

const bookmarksCollectionRef = collection(db, 'bookmarks');

class BookmarksServices {
  getBookmarksList = () => getDocs(bookmarksCollectionRef);

  addList = (list) => addDoc(bookmarksCollectionRef, list);

  updateList = (id, list) => {
    const ListRef = doc(db, 'bookmarks', id);
    return updateDoc(ListRef, list);
  };

  singleList = (id) => {
    const bookmarks = doc(db, 'bookmarks', id);
    return getDoc(bookmarks);
  };

  // deleteList = (id) => deleteDoc(collection(db, 'bookmarks', id));

  deleteList = (id) => {
    const bookmarks = doc(db, 'bookmarks', id);
    return deleteDoc(bookmarks);
  };

  searchList = (searchTerm) => {
    const q = query(bookmarksCollectionRef, where('title', '==', searchTerm));
    console.log(q);

    return getDocs(q);
  };
}

export default new BookmarksServices();
