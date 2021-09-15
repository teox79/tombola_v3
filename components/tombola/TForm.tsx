import { Control, useForm } from "react-hook-form";
import React from "react"

import validationSchema from "../form/Validations";
import { yupResolver } from '@hookform/resolvers/yup';
import { ITombola, ITombolaForm } from '../../interface/tombola.interface'
import CustomTextArea from "../../components/form/CustomTextArea";

const TForm: React.FC<Partial<ITombolaForm>> = (props) => {
    const { handleSubmitForm } = props;

    // https://react-hook-form.com/api/useform/
    const { control, handleSubmit, formState } = useForm<ITombola>({
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
