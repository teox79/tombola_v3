import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITombola } from "../../../interface/tombola.interface"

export const TombolaStore = createSlice({
    name: 'tombola',
    initialState: {
        title_first: "",
        title_second: "",
    } as ITombola,
    reducers: {
        setTombola(state, action: PayloadAction<ITombola>) {
            Object.assign(state, action.payload)
        },
    }
})

export const {
    setTombola,
} = TombolaStore.actions;