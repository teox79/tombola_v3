import { FormControl, TextField } from "@material-ui/core";

import { BaseTextFieldProps } from "@material-ui/core/TextField/TextField";
import { Control } from "react-hook-form/dist/types";
import { Controller } from "react-hook-form";
import React from "react";

interface Props {
    name: string
    label?: string
    control: Control
    isMultiline?: boolean
    type?: string
    required?: boolean
    disabled?: boolean
    style?: {}
}

const defaultProps: Partial<Props> = {
    label: "",
    required: false,
    isMultiline: false,
    type: "text",
    disabled: false,
}

const CustomTextArea: React.VFC<Props> = (props) => {
    const { name, label, control, isMultiline, type, required, disabled, style } = props;
    return (
        <FormControl required={required} fullWidth style={style}>
            <Controller
                name={name}
                control={control}
                render={({ field, fieldState: { error } }) => (
                    <TextField
                        {...field}
                        multiline={isMultiline}
                        rows={4}
                        type={type}
                        error={!!error}
                        helperText={error ? error.message : null}
                        label={required ? `${label}*` : label}
                        disabled={disabled}
                    />
                )}
            />
        </FormControl>
    );
};

CustomTextArea.defaultProps = defaultProps;

export default CustomTextArea;