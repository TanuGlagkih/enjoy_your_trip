import { createSlice } from '@reduxjs/toolkit';

export type TItem = {
    title: string,
    id: string,
    isChecked: boolean,
};

export type TItemListState = {
    items: TItem[],
    loading: boolean,
    error: boolean,
};

const initialListState: TItemListState = {
    items: [],
    loading: false,
    error: false,
};

const shoppingListSlice = createSlice({
    name: 'shoppingList',
    initialState: initialListState,
    reducers: {
        setItemsToBuy(state, action) {
            state.items = action.payload
        },
        addItemToBuy(state, action) {
            state.items.push(action.payload)
        },
        removeItemToBuy(state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        setCheckedToBuy(state, action) {
            state.items.map((item) => {
                item.id === action.payload
                    ?
                    (
                        item.isChecked = !item.isChecked
                    ) : (
                        item
                    )
            })
        }
    },
})

export default shoppingListSlice.reducer;
export const { setItemsToBuy, addItemToBuy, removeItemToBuy, setCheckedToBuy } = shoppingListSlice.actions;