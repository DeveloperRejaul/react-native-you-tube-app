import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import themeReducer from '../futures/theme/theme.future';
import videosReducer from '../futures/videos/videosSlice';
import tagsReducer from '../futures/tags/tagsSlice';

// config persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  //   whitelist: [], // not save in store
  //   blacklist: ['theme'], // save in store
};

// persist reducer
const persistedThemeReducer = persistReducer(persistConfig, themeReducer);

// setup store
export const store = configureStore({
  reducer: {
    theme: persistedThemeReducer,
    videos: videosReducer,
    tags: tagsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
