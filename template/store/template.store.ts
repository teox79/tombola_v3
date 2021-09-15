import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITemplate } from '../../interface/template.interface';

export const TemplateStore = createSlice({
    name: 'template',
    initialState: {
        ITSnackbar: { autoHideDuration: 5000 } as ITemplate["ITSnackbar"]
    },
    reducers: {
        SetTSnackbar(state, action: PayloadAction<ITemplate["ITSnackbar"]>) {
            state.ITSnackbar = { ...action.payload, ...state.ITSnackbar };
        },
    }
})

export const {
    SetTSnackbar,
} = TemplateStore.actions;