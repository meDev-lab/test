import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, PersistConfig } from 'redux-persist';
import bookReducer from './bookReducer';

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['book'],
};

const persistedReducer = persistReducer(persistConfig, bookReducer);

export default persistedReducer;
