import { SnackbarOrigin } from "@material-ui/core";
import { Color } from '@material-ui/lab/Alert';

export interface ITSnackbar {
    open: boolean;
    message: string;
    vertical?: SnackbarOrigin["vertical"];
    horizontal?: SnackbarOrigin["horizontal"];
    autoHideDuration?: number | any;
    severity?: Color; //'success' | 'info' | 'warning' | 'error';
}