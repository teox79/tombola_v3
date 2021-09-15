import { Snackbar } from "@material-ui/core";
import { SettingsEthernet } from "@material-ui/icons";
import Alert from '@material-ui/lab/Alert';
import React, { useEffect, useState } from 'react';
import { ITSnackbar } from '../interface/TSnackbar.interface';

const defaultProps: ITSnackbar = {
    open: false,
    message: '',
    autoHideDuration: null,
    severity: 'success'
}

const TSnackbar: React.FC<ITSnackbar> = props => {
    const { vertical = 'top', horizontal = 'right', open, message, autoHideDuration, severity } = props;

    const [state, setState] = useState({ open })

    useEffect(() => {
        setState({ open });
    }, [open])

    const handleClose = (_event: any, reason: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setState({ open: false });
    };

    return (
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={state.open}
            key={vertical + horizontal}
            autoHideDuration={autoHideDuration}
            onClose={handleClose}
        >
            <Alert severity={severity}>
                {message}
            </Alert>
        </Snackbar>
    );
}

TSnackbar.defaultProps = defaultProps;

export default TSnackbar;
