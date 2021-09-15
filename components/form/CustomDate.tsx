import { FormControl, TextField } from "@material-ui/core";

import { Control } from "react-hook-form/dist/types";
import { Controller } from "react-hook-form";
import React from "react";

interface Props {
    id?: string
    name: string
    label?: string
    control: Control
    defaultValue?: string
    required?: boolean
    disabled?: boolean
    readonly?: boolean
    className?: string
}

const defaultProps: Partial<Props> = {
    label: "",
    defaultValue: "",
    required: false,
    disabled: false,
    readonly: false
}

const CustomDate: React.VFC<Props> = (props) => {

    const { id, name, label, control, required, disabled, defaultValue, readonly, className } = props;

    return (
        <FormControl required={required} fullWidth className={className}>
            <Controller
                name={name}
                control={control}
                render={({ field, fieldState: { error } }) => {
                    return (
                        <TextField
                            {...field}
                            name={name}
                            id={id}
                            label={required ? `${label}*` : label}
                            type="date"
                            defaultValue={defaultValue}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            error={!!error}
                            helperText={error ? error.message : null}
                            disabled={disabled}
                            value={field.value === undefined ? "" : field.value}
                            inputProps={
                                { readOnly: readonly, }
                            }
                        />)
                }
                }
            />
        </FormControl>
    );
};

CustomDate.defaultProps = defaultProps;

export default CustomDate;
