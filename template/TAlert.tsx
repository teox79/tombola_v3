import Alert, { Color } from '@material-ui/lab/Alert';

import { IAlert } from '../interface/alert.interface';
import React from "react"
import { Snackbar } from "@material-ui/core";

const defaultProps: Partial<IAlert> = {
    open: false,
    message: "",
    showTime: 2000,
    severity: "",
    onClose: () => console.log("close")
}

const Talert: React.FC<IAlert> = props => {
    const { open, message, showTime, severity, onClose } = props;

    const handleClose = (event: any, reason: string) => {
        if (reason === 'clickaway') {
            return;
        }
        if (onClose) {
            onClose();
        }
    };

    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={open}
                autoHideDuration={showTime}
                onClose={handleClose}
            >
                <Alert severity={severity as Color}>
                    {message}
                </Alert>
            </Snackbar>
        </>
    );
}

Talert.defaultProps = defaultProps;

export default Talert;

