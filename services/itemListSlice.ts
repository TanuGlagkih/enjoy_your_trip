import { createSlice } from '@reduxjs/toolkit';

export type TItem = {
    title: string,
    id: string,
    isChecked: boolean,
};

// export type TItemGroup = {
//     key: 
// };

export type TItemListState = {
    items: TItem[]//TItemGroup,
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
            for (let key in state.items) {
                if (key == action.payload.title) {

                    //@ts-ignore
                    state.items[key] = state.items[key].filter((item) => item.id !== action.payload.id)
                }
            }
        },
        setChecked(state, action) {
            for (let key in state.items) {
                if (key == action.payload.title) {
                    //@ts-ignore
                    state.items[key].map((item) => {
                        item.id === action.payload.id
                            ?
                            (
                                item.isChecked = !item.isChecked
                            ) : (
                                item
                            )
                    })
                }
            }
        }
    },
})

export default itemListSlice.reducer;
export const { setItems, addItem, removeItem, setChecked } = itemListSlice.actions;