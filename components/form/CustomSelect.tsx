import { FormHelperText, Select } from "@material-ui/core";

import { Control } from "react-hook-form/dist/types";
import { Controller } from "react-hook-form";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import React from "react";

interface Props {
    id?: string
    name: string
    label: string
    defaultValue: string
    control: Control
    required?: boolean
    disabled?: boolean
    readonly?: boolean
}

const defaultProps: Partial<Props> = {
    label: "",
    defaultValue: "",
    required: false,
    disabled: false,
    readonly: false,
}

const CustomSelect: React.FC<Props> = (props) => {

    const { id, name, label, defaultValue, control, required, disabled, children, readonly } = props;

    const labelId = `${name}-label`;
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => {
                return (
                    <FormControl required={required} fullWidth error={!!error}>
                        <InputLabel id={labelId}>{label}</InputLabel>
                        <Select
                            defaultValue={defaultValue}
                            id={id}
                            {...field}
                            native
                            inputProps={{
                                name: { name },
                            }}
                            disabled={disabled}
                        >
                            <option value="">{label} ...</option>
                            {children}
                        </Select>
                        <FormHelperText>{error ? error.message : null}</FormHelperText>
                    </FormControl>
                )
            }}
        />


    );
};

CustomSelect.defaultProps = defaultProps;

export default CustomSelect;
