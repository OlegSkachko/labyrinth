import { configureStore } from '@reduxjs/toolkit';
import labyrinthReducer from './../../slices';

export const store = configureStore({
  reducer: {
    labyrinth: labyrinthReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
