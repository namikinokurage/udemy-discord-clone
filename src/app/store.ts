import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/userSlice";

export const store = configureStore({ reducer: userSlice.reducer });

export type AppDispatchType = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;
