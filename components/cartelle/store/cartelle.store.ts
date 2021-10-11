import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICartelle } from 'interface/cartelle.interface';

export const CartelleStore = createSlice({
    name: 'cartelle',
    initialState: {
    } as ICartelle,
    reducers: {
        setCartelle(state, action: PayloadAction<ICartelle>) {
            Object.assign(state, action.payload)
        },
    }
})

export const {
    setCartelle,
} = CartelleStore.actions;