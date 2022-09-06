import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import shoppingListSlice from "./shoppingListSlice";
import itemListSlice from "./itemListSlice";

const rootReducer = combineReducers({
    itemList: itemListSlice,
    shoppingList: shoppingListSlice,
});

export type TRootState = ReturnType<typeof rootReducer>

export const store = configureStore({
    reducer: rootReducer,
})

