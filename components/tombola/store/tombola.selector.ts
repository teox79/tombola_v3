import {RootState} from "../../../pages/_app";
import { ITombola } from "../../../interface/tombola.interface"

export const getTombolaSelector = (state: RootState) => {
    return state.tombola as ITombola
}

