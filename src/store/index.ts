import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { sidebarReducer } from "./sidebarSlice";
import { authReducer } from "./authSlice";

// Configure the persist options
const authPersistConfig = {
    key: "auth",
    storage: storage,
    whitelist: ["isLoggedIn", "access_token", "user"],
};

// Create the persisted reducer
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

// Combine the reducers
const rootReducer = combineReducers({
    auth: persistedAuthReducer,
    sidebar: sidebarReducer,
});

// Configure the store
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware: any) =>
        getDefaultMiddleware({ serializableCheck: false }),
});

// Export the actions
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;