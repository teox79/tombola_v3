import { Control, useForm } from "react-hook-form";
import React, { useEffect, useState } from "react"

import CustomTextArea from "../form/CustomTextArea";
import CustomSelect from "../form/CustomSelect";
import validationSchema from "./Validations";
import { yupResolver } from '@hookform/resolvers/yup';
import { getCartelleSelector } from "./store/cartelle.selector";
import { getTombolaSelector } from "../tombola/store/tombola.selector";
import { ICartella, ICartellaFormData, ICartelle, ICartelleForm } from "../../interface/cartelle.interface";
import { useSelector } from "react-redux";
import _ from 'lodash';

const CartelleForm: React.FC<Partial<ICartelleForm>> = (props) => {
    const { handleSubmitForm, setForm, form = { isDirty: false, isValid: false } } = props;
    const tombolaState = useSelector(getTombolaSelector)
    const cartelleState = useSelector(getCartelleSelector)
    const [giocatori, setGiocatori] = useState({} as ICartelle);
    const [showGiocatore, setShowGiocatore] = useState(false as boolean);

    // https://react-hook-form.com/api/useform/
    const { reset, control, handleSubmit, formState, getValues } = useForm<ICartellaFormData>({
        mode: "all",
        resolver: yupResolver(validationSchema),
        //defaultValues: { players: '-' },
    });

    const onSubmit = (data: ICartellaFormData) => {
        console.log(data)
        if (handleSubmitForm) {
            //handleSubmitForm(data)
        }
    }

    const renderGiocatori = () => {
        const html = [<option key={`player${0}`} value='add'>Aggiungi</option>] as any[];
        _.values(giocatori).forEach((item, index) => {
            html.push(<option key={`player${index}`} value={item?.giocatore}>{item?.giocatore}</option>);
        });
        return html;
    }

    const palyerOnChangeHandle = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === 'add') {
            setShowGiocatore(true);
        } else {
            setShowGiocatore(false);
        }
    }

    const renderGiocatore = () => {
        if (showGiocatore) {
            return (
                <CustomTextArea
                    name="giocatore"
                    control={control as unknown as Control}
                    label="Giocatore"
                />
            )
        }
    }


    useEffect(() => {
        console.log("players : ", getValues("players"))
        if (formState.isDirty !== form.isDirty ||
            formState.isValid !== form.isValid) {
            setForm({
                isDirty: formState.isDirty,
                isValid: formState.isValid
            });
        }
    }, [formState]);

    useEffect(() => {
        reset({ tombola_id: tombolaState.id, totaleCartelle: _.size(cartelleState) })
        const giocatori = _.uniqBy(_.values(cartelleState), 'giocatore') as unknown as ICartelle;
        console.log("giocatori : ", giocatori)
        setGiocatori(giocatori);
    }, [tombolaState, cartelleState])
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} id="cartelle-form">
                <CustomTextArea
                    name="tombola_id"
                    control={control as unknown as Control}
                    type="number"
                    style={{ display: "none" }}
                />
                <CustomSelect
                    id="players"
                    name="players"
                    control={control as unknown as Control}
                    label="Giocatori"
                    defaultValue="-"
                    onChange={palyerOnChangeHandle}
                >
                    <option value="-" key="option_nessuno">Nessuno</option>
                    {renderGiocatori()}
                </CustomSelect>
                {renderGiocatore()}
                <CustomTextArea
                    name="totaleCartelle"
                    control={control as unknown as Control}
                    label="Totale Cartelle"
                    type="number"
                //disabled={true}
                />
                <CustomTextArea
                    name="ncartelle"
                    control={control as unknown as Control}
                    label="N Cartelle"
                    type="number"
                />
            </form>
        </>
    );

}

export default CartelleForm;
