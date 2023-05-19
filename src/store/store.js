import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contacts/contactsApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { filterReducer } from './filter/slice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

setupListeners(store.dispatch);
