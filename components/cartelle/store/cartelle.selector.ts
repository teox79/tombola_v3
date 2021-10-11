import { ICartelle } from "interface/cartelle.interface";
import {RootState} from "../../../pages/_app";

export const getCartelleSelector = (state: RootState) => {
    return state.cartelle as ICartelle
}

