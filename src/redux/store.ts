import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
   user : userReducer // user store 추가하기
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
