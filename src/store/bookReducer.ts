// reducers/bookSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../screens/BookList';

interface BookState {
  books: Book[];
}

const initialState: BookState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state: BookState, action: PayloadAction<Book>) => {
      state.books.push(action.payload);
    },
    updateBook: (state: BookState, action: PayloadAction<Book>) => {
      const { id, ...updatedBook } = action.payload;
      const index = state.books.findIndex(book => book.id === id);
      if (index !== -1) {
        state.books[index] = { ...state.books[index], ...updatedBook };
      }
    },
    removeBook: (state: BookState, action: PayloadAction<string>) => {
      state.books = state.books.filter(book => book.id !== action.payload);
    },
    getBooks: (state: BookState) => {
      state.books = state.books;
    },
  },
});

export const { addBook, removeBook, updateBook, getBooks } = bookSlice.actions;
export default bookSlice.reducer;
