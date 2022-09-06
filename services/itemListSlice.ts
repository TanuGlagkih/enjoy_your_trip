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

const itemListSlice = createSlice({
    name: 'itemList',
    initialState: initialListState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload
        },
        addItem(state, action) {
            state.items.push(action.payload)
        },
        removeItem(state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        setChecked(state, action) {
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

export default itemListSlice.reducer;
export const { setItems, addItem, removeItem, setChecked } = itemListSlice.actions;