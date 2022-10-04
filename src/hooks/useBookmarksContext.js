/* eslint-disable import/prefer-default-export */
import { useContext } from 'react';
import { BookmarksContext } from '../context/BookmarksContext';

export const useBookmarksContext = () => {
  const context = useContext(BookmarksContext);

  if (!context) {
    throw new Error('useBookmarksContext must be used within BookmarksContext');
  }

  return context;
};
