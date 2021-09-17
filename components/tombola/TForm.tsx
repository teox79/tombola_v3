import { Control, useForm } from "react-hook-form";
import { ITombola, ITombolaForm } from '../../interface/tombola.interface'
import React, { useEffect } from "react"

import CustomTextArea from "../../components/form/CustomTextArea";
import validationSchema from "../form/Validations";
import { yupResolver } from '@hookform/resolvers/yup';

const TForm: React.FC<Partial<ITombolaForm>> = (props) => {
    const { handleSubmitForm, setForm, form = { isDirty: false, isValid: false } } = props;

    // https://react-hook-form.com/api/useform/
    const { reset, control, handleSubmit, formState } = useForm<ITombola>({
        mode: "all",
        resolver: yupResolver(validationSchema),
        defaultValues: {
            'title_first': '',
            'title_second': '',
            ncartelle: 0
        }
    });

    const onSubmit = (data: ITombola) => {
        if (handleSubmitForm) {
            handleSubmitForm(data);
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

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} id="tombola-form">
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
                <CustomTextArea
                    name="ncartelle"
                    control={control as unknown as Control}
                    label="N Cartelle"
                />
            </form>
        </>
    );

}

export default TForm;
