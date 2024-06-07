import { configureStore } from '@reduxjs/toolkit'
import eventsReducer, { EventsState } from './events';
import commonReducer, { CommonState } from './common';
import { thunk } from "redux-thunk";

export const makeStore = () => {
  return configureStore({
    reducer: {
      common: commonReducer,
      events: eventsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = {
  common: CommonState;
  events: EventsState;
};
export type AppDispatch = AppStore['dispatch'];