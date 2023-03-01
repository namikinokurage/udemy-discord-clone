import { configureStore } from "@reduxjs/toolkit";
import { channelSlice } from "../features/channelSlice";
import { userSlice } from "../features/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    channel: channelSlice.reducer,
  },
});

export type AppDispatchType = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;
