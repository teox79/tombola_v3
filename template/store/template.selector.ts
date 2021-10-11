import { ITemplate } from "../../interface/template.interface"
import { RootState } from "../../pages/_app"

export const getITSnackbarSelector = (state: RootState) => {
    return state.template.ITSnackbar as ITemplate["ITSnackbar"]
}

export const getLoaderSelector = (state: RootState) => {
    return state.template.ILoader as ITemplate["ILoader"]
}

export const getAlertSelector = (state: RootState) => {
    return state.template.IAlert as ITemplate["IAlert"]
}



