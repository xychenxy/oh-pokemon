import { configureStore, AnyAction } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducers";
import thunk, { ThunkDispatch } from "redux-thunk";

export const store = configureStore({
	reducer: rootReducer,
	middleware: [thunk],
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
