// store.ts
import { configureStore } from '@reduxjs/toolkit';
import persistedReducer from './persistenceConfig'; // Import persisted reducer

const store = configureStore({
  reducer: {
    book: persistedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
