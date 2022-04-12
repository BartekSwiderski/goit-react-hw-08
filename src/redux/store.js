import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./reducers";
import { contactApi } from "./api";

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware),
});
