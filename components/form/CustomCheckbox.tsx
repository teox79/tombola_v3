import { Checkbox, FormControl, FormControlLabel, FormHelperText } from "@material-ui/core";

import { CheckboxProps } from "@material-ui/core/Checkbox";
import { Control } from "react-hook-form/dist/types";
import { Controller } from "react-hook-form";
import React from "react";

interface Props {
    name: string
    label?: string
    control: Control
    required?: boolean
    onHandleChange?: (checked: boolean) => void
    error?: string
    color?: CheckboxProps["color"],
    disabled?: boolean,
    className?: string
}

const defaultProps: Partial<Props> = {
    name: "",
    label: "",
    required: false,
    error: "",
    color: "primary" as CheckboxProps["color"],
    disabled: false
}

const CustomCheckbox: React.VFC<Props> = ({
    ...props
}) => {

    const { name, label, control, required, onHandleChange, error, color, disabled, className } = props;

    const handleCheck = (checked: boolean) => {
        if (onHandleChange) {
            onHandleChange(checked)
        }
        return checked;
    };

    return (
        <FormControl error={!!error} className={className}>
            <FormHelperText>{error}</FormHelperText>
            <Controller
                name={name}
                render={({ field }) =>
                (
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={(e) =>
                                    field.onChange(
                                        handleCheck(e.target.checked)
                                    )
                                }
                                {...(props as CheckboxProps)}
                                color={color}
                                disabled={disabled}
                            />
                        }
                        label={required ? `${label}*` : label}
                    />
                )
                }
                control={control}
            />

        </FormControl>
    );
};

CustomCheckbox.defaultProps = defaultProps;

export default CustomCheckbox;
