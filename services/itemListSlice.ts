import { createSlice } from '@reduxjs/toolkit';
import { defaultItemsState } from '../assets/data'

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
    //@ts-ignore
    items: defaultItemsState[0],
    loading: false,
    error: false,
};

console.log(defaultItemsState[0])

const itemListSlice = createSlice({
    name: 'itemList',
    initialState: initialListState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload
        },
        addItem(state, action) {
            for (let key in state.items) {
                if (key == action.payload.section) {

                    //@ts-ignore
                    state.items[key].push(action.payload.item)
                }
            }
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