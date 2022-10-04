/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react';

export const BookmarksContext = createContext();

export const BookmarksReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BOOKMARKS':
      return {

        bookmarks: action.payload,
      };
    case 'ADD_BOOKMARKS':

      return {
        bookmarks: [...state.bookmarks, action.payload],
      };

    default:
      return state;
  }
};

export function BookmarksContextProvider({ children }) {
  const [state, dispatch] = useReducer(BookmarksReducer, {
    bookmarks: [],
  });
  return (
    <BookmarksContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BookmarksContext.Provider>
  );
}
