import { ITemplate } from "../../interface/template.interface"
import { RootState } from "../../pages/_app"

export const getITSnackbarSelector = (state: RootState) => {
    return state.template.ITSnackbar as ITemplate["ITSnackbar"]
}


