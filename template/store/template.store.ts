import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITemplate } from '../../interface/template.interface';

export const TemplateStore = createSlice({
    name: 'template',
    initialState: {
        ITSnackbar: { autoHideDuration: 5000 } as ITemplate["ITSnackbar"],
        ILoader: {
            show: false,
            progress: 0,
        } as ITemplate["ILoader"],
        IAlert: {
            open: false,
            message: "",
            showTime: 5000,
            severity: "",
            onClose: () => { return true }
        } as ITemplate["IAlert"],
        Menu: { indexSelect: 0 }
    },
    reducers: {
        setTSnackbar(state, action: PayloadAction<ITemplate["ITSnackbar"]>) {
            state.ITSnackbar = { ...action.payload, ...state.ITSnackbar };
        },
        setShowLoader(state, action: PayloadAction<boolean>) {
            state.ILoader.show = action.payload;
        },
        setLoaderProgress(state, action: PayloadAction<number>) {
            state.ILoader.progress = action.payload;
        },
        setAlert(state, action: PayloadAction<ITemplate["IAlert"]>) {
            state.IAlert = action.payload;
        },
    }
})

export const {
    setTSnackbar,
    setShowLoader,
    setLoaderProgress,
    setAlert
} = TemplateStore.actions;