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
    onChange: (...args: any[]) => any;
}

const defaultProps: Partial<Props> = {
    label: "",
    defaultValue: "",
    required: false,
    disabled: false,
    readonly: false,
}

const CustomSelect: React.FC<Props> = (props) => {

    const { id, name, label, defaultValue, control, required, disabled, children, readonly, onChange } = props;

    const labelId = `${name}-label`;
    return (
        <Controller
            render={({ field, fieldState: { error } }) => {
                return (
                    <FormControl required={required} fullWidth error={!!error}>
                        <InputLabel id={labelId}>{label}</InputLabel>
                        <Select
                            labelId={labelId}
                            label={label}
                            value={field.value ? field.value : defaultValue}
                            disabled={disabled}
                            readOnly={readonly}
                            onChange={(e) => {
                                console.log("VALUE : ", e.target.value);
                                field.onChange(e.target.value);
                                onChange(e);
                            }}
                        >
                            <option value="" disabled key="option_0">{label} ...</option>
                            {children}
                        </Select>
                        <FormHelperText>{error ? error.message : null}</FormHelperText>
                    </FormControl>
                )
            }}
            name={name}
            control={control}
        />
    );
};

CustomSelect.defaultProps = defaultProps;

export default CustomSelect;
