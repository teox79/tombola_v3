import { Control, useForm } from "react-hook-form";
import { ITombola, ITombolaForm } from '../../interface/tombola.interface'
import React, { useEffect } from "react"

import CustomTextArea from "../../components/form/CustomTextArea";
import validationSchema from "../form/Validations";
import { yupResolver } from '@hookform/resolvers/yup';
import { AppDispatch } from "@pages/_app";
import { useDispatch, useSelector } from "react-redux"
import { addTombola } from "./store/tombola.actions";
import { getTombolaSelector } from "./store/tombola.selector";

const TForm: React.FC<Partial<ITombolaForm>> = (props) => {
    const { handleSubmitForm, setForm, form = { isDirty: false, isValid: false } } = props;
    const dispatch = useDispatch() as AppDispatch
    const tombola = useSelector(getTombolaSelector)

    // https://react-hook-form.com/api/useform/
    const { reset, control, handleSubmit, formState } = useForm<ITombola>({
        mode: "all",
        resolver: yupResolver(validationSchema),
        //defaultValues: { id: 1 },
    });

    console.log(formState)

    const onSubmit = (data: ITombola) => {
        if (handleSubmitForm) {
            dispatch(addTombola(data))
        }
    }

    useEffect(() => {
        if (formState.isDirty !== form.isDirty ||
            formState.isValid !== form.isValid) {
            setForm({
                isDirty: formState.isDirty,
                isValid: formState.isValid
            });
        }
    }, [formState]);

    useEffect(() => {
        reset(tombola)
    }, [tombola])

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} id="tombola-form">
                <CustomTextArea
                    name="id"
                    control={control as unknown as Control}
                    type="text"
                    style={{ display: "none" }}
                />
                <CustomTextArea
                    name="title_first"
                    control={control as unknown as Control}
                    label="Descrizione 1"
                />
                <CustomTextArea
                    name="title_second"
                    control={control as unknown as Control}
                    label="Descrizione 2"
                />
            </form>
        </>
    );

}

export default TForm;
