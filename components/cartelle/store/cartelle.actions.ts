import axios, { AxiosResponse } from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { setCartelle } from "./cartelle.store";
import { setAlert, setShowLoader, setLoaderProgress } from "../../../template/store/template.store"
import { IAlert } from "../../../interface/alert.interface"
import { generateCartelle } from "../../../utility/cartelle";
import { ICartelle } from "interface/cartelle.interface";
import { sleep } from "../../../utility/utility";

export const addCartelle = createAsyncThunk<ICartelle>(
    'cartelle/add',
    async (payload, { dispatch, rejectWithValue }) => {
        dispatch(setShowLoader(true))
        try {
            const cartelle = generateCartelle(payload);
            /*
                        var promises = cartelle.map((cartella) => {
                            return axios.post<ICartelle>(
                                `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/cartelle/`,
                                { ...cartella }, config
                            )
                          })
                          Promise.all(promises).then(function(results) {
                              console.log(results)
                          })
                          */
            let cartelleProps = {} as AxiosResponse<ICartelle>;
            let count = 1;
            for (let cartella of cartelle) {
                cartelleProps = await axios.post<ICartelle>(
                    `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/cartelle/`,
                    { ...cartella }
                )
                await sleep(50);
                let progress: number = parseInt(((count / cartelle.length) * 100).toFixed(0));
                dispatch(setLoaderProgress(progress))
                count++;
            }
            dispatch(setAlert({ message: "Cartelle create correttamente", severity: "success", open: true } as IAlert))
            dispatch(setShowLoader(false))

            /*
                        const cartelleProps = (() => {
                            cartelle.forEach(async cartella => {
                                await axios.post<ICartelle>(
                                    `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/cartelle/`,
                                    { ...cartella }, config
                                )
                            });
                        })()*/
            return cartelleProps.data;
        } catch (err) {
            //dispatch(setHttpStatus({status: 'error', actionType: 'addClient'}))
            dispatch(setAlert({ message: "Salvataggio cartelle fallito", severity: "error", open: true } as IAlert))
            return rejectWithValue("add cartelle fails!")
        }
    }
)

export const getCartelle = createAsyncThunk<ICartelle>(
    'tombola',
    async (_payload, { dispatch, rejectWithValue }) => {
        try {
            dispatch(setShowLoader(true))
            const cartelle = await axios.get<ICartelle>(
                `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/cartelle/`
            )
            dispatch(setCartelle(cartelle.data as unknown as ICartelle))
            dispatch(setShowLoader(false))
            return cartelle.data;
        } catch (err) {
            //dispatch(setHttpStatus({status: 'error', actionType: 'getClients'}))

            return rejectWithValue("get cartelle fails!")
        }
    }
)
