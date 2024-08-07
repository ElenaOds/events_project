import { configureStore, combineReducers } from '@reduxjs/toolkit';

import eventSlice from './events/eventSlice';
import participantSlice from './participants/participantsSlice';
import filterSlice from './filterSlice';

import { persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
   } from 'redux-persist'
  import storage from 'redux-persist/lib/storage';

  const rootReducer = combineReducers({
    events: eventSlice.reducer,
    participants: participantSlice.reducer,
    filter: filterSlice.reducer,
  })

  const persistConfig = {
    key: 'root',
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
   const store = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    });
  
    export const persistor = persistStore(store);
  
    export default store;