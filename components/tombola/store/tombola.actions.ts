import axios from "axios"
import { ITombola } from "../../../interface/tombola.interface"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { setTombola } from "./tombola.store";
import { setAlert, setShowLoader } from "../../../template/store/template.store"
import { IAlert } from "../../../interface/alert.interface"

export const addTombola = createAsyncThunk<ITombola, ITombola>(
    'tombola/add',
    async (payload, { dispatch, rejectWithValue }) => {
        dispatch(setShowLoader(true))
        try {
            const tombolaProps = await (() => {
                if (!payload.id) {
                    Object.assign(payload, { id: 1 })
                    return axios.post<ITombola>(
                        `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/tombola/`,
                        { ...payload }
                    )
                } else {
                    /*return axios.put<ITombola>(
                        `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/tombola/${payload.id}`,
                        { ...payload }
                    )*/
                    return axios.put<ITombola>(
                        `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/tombola/`,
                        { ...payload }
                    )
                }
            })()
            dispatch(setTombola(tombolaProps.data))
            dispatch(setAlert({message: "Tombola salvata correttamente", severity: "success", open: true} as IAlert))
            //await sleep(500)
            dispatch(setShowLoader(false))
            return tombolaProps.data
        } catch (err) {
            //dispatch(setHttpStatus({status: 'error', actionType: 'addClient'}))
            dispatch(setAlert({message: "Salvataggio tombola  fallito", severity: "error", open: true} as IAlert))
            return rejectWithValue("add Tombola fails!")
        }
    }
)

export const getTombola = createAsyncThunk<ITombola>(
    'tombola',
    async (_payload, { dispatch, rejectWithValue }) => {
        try {
            dispatch(setShowLoader(true))
            const tombola = await axios.get<ITombola>(
                `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/tombola/`
            )
            /*const data = {
                data: client.data,
                updateTime: moment().format('L LTS')
            }*/
            dispatch(setTombola(tombola.data as unknown as ITombola))
            //await sleep(500)
            dispatch(setShowLoader(false))
            return tombola.data;
        } catch (err) {
            //dispatch(setHttpStatus({status: 'error', actionType: 'getClients'}))

            return rejectWithValue("get Tombola fails!")
        }
    }
)
