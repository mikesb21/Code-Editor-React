import persistReducer from 'redux-persist/lib/persistReducer';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['darkMode'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
